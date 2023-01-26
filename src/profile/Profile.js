import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./profile.css";
import profileImage from "../images/profileIcon.jpg";
import Button from "react-bootstrap/Button";
import TranslationHeader from "../shared/TranslationHeader";
import withAuth from "../hoc/withAuth";
import { useUser } from "../context/UserContext";
import TranslationHistoryList from "./TranslationHistoryList";
import { useNavigate } from "react-router-dom";
import { storageDelete, storageSave } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKey";
import { removeTranslationHistory } from "../api/user";

const Profile = () => {
  const navigate = useNavigate();

  const { user, setUser } = useUser();

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      // Send an event to the parent
      logout();
    }
  };

  const clearTranslationHistory = async () => {
    const removeData = window.confirm("Are you sure ?");
    await removeTranslationHistory(user.id);
    let temporaryUser = { ...user, translations: [] };
    setUser(temporaryUser);
    storageSave(STORAGE_KEY_USER, temporaryUser);
  };

  const logout = () => {
    //storageSave(STORAGE_KEY_USER, null);
    storageDelete(STORAGE_KEY_USER);
    setUser(null);
  };

  return (
    <>
      <TranslationHeader />
      <Container fluid id="profileContainer">
        <Row>
          <Col id="userInfo">
            <img src={profileImage} alt="" id="profileImageLarge" />
            <h4 id="userNameTxt">{user.username}</h4>
            <button
              className="purpleBtn"
              id="profileGoToTranslationBtn"
              onClick={() => {
                navigate("/translation");
              }}
            >
              Translate
            </button>
            <button
              className="darkBtn"
              id="logOutBtn"
              onClick={handleLogoutClick}
            >
              Log out
            </button>
          </Col>
          <Col id="savedTranslations">
            <p id="savedTranslationsTitle">Previous translations</p>
            <TranslationHistoryList translations={user.translations} />
            <button
              className="darkBtn"
              id="clearTranslationsBtn"
              onClick={clearTranslationHistory}
            >
              Clear
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withAuth(Profile);
