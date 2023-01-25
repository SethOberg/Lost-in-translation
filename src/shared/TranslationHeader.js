import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "./header.css";
import profileImage from "../images/profileIcon.jpg";

function HeaderLink({ username }) {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/translation" ? (
        <div id="headerLoggedInUser">
          <NavLink to="/profile">{username}</NavLink>
          <NavLink to="/profile">
          <img src={profileImage} alt="profileIcon" id="profileImageIcon" />
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}

const TranslationHeader = () => {
  const { user, setUser } = useUser();

  return (
    <header id="translationHeader">
      <h1>Lost in translation</h1>
      {user !== null && (
        <div id="headerLink">
          <HeaderLink username={user.username} />
        </div>
      )}
    </header>
  );
};

export default TranslationHeader;
