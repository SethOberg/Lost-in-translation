import React from "react";
import WelcomeText from "./WelcomeText";
import "./login.css";

const WelcomePage = () => {
  return (
    <div>
      <WelcomeText />
      <div id="logInSection">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <button class="purpleBtn">Log in</button>
      </div>
    </div>
  );
};

export default WelcomePage;
