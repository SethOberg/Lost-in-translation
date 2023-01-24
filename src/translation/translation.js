import React from "react";
import TranslationHeader from "../shared/TranslationHeader";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./translation.css";
import withAuth from "../hoc/withAuth";

const TranslationPage = () => {
  return (
    <>
      <TranslationHeader />
      <div className="main-container">
        <div className="section-1">
          <InputGroup
            className="mb-3"
            style={{ height: "40%", marginLeft: "10%" }}
          >
            <input className="translation-input" placeholder="Hello"></input>
            <Button
              variant="outline-secondary"
              id="button-addon2"
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
          <div className="translation-container"></div>
          <div className="under-line">
            <div className="bottom-translation-mark">Translation</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(TranslationPage);
