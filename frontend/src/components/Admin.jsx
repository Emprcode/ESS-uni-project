import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const Admin = () => {
  const [post, setPost] = useState([]);

  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  useEffect(() => {
    axios
      .get(`/api/v1/getProduct/admin`, config)
      .then((response) => {
        setPost(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const approveHandler = (id) => {
    axios
      .get(`/api/v1/postVerify/${id}`, config)
      .then((response) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  return (
    <div>
      <h1>Pending Posts</h1>
      {post.map((post) => (
        <div className="box">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{post.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{post.category}</h6>
              <p class="card-text">{post.description}</p>
              <button
                class="btn btn-successr"
                onClick={() => {
                  approveHandler(post._id);
                }}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
