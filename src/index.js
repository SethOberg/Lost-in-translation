import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/main.css";
import TranslationHeader from "./shared/TranslationHeader";
import WelcomePage from "./login/WelcomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <TranslationHeader />
      <WelcomePage />
    </div>
  </React.StrictMode>
);
