import React from "react";
import TranslationHistoryItem from "./TranslationHistoryItem";

/**
 * TranslationHistoryList is a react component that expects a prop list containing the translation history (limited to last 10 translations).
 *
 * @param {translation} translations - a prop value is expected in order for the .
 */
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
