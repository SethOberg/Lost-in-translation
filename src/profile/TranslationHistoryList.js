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
        <li>No translations found</li>
      </ul>
    );
  }
};

export default TranslationHistoryList;
