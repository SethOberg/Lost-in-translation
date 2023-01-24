import React from "react";
import TranslationHistoryItem from "./TranslationHistoryItem";

const TranslationHistoryList = ({ translations }) => {
  if (translations.length > 0) {
    const historyList = translations.map((savedTranslation, index) => (
      <TranslationHistoryItem
        key={`${index}-${savedTranslation}`}
        translation={savedTranslation}
      />
    ));

    return <ul id="savedTranslationsList">{historyList}</ul>;
  } else {
    return (
      <ul id="savedTranslationsList">
        {
          <TranslationHistoryItem
            key={`${1}`}
            translation={"No saved translations"}
          />
        }
      </ul>
    );
  }
};

export default TranslationHistoryList;
