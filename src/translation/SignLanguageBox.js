import React from "react";

const SignLanguageBox = (props) => {
  return (
    <div className="translation-container">
      {props.translationImages.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default SignLanguageBox;
