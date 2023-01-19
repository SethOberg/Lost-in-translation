import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import TranslationHeader from "./TranslationHeader";
import WelcomePage from "./WelcomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <TranslationHeader />
      <WelcomePage />
    </div>
  </React.StrictMode>
);
