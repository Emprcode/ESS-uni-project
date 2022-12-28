import React from "react";
import "../style/contact.css"

export const Contact = () => {
  return (
    <div className="wrapper" id="contact-wrapper">
      <div className="heading">
        <h1>Get In Touch With Us</h1>
        <hr className="contact-divider"/>
        <p>
          We would love to hear from you and we'll respond as soon as possible.
        </p>
      </div>
      
      <form action="#" className="contact-form">
        <div className="dbl-field">
          <div className="field">
            <input type="text" name="name" placeholder="Enter your name" />
            <i className="fas fa-user"></i>
          </div>
          <div className="field">
            <input type="text" name="email" placeholder="Enter your email" />
            <i className="fas fa-envelope"></i>
          </div>
        </div>
        <div className="dbl-field">
          <div className="field">
            <input type="text" name="phone" placeholder="Enter your phone" />
            <i className="fas fa-phone-alt"></i>
          </div>
        </div>
        <div className="message">
          <textarea placeholder="Write your message" name="message"></textarea>
          <i className="material-icons">message</i>
        </div>
        <div className="button-area">
          <button type="submit">Send Message</button>
          <span></span>
        </div>
      </form>
    </div>
  );
};
