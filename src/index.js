import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/main.css";
import TranslationHeader from "./shared/TranslationHeader";
import WelcomePage from "./login/WelcomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <TranslationHeader />
      <WelcomePage />
    </div>
  </React.StrictMode>
);
