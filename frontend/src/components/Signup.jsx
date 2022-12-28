import React from "react";
import "../style/signup.css"

export const Signup = () => {
  return (
    <body>
      <div id="signup-wrapper">
        <form action="action_page.php">
          <div className="container"  id="signup-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label for="firstname">
              <b>First Name</b>
            </label>
            <i className="label-icon fa fa-user icon"></i>
            <input className="signup-input"
              type="text"
              placeholder="Enter First Name"
              name="first name"
              required
            />
            <label for="lastname">
              <b>Last Name</b>
            </label>
            <i className="label-icon fa fa-user icon"></i>
            <input className="signup-input"
              type="text"
              placeholder="Enter Last Name"
              name="last name"
              required
            />
            <label for="email">
              <b>Email</b>
            </label>
            <i className="label-icon fa fa-envelope icon"></i>
            <input className="signup-input" type="text" placeholder="Enter Email" name="email" required />
            <label for="username">
              <b>Username</b>
            </label>{" "}
            <i className="label-icon fa fa-user icon"></i>
            <input className="signup-input"
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />
            <label for="psw">
              <b>Password</b>
            </label>{" "}
            <i className="label-icon fa fa-key icon"></i>
            <input className="signup-input"
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <label for="psw-repeat">
              <b>Repeat Password</b>
            </label>{" "}
            <i className="label-icon fa fa-key icon"></i>
            <input className="signup-input"
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
            />
            <label className="form-bottom">
              <input type="checkbox" checked="checked" name="remember" />
              Remember me
            </label>
            <p className="form-bottom2">
              By creating an account you agree to our
              <a href="#">Terms & Privacy</a>.
            </p>
            <div className="clearfix">
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
              <button onclick="myFunction()" className="cancelbtn">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};
