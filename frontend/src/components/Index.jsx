import React, { useState } from "react";
import "../style/index.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`/api/v1/login`, { username, password })
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/homepage");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="formwrap">
        <h2 className="formtitle">Login</h2>
        <div className="imgcontainer">
          <img src="logo.jpg" alt="avatar" className="avatar" />
        </div>
        <div className="formcontainer">
          <br />
          {/* <label htmlFor="uname" className="formlabel"> Username </label> <br /> */}
          <input
            id="uname"
            type="text"
            name="username"
            placeholder="Enter Username"
            size="20"
            className="formcontent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <br />
          {/* <label htmlFor="pwd" className="formlabel"> Password </label> <br /> */}
          <input
            id="pwd"
            type="password"
            name="password"
            placeholder="Enter Password"
            size="21"
            className="formcontent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit" className="formbtn">
            {" "}
            Login{" "}
          </button>
          <br />
          <br />
          <div className="rememberme">
            <input type="checkbox" id="rem" name="remember" />
            <label htmlFor="rem"> Keep me logged in </label>
          </div>

          <span className="psw">
            <a href="/password">Forgotten password?</a>
          </span>
          <br />
        </div>
        <hr className="divider" />
        <div className="createacc">
          <label>
            {" "}
            Don't have an account? <a href="/register">Create new account</a>
          </label>
        </div>
        <p> Or </p>
        <div className="g-signin2" data-onsuccess="onSign"></div> <br />
      </form>
    </div>
  );
};
