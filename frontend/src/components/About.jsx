import React from "react";
import "../style/about.css";
export const About = () => {
  return (
    <div className="input-wrapper" id="about-wrapper">
      <div className="imgcontainer">
        <img src="logo.jpg" alt="avatar" className="avatar" />
      </div>
      <h3 className="back">
        <a href="/settings">&#8249; BACK</a>
      </h3>
      <h2 className="about-title">Setting</h2>

      <h4>About Emergency Support Service</h4>
      <p className="about-content">
        ESS is the #1 service application in the world1 with over 250 million
        unique visitors every month. ESS application to provide the emergency
        support services,job, food, and shelter, . Every day, we connect
        millions of people to new opportunities.
      </p>
    </div>
  );
};
