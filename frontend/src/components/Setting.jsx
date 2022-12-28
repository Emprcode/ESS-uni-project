import React from "react";
import "../style/settings.css";

export const Setting = () => {
  return (
    <body>
      <div>
        <div className="input-wrapper" id="settings-wrapper">
          <div className="setting-img">
            <img src="logo.jpg" alt="Avatar" />
          </div>

          <div className="setting-title">
            <header>Emergency Support Service</header>
            <p> We provide better service with better opportunities</p>
          </div>
          <a href="/homepage" className="setting-back">
            &#8249; BACK
          </a>
          <h1 className="setting-head"> Setting </h1>

          <div className="content-wrap">
            <div className="setting-content">
              <p>
                <a href="/account" className="button">
                  ACCOUNT
                </a>
                <button type="button"> </button>
              </p>
            </div>

            <div className="setting-content">
              <p>
                <a href="/privacy" className="button">
                  PRIVACY
                </a>
                <button type="button"> </button>
              </p>
            </div>

            <div className="setting-content">
              <p>
                <a href="/contact" className="button">
                  HELP AND SUPPORT
                </a>
                <button type="button"> </button>
              </p>
            </div>

            <div className="setting-content">
              <p>
                <a href="/about" className="button">
                  ABOUT
                </a>
                <button type="button"></button>
              </p>
            </div>
            <div className="setting-content">
              <p>
                <a href="/" className="button">
                  Logout
                </a>
                <button type="button"></button>
              </p>
            </div>
          </div>

          <span></span>
        </div>
      </div>
    </body>
  );
};
