import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./profile.css";
import profileImage from "../images/test.png";

const Profile = () => {
  return (
    <Container fluid id="profileContainer">
      <Row>
        <Col id="userInfo">
          <img src={profileImage} alt="" id="profileImageLarge" />
          <h4 id="userNameTxt">Username</h4>
          <button className="purpleBtn" id="logOutBtn">
            Log out
          </button>
        </Col>
        <Col id="savedTranslations">
          <ul id="savedTranslationsList">
            <li id="savedTranslationsTitle">Saved translations</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <button className="purpleBtn" id="clearTranslationsBtn">
            Clear
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
