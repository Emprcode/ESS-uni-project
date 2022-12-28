import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div>
      Oops. Nothing here...
      <button>
        <Link to="/homepage">Go back</Link>
      </button>
    </div>
  );
};
