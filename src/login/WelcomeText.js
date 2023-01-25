import React from "react";
import logo from "../images/Logo-Hello.png";

const WelcomeText = () => {
  return (
    <article id="WelcomeText">
      <img src={logo} alt="" width="150px" />
      <h1>Get started</h1>
      <h5>Translate text to American sign language</h5>
    </article>
  );
};

export default WelcomeText;
