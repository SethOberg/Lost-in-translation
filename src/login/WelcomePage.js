import React from "react";
import WelcomeText from "./WelcomeText";
import "./login.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import TranslationHeader from "../shared/TranslationHeader";

const WelcomePage = () => {
  return (
    <div>
      <TranslationHeader />
      <WelcomeText />
      <div id="logInSection">
        <div className="input-group mb-3" id="loginInput">
          {/* <InputGroup className="mb-3 test"> */}
          <Form.Control
            placeholder="Enter username..."
            aria-label="Username"
            aria-describedby="usernameHelpBlock"
          />
          <Form.Text id="usernameHelpBlock" muted>
            Show text depending on username ok or already taken
          </Form.Text>
          {/* </InputGroup> */}
        </div>
        <button class="purpleBtn">Log in</button>
      </div>
    </div>
  );
};

export default WelcomePage;
