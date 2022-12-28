const User = require("../Model/User");
const Product = require("../Model/Product");
const jwt = require("jsonwebtoken");
const util = require("util");

const response = (statuscode, data, message, res) => {
  res.status(statuscode).json({ data: data, message: message });
};

const errorHandler = (statuscode, message, res) => {
  return res.status(statuscode).json({ message: message });
};

const decodeToken = async (token) => {
  const decode = await util.promisify(jwt.verify)(token, "secret");
  const decodedId = decode.id;
  return decodedId;
};

const getProduct = async (req, res, next) => {
  try {
    let product;
    if (req.params.category === "all") {
      product = await Product.find({ isVerified: true }).populate(
        "userId",
        "username"
      );
    } else if (req.params.category === "admin") {
      product = await Product.find({ isVerified: false }).populate(
        "userId",
        "username"
      );
    } else {
      product = await Product.find({
        category: req.params.category,
        isVerified: true,
      }).populate("userId", "username");
    }
    if (!product) {
      return res.json("no product");
    }
    response(200, product, "successfull", res);
  } catch (err) {
    res.json(err.message);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const productObject = req.body;
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    const decodedId = await decodeToken(token);
    const user = await User.findById(decodedId);
    if (!user) {
      return errorHandler(500, "User not found");
    }
    productObject.userId = decodedId;
    const product = new Product(productObject).save();
    response(200, product, "successfull", res);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteProduct = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  const decodedId = await decodeToken(token);
  const user = await User.findById(decodedId);
  if (!user) {
    return errorHandler(500, "User not found", res);
  }
  
 const product = await Product.findById(req.prams.productID);
 const productUser = (product.userID.toString())
 if (user.role === "admin" || productUser === decodedID) {//if (user.role === "admin") {
    try {
      const deleteProduct = await Product.findByIdAndDelete(
        req.params.productId
      );
      response(200, {}, "post deleted", res);
    } catch (err) {
      res.json(err.message);
    }
  } else {
    return errorHandler(500, "not allowed to perform this task", res);
  }
};

const postVerify = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  const decodedId = await decodeToken(token);
  const user = await User.findById(decodedId);
  if (!user) {
    return errorHandler(500, "User not found");
  }
  const verifyObject = {
    isVerified: true,
  };
  if (user.role === "admin") {
    try {
      const updatedPost = await Product.findByIdAndUpdate(
        req.params.productId,
        {
          $set: verifyObject,
        }
      );
      response(200, {}, "successfull", res);
    } catch (err) {
      return errorHandler(500, "please wait for admin to verify the post", res);
    }
  } else {
    return errorHandler(500, "You are not a admin", res);
  }
};

module.exports = {
  getProduct,
  addProduct,
  deleteProduct,
  postVerify,
};
