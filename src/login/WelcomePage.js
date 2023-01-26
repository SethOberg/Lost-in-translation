import React from "react";
import WelcomeText from "./WelcomeText";
import "./login.css";
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
  maxLength: 25,
};

const WelcomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, setUser } = useUser();
  const navigate = useNavigate();
  /**
   * onSubmit is a function that handles the users login input. A request to the API will be sent with the input username.
   * The function sets the User context for the whole applications if the user exists, otherwise it will not return nything.
   *
   * @param {username} username - A users username.
   * @returns {none} This function will return a JSON response.
   */
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
    if (errors.username.type === "maxLength") {
      return <span>Username too long, maximum length 25</span>;
    }
  })();

  return (
    <div>
      <TranslationHeader />
      <WelcomeText />
      <div id="logInSection">
        <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
          <fieldset>
            <input
              type="text"
              placeholder="Enter username..."
              {...register("username", userNameConfig)}
              id="loginInput2"
            />
            <br />
          </fieldset>
          <p id="inputHelpTxt">{errorMessage}</p>
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
