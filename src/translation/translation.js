import React from "react";
import TranslationHeader from "../shared/TranslationHeader";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./translation.css";
import withAuth from "../hoc/withAuth";
import { useState } from "react";
import SignLanguageBox from "./SignLanguageBox";

const TranslationPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [translationImages, setTranslationsImage] = useState([]);
  const handleInputChange = (event) => {
    var regEx = /[^a-zA-Z\s]/gi;
    event.target.value = event.target.value.replace(regEx, "");
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleClick = () => {
    const tempArray = [];
    const sentence = inputValue.toLocaleLowerCase();
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue.charAt(i) != " ") {
        tempArray.push(
          <img
            src={`/individial_signs/${sentence.charAt(i)}.png`}
            width={50}
            height={50}
          />
        );
      }
    }

    setTranslationsImage(tempArray);
  };

  return (
    <>
      <TranslationHeader />
      <div className="main-container">
        <div className="section-1">
          <InputGroup
            className="mb-3"
            style={{ height: "40%", marginLeft: "10%" }}
          >
            <input
              className="translation-input"
              placeholder=" write something..."
              onChange={handleInputChange}
              maxlength={48}
            ></input>
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={handleClick}
              style={{
                height: "50%",
                backgroundColor: "lightblue",
                borderTopRightRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
            >
              translate
            </Button>
          </InputGroup>
        </div>
        <div className="section-2">
          <SignLanguageBox translationImages={translationImages} />
          <div className="under-line">
            <div className="bottom-translation-mark">
              <div>translation</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(TranslationPage);
