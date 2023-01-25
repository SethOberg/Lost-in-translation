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
import { storageSave } from "../utils/storage";
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
    console.log(user);
    storageSave(STORAGE_KEY_USER, temporaryUser);
  };

  const logout = () => {
    storageSave(STORAGE_KEY_USER, null);
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
            <Button
              variant="primary"
              className="purpleBtnBootstrap"
              id="profileGoToTranslationBtn"
              onClick={() => {
                navigate("/translation");
              }}
            >
              Translate
            </Button>
            <Button
              variant="primary"
              className="purpleBtnBootstrap"
              id="logOutBtn"
              onClick={handleLogoutClick}
            >
              {" "}
              Log out
            </Button>
          </Col>
          <Col id="savedTranslations">
            <ul id="savedTranslationsList">
              <li id="savedTranslationsTitle">Saved translations</li>
            </ul>
            <TranslationHistoryList translations={user.translations} />
            <Button
              variant="primary"
              className="purpleBtnBootstrap"
              id="clearTranslationsBtn"
              onClick={clearTranslationHistory}
            >
              Clear
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withAuth(Profile);
