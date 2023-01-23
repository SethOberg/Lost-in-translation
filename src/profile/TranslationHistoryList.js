import React from "react";
import TranslationHistoryItem from "./TranslationHistoryItem";

const TranslationHistoryList = ({ translations }) => {
  //   const historyList = translations.map(translation =>
  //     <TranslationHistoryItem key={translation} translation={translation} />;
  // );
  const historyList = translations.map((savedTranslation, index) => (
    <TranslationHistoryItem
      key={`${index}-${savedTranslation}`}
      translation={savedTranslation}
    />
  ));

  return <ul id="savedTranslationsList">{historyList}</ul>;
};

export default TranslationHistoryList;
