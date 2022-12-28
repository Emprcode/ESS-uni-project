import React, { useState } from "react";
import "../style/post.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `/api/v1/addProduct`,
        {
          title,
          description,
          category,
        },
        config
      )
      .then((res) => {
        toast.success(res.data.message);
        navigate("/homepage");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <body>
      <div id="post-wrapper">
        <header>Post a Service</header>
        <form onSubmit={submitHandler}>
          <label htmlFor="Title">
            <b>Title</b>
          </label>
          <input
            className="post-input"
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div>
            <label htmlFor="Description">
              <b>Description</b>
            </label>
            <br />
            <input
              className="post-input"
              type="text"
              placeholder="Enter the Description "
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="Description">
              <b>Category</b>
            </label>
            <br />
            <input
              className="post-input"
              type="text"
              placeholder="Enter the Description "
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          {/* <div className="custom-select" style={{ width: "200px" }}>
          <select>
            <option value="0">Select the Category:</option>
            <option value="1">Food </option>
            <option value="2">Shelter</option>
            <option value="3">Job</option>
          </select>
        </div> */}
          {/* <form action="#">
          <input className="file-input" type="file" name="file" hidden />
          <i className="fas fa-cloud-upload-alt" id="up-pic"></i>
          <p>Add photos</p>
          <p>Choose your listing main photo first</p>
        </form>
        <section className="progress-area">
          <li className="row">
            <i className="fas fa-file-alt"></i>
            <div className="content">
              <div className="details">
                <span className="name">image_01.png Uploading</span>
                <span className="percent">50%</span>
              </div>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
            </div>
          </li>
        </section>
        <section className="progress-area">
          <li className="row">
            <i className="fas fa-file-alt"></i>
            <div className="content">
              <div className="details">
                <span className="name">image_01.png Uploaded</span>
                <span className="size">70MB</span>
              </div>
              <div className="progress-bar2">
                <div className="progress2"></div>
              </div>
              <i className="fas fa-check check-post"></i>
            </div>
          </li>
        </section> */}

          <button className="post-btn" type="submit" value="Submit">
            Submit
          </button>
          <button
            className="post-btn"
            type="Cancel"
            href="home.html"
            value="Cancel"
          >
            {" "}
            Cancel{" "}
          </button>
        </form>
      </div>
      <script src="script.js"></script>
    </body>
  );
};
