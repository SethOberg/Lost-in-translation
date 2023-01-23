import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./profile.css";
import profileImage from "../images/test.png";
import Button from "react-bootstrap/Button";
import TranslationHeader from "../shared/TranslationHeader";
import withAuth from "../hoc/withAuth";
import { useUser } from "../context/UserContext";
import TranslationHistoryList from "./TranslationHistoryList";

const Profile = () => {
  const { user } = useUser();

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
              id="logOutBtn"
            >
              Log out
            </Button>
          </Col>
          <Col id="savedTranslations">
            <ul id="savedTranslationsList">
              <li id="savedTranslationsTitle">Saved translations</li>
            </ul>
            <ul id="savedTranslationsList">
              <li>Lorem ipsum</li>
            </ul>
            <TranslationHistoryList translations={user.translations} />
            <Button
              variant="primary"
              className="purpleBtnBootstrap"
              id="clearTranslationsBtn"
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
