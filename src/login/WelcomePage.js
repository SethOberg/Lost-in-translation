import React from "react";
import WelcomeText from "./WelcomeText";
import "./login.css";
import Form from "react-bootstrap/Form";
import TranslationHeader from "../shared/TranslationHeader";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/user";
import { useState, useEffect } from "react";
import { storageSave } from "../utils/storage";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { STORAGE_KEY_USER } from "../const/storageKey";

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

  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error != null) {
      setApiError(error);
    }
    if (userResponse != null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    if (user !== null) {
      navigate("profile");
    }
  }, [user, navigate]);

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
          {apiError && <p>{apiError}</p>}
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
