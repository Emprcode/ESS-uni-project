import React from "react";
import "../App.css";

export const Header = () => {
  return (
    <div>
      <div>
        <img
          src="/logo.jpg"
          alt="Avatar"
          className="avatar"
          style={{ width: "40%", borderRadius: "50%" }}
        />
      </div>
      <header>Emergency Support Service</header>
    </div>
  );
};
