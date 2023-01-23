import React from "react";
import TranslationHistoryItem from "./TranslationHistoryItem";

const TranslationHistoryList = ({ translations }) => {
  //   const historyList = translations.map(translation =>
  //     <TranslationHistoryItem key={translation} translation={translation} />;
  // );
  const historyList = translations.map((test) => (
    <TranslationHistoryItem key={test} translation={test} />
  ));

  return <ul>{historyList}</ul>;
};

export default TranslationHistoryList;
