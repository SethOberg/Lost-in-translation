import React from "react";
import WelcomeText from "./WelcomeText";
import "./login.css";
import Form from "react-bootstrap/Form";
import TranslationHeader from "../shared/TranslationHeader";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/user";
import { useState } from "react";

const userNameConfig = {
  required: true,
  minLength: 3,
};

const WelcomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, user] = await loginUser(username);
    console.log("Error: " + error);
    console.log("User: " + user);
    setLoading(false);
  };

  //console.log(errors);

  const [loading, setLoading] = useState(false);

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Username too short, minimum length 3</span>;
    }
  })();

  return (
    <div>
      <TranslationHeader />
      <WelcomeText />
      <div id="logInSection">
        {/* <div className="input-group mb-3" id="loginInput">
          <Form.Control
            placeholder="Enter username..."
            aria-label="Username"
            aria-describedby="usernameHelpBlock"
          />
          <Form.Text id="usernameHelpBlock helpTxt" muted>
            Username too short
          </Form.Text>
        </div>
        <button className="purpleBtn">Log in</button> */}

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
              {errorMessage}
              {/* {errors.username && errors.username.type === "required" && (
                <span>Username is required</span>
              )}
              {errors.username && errors.username.type === "minLength" && (
                <span>Username too short, minimum length 3</span>
              )} */}
            </p>
          </fieldset>
          <button
            type="submit"
            disabled={loading}
            className="purpleBtn"
            id="signUpBtn"
          >
            Get started
          </button>
          {loading && <p>Logging in...</p>}
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
