import React, { useState } from "react";
import "../style/register.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`/api/v1/register`, {
        username,
        firstname: fname,
        lastname: lname,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <body>
      <div id="register-wrapper">
        <form onSubmit={submitHandler}>
          <div class="imgcontainer">
            <img src="logo.jpg" alt="Avatar" class="avatar" />
          </div>
          <div class="container">
            <div className="register-title">
              <h1>Register</h1>
              <p>Please fill in this form to create an account.</p>
            </div>

            <div className="register-content">
              <hr />
              <label for="username">
                <b>First Name</b>
              </label>
              <input
                className="register-input"
                type="text"
                placeholder="Enter firstname"
                name="username"
                id="username"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
              <label for="username">
                <b>Last Name</b>
              </label>
              <input
                className="register-input"
                type="text"
                placeholder="Enter lastname"
                name="username"
                id="username"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
              />
              <label for="username">
                <b>Username</b>
              </label>
              <input
                className="register-input"
                type="text"
                placeholder="Enter username"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label for="email">
                <b>Email</b>
              </label>
              <input
                className="register-input"
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                className="register-input"
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label for="psw">
                <b>Confirm Password</b>
              </label>
              <input
                className="register-input"
                type="password"
                placeholder="Reenter Password"
                name="password"
                id="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <hr />

              <p>
                By creating an account you agree to our{" "}
                <a href="#">Terms and Privacy</a>.
              </p>

              <button type="submit" class="registerbtn">
                Register
              </button>

              <div class="container signin">
                <p>
                  Already have an account? <a href="/">Sign in</a>.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};
