import React from "react";
import TranslationHeader from "../shared/TranslationHeader";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./translation.css";
import withAuth from "../hoc/withAuth";
import { useState } from "react";
import SignLanguageBox from "./SignLanguageBox";
import { useUser } from "../context/UserContext";
import { addTranslationHistory } from "../api/user";
import { NavLink } from "react-router-dom";
import { STORAGE_KEY_USER } from "../const/storageKey";
import { storageSave } from "../utils/storage";

const TranslationPage = () => {
  const { user, setUser } = useUser();
  const [inputValue, setInputValue] = useState("");
  const [translationImages, setTranslationsImage] = useState([]);
  const handleInputChange = (event) => {
    var regEx = /[^a-zA-Z\s]/gi;
    event.target.value = event.target.value.replace(regEx, "");
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  /**
   * translateTextToSign is a function which recieves data from inputValue state and translates the text into sign language {images}.
   *
   * @param {none} none - an array of items to be added to the select list.
   * @returns {none} This function does not return any value.
   */
  const translateTextToSign = async () => {
    const tempArray = [];
    const sentence = inputValue.toLocaleLowerCase();
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue.charAt(i) != " ") {
        tempArray.push(
          <img
            src={`/individial_signs/${sentence.charAt(i)}.png`}
            alt={"missing"}
            width={70}
            height={70}
          />
        );
      }
    }
    setTranslationsImage(tempArray);
    if (sentence.length > 1 && sentence != " ") {
      await storeDataInDB(sentence, user.id);
      user.translations.push(sentence);

      if (user.translations.length > 10) {
        user.translations.shift();
      }

      storageSave(STORAGE_KEY_USER, user);
      setUser(user);
    } else {
      alert("please enter a word");
    }
  };

  const storeDataInDB = async (sentence, userId) => {
    await addTranslationHistory(sentence, userId);
  };

  return (
    <>
      <TranslationHeader />

      <div className="main-container">
        <div className="section-1">
          <h3>
            Translate latin to ASL
            <small className="text-muted"> (ASL alphabet)</small>
          </h3>
          <InputGroup
            className="mb-3"
            style={{ height: "40%", marginLeft: "10%" }}
          >
            <input
              className="translation-input"
              placeholder="What do you want translated?"
              onChange={handleInputChange}
              maxLength={48}
            ></input>
            <Button id="button-addon2" onClick={translateTextToSign}>
              Translate
            </Button>
            <div id="recentTranslations">
              <NavLink to="/profile">{"Recent translations..."}</NavLink>
            </div>
          </InputGroup>
        </div>

        <div className="section-2">
          <SignLanguageBox translationImages={translationImages} />
          <div className="under-line">
            <div className="bottom-translation-mark">
              <div>Translation© </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(TranslationPage);
