import React from "react";
import WelcomeText from "./WelcomeText";
import "./login.css";
import Form from "react-bootstrap/Form";
import TranslationHeader from "../shared/TranslationHeader";
import { useForm } from "react-hook-form";

const userNameConfig = {
  required: true,
  minLength: 2,
};

const WelcomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <TranslationHeader />
      <WelcomeText />
      <div id="logInSection">
        <div className="input-group mb-3" id="loginInput">
          <Form.Control
            placeholder="Enter username..."
            aria-label="Username"
            aria-describedby="usernameHelpBlock"
          />
          <Form.Text id="usernameHelpBlock helpTxt" muted>
            Username too short
          </Form.Text>
        </div>
        <button className="purpleBtn">Log in</button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <input
              type="text"
              placeholder="Enter username..."
              {...register("username", userNameConfig)}
              id="loginInput2"
            />
            <br />
            <p id="inputHelpTxt">
              {errors.username && errors.username.type === "required" && (
                <span>Username is required</span>
              )}
              {errors.username && errors.username.type === "minLength" && (
                <span>Too short</span>
              )}
            </p>
          </fieldset>
          <button type="submit" className="purpleBtn" id="signUpBtn">
            Get started
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
