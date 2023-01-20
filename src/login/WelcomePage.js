import React from "react";
import WelcomeText from "./WelcomeText";

const WelcomePage = () => {
  return (
    <div>
      <WelcomeText />
      <div id="logInSection">
        <button class="purpleBtn">Log in</button>
      </div>
    </div>
  );
};

export default WelcomePage;
