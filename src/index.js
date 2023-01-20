import React from "react";
import ReactDOM from "react-dom/client";
import "./shared/main.css";
import TranslationHeader from "./shared/TranslationHeader";
import WelcomePage from "./login/WelcomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <TranslationHeader />
      <WelcomePage />
    </div>
  </React.StrictMode>
);

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App () {
return (
<BrowserRouter>
<div className="App">
<Routes>
<Route path="/" element={ <WelcomePage /> } />
<Route path="/profile" element={ <Profile />} />
<Route path="/translation" element={ <Translation />} />

</Routes>

</div>

</BrowserRouter>


)


}