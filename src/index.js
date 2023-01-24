import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/main.css";
import TranslationHeader from "./shared/TranslationHeader";
import WelcomePage from "./login/WelcomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TranslationPage from "./translation/translation";
import AppContext from "./context/AppContext";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/translation" element={<TranslationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

//const WelcomePage = () =>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <AppContext>
        <App />
      </AppContext>
    </div>
  </React.StrictMode>
);
