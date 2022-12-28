// this code has used require module which is old style of code

const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const util = require("util");
const { findById, find } = require("../Model/User");
const { isGeneratorObject } = require("util/types");

const signToken = (id) => {
  return jwt.sign({ id }, "secret", { expiresIn: "1h" });
};

const tokenResponse = (user, statuscode, message, res) => {
  const token = signToken(user._id);
  res.status(statuscode).json({ message: message, token: token });
};

const errorHandler = (statuscode, message, res) => {
  return res.status(statuscode).json({ message: message });
};
const register = async (req, res, next) => {
  const registerObject = req.body;
  try {
    const existingUser = await User.findOne({
      $or: [
        { email: registerObject.email },
        { username: registerObject.username },
      ],
    });
    if (existingUser) {
      return errorHandler(200, "User already exist", res);
    }
    if (registerObject.password === registerObject.confirmPassword) {
      registerObject.password = bcrypt.hashSync(registerObject.password, 12);
      registerObject.confirmPassword = bcrypt.hashSync(
        registerObject.confirmPassword,
        12
      );
      const newUser = await new User(registerObject).save();
      tokenResponse(newUser, 200, "successful register", res);
    } else {
      return errorHandler(404, "password doesnt match", res);
    }
  } catch (err) {
    return res.json(err.message);
  }
};

const login = async (req, res, next) => {
  const loginObject = {
    username: req.body.username,
    password: req.body.password,
  };
  if (!loginObject.username || !loginObject.password) {
    return errorHandler(500, "Please fill both password and username", res);
  }
  try {
    const findUser = await User.findOne({ username: loginObject.username });
    if (!findUser) {
      return errorHandler(400, "User not found", res);
    }
    if (
      loginObject.password &&
      bcrypt.compareSync(loginObject.password, findUser.password)
    ) {
      tokenResponse(findUser, 200, "login Successful", res);
    } else {
      return errorHandler(400, "password didnt match", res);
    }
  } catch (err) {
    return res.json(err.message);
  }
};

const tokenValidation = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    errorHandler(500, "you are not logged in", res);
  }
  try {
    const decode = await util.promisify(jwt.verify)(token, "secret");
    const findUser = await User.findById(decode.id);
    if (!findUser) {
      errorHandler(500, "User not found", res);
    }
    let jwtTimeStamp = decode.iat;
    let changeTimeStamp = parseInt(
      findUser.passwordChangedAt.getTime() / 1000,
      10
    );
    if (changeTimeStamp > jwtTimeStamp) {
      errorHandler(500, "Password changed Login Again", res);
    }
    req.user = findUser;
    next();
  } catch (err) {
    return res.json(err.message);
  }
};

const authorization = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      errorHandler(500, "this task cannot be performed", res);
      next();
    }
    next();
  };
};

module.exports = {
  register,
  login,
  tokenValidation,
  authorization,
};
