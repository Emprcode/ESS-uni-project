import React from "react";
import "../style/account.css";
export const Account = () => {
  return (
    <div>
      <div className="input-wrapper" id="account-wrapper">
        <a href="/settings" className="backbtn">
          &#8249; BACK
        </a>

        <h1 className="account-title">Account</h1>

        <div className="account-content">
          <p>
            <button type="button" className="acc-btn">
              <a href="/username" className="button" style={{ color: "white" }}>
                USERNAME
              </a>
            </button>
          </p>
        </div>
        <div className="account-content">
          <p>
            <button type="button" className="acc-btn">
              {" "}
              <a href="/password" className="button" style={{ color: "white" }}>
                PASSWORD{" "}
              </a>
            </button>
          </p>
        </div>
        <div className="account-content">
          <p>
            <button type="button" className="acc-btn">
              <a href="/email" className="button" style={{ color: "white" }}>
                EMAIL
              </a>
            </button>
          </p>
        </div>
        <div className="account-content">
          <p>
            <button type="button" className="acc-btn">
              <a
                href="/deactivate"
                className="button"
                style={{ color: "white" }}
              >
                DEACTIVATE ACCOUNT{" "}
              </a>
            </button>
          </p>
        </div>
        <span></span>
      </div>
    </div>
  );
};
