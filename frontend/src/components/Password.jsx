import React from "react";
import "../style/password.css"

export const Password = () => {
  return (
    <div>
      <div className="container" id="password-wrapper">
        <h3>Change Password</h3>
        <p>Fill the following form to change your password</p>

        <form action="action_page.php">
          <label htmlFor="username">Username</label>
          <input className="pass-input" type="text" id="username" name="username" required />

          <label htmlFor="password">Password</label>
          <input className="pass-input"
            type="password"
            id="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />

          <input className="pass-input" type="submit" value="Submit" />
        </form>
      </div>

      <div id="message">
        <h3>Password must contain the following:</h3>
        <p id="letter" className="invalid">
          A <b>lowercase</b> letter
        </p>
        <p id="capital" className="invalid">
          A <b>capital (uppercase)</b> letter
        </p>
        <p id="number" className="invalid">
          A <b>number</b>
        </p>
        <p id="length" className="invalid">
          Minimum <b>8 characters</b>
        </p>
      </div>
    </div>

  );
};
