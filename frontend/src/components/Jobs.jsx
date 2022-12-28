import React, { useState, useEffect } from "react";
import "../style/jobs.css";
import axios from "axios";
import { toast } from "react-toastify";

export const Jobs = () => {
  const [post, setPost] = useState([]);

  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  useEffect(() => {
    axios
      .get(`/api/v1/getProduct/Job`, config)
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
    <div id="jobs-wrapper">
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

      {/* <body>
        <h3>
          <a href="home.html" className="back round">
            &#8249; BACK
          </a>
        </h3>
      </body> */}
      <body>
        <h2 className="job-title"> JOBS SERVICE AVAILABLE</h2>
        <body>
          <div className="box">
            <div className="box-content">
              <img
                src="public/jobmac.png"
                width="300"
                height="263"
                alt="Food"
                className="job-img"
              />
              <div className="job-desc">
                We are looking for fun and energetic people to join our team and
                assist us with delivering high levels of quality and service to
                our customers at McDonalds Bexley. We have a range of hours and
                flexibility from 5am-4pm to cover all areas of the restaurant
                which may include cafe, kitchen staff, service staff,
                maintenance staff as well as hosts. We are looking for people
                willing to work full time hours, part time hours or casual hours
                over morning, day or afternoon. Whether its a first job, a job
                before the dream job, or a job that turns into a career - no
                experience necessary full training provided!
                <br />
                Discounted Maccas! You will receive our world renowned training
                Flexible work hours, we offer shifts that fit around your life
                and commitments We are a diverse work place and equal
                opportunity employer Our workplace is fun and welcoming Job
                Types: Full-time, Part-time, Casual Part-time hours: 10-38 per
                week
              </div>
              <div className="job-desc">
                Salary: $20.00 – $30.00 per hour Benefits: Employee discount
                Schedule: Afternoon shift Day shift Flexible hours Morning shift
                Ability to commute/relocate: Bexley, NSW 2207: Reliably commute
                or planning to relocate before starting work (Preferred) Work
                Authorisation: Australia (Preferred)
                <a href="https://careers.mcdonalds.com/australia">Apply Now</a>
              </div>

              <div className="job-list">
                <br />
                <h3>Get in touch with us</h3>
                <ul>
                  <li>McDonalds Crew Member-</li>
                  <li>McDonalds Bexley</li>
                  <li>Bexley NSW 2207</li>
                  <li> Full-time, Part-time, Casual</li>
                </ul>
              </div>
            </div>
          </div>

          <h2> POSTS</h2>
          {post.map((post) => (
            <div className="box">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{post.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{post.category}</h6>
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
  );
};
