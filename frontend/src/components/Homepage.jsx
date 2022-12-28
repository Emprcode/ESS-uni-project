import React from "react";
import "../style/home.css";

export const Homepage = () => {
  return (
    <div className="wrapper" id="home-wrapper">
      <h2 className="home-title">
        {" "}
        We provide better service with better opportunities
      </h2>
      <div className="input-wrapper">
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
      <h2 className="home-title"> Services Available</h2>
      <body>
        <div className="home-box">
          <p className="btn-wrap">
            <a href="/food" className="home-btn">
              FOOD
            </a>
            <button type="button" className="btn-img">
              <img src="/food.png" height="50" width="50" />
            </button>
          </p>
        </div>

        <div className="home-box">
          <p className="btn-wrap">
            <a href="/shelter" className="home-btn">
              SHELTER
            </a>
            <button type="button" className="btn-img">
              <img src="/shelter.png" height="50" width="50" />
            </button>
          </p>
        </div>

        <div className="home-box">
          <p className="btn-wrap">
            <a href="/jobs" className="home-btn">
              JOBS
            </a>
            <button type="button" className="btn-img">
              <img src="/job.png" height="50" width="90" />
            </button>
          </p>
        </div>

        <div className="home-box">
          <p className="btn-wrap">
            <a href="/contact" className="home-btn">
              CONTACT US
            </a>
            <button type="button" className="btn-img">
              <img src="/contact.png" height="50" width="120" />
            </button>
          </p>
        </div>
      </body>
    </div>
  );
};
