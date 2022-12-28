import React, { useState, useEffect } from "react";
import "../style/shelter.css";
import { toast } from "react-toastify";
import axios from "axios";

export const Shelter = () => {
  const [post, setPost] = useState([]);

  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  useEffect(() => {
    axios
      .get(`/api/v1/getProduct/Shelter`, config)
      .then((response) => {
        setPost(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`/api/v1/deleteProduct/${id}`, config)
      .then((response) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data.message, "blabla");
        toast.error(err.response.data.message);
      });
  };
  return (
    <body>
      <div id="shelter-wrapper">
        <div className="shelter-head">
          <img src="logo.jpg" alt="Avatar" className="shelter-img" />
          <header>Emergency Support Service</header>
          <p> We provide better service with better opportunities</p>
        </div>

        <div className="input-wrapper">
          <a href="/homepage" className="food-back">
            &#8249; BACK
          </a>
          <div className="fa fa-search box-in"></div>
          <input type="text" placeholder="Search" className="head-box" />
          {/* <div className="fa fa-times"></div> */}

          <input type="search" placeholder="Post Here" className="head-box" />
          <button className="food-btn">
            <a className="fa fa-home food-btn" href="/homepage"></a>
          </button>
          <button className="food-btn">
            <a className="fa fa-comment food-btn" href="/post"></a>
          </button>
          <button className="food-btn">
            <a href="/settings" className="fa fa-bars food-btn"></a>
          </button>
        </div>

        <body>
          <h1 className="shelter-title"> SHELTER SERVICE AVAILABLE </h1>
        </body>
        <body>
          <body>
            <div class="shelter-box">
              <div className="shelter-content">
                <img
                  src="/sheltervolunter.png"
                  width="350"
                  height="263"
                  alt="Food"
                />
                <div className="shelter-text">
                  If you are currently homeless or at risk of homelessness,
                  Sydney Homeless Connect can put you in touch with social and
                  government organisations that can help you. These include
                  crisis care, support and health services, employment
                  assistance, housing assistance, financial assistance and legal
                  services. Sydney Homeless Connect cannot offer to be an agent
                  ourselves (i.e. we cannot make applications on your behalf for
                  housing, employment, etc.), but what we do is connect you with
                  the people who can, or who can advise you on how to do it.
                  <a
                    href="http://www.sydneyhomelessconnect.com/get-help/"
                    target="_blank"
                  >
                    Visit our Website for further information
                  </a>
                </div>
              </div>
            </div>

            <h2> POSTS</h2>
            {post.map((post) => (
              <div className="box">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      {post.category}
                    </h6>
                    <p class="card-text">{post.description}</p>
                    <button
                      class="btn btn-danger"
                      onClick={() => {
                        deleteHandler(post._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </body>
        </body>
      </div>
    </body>
  );
};
