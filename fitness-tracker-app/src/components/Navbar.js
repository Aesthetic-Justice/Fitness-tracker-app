import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../utils/auth";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Lets Get Fit.</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/workouts"> Workouts</Link>
        </li>
        <li>
          <Link to="/goals"> Goals</Link>
        </li>
        <li>
          <Link to="/calender"> Calender </Link>
        </li>
        <li>
          {Auth.loggedIn() ? (
            <>
              <Nav.Link as={Link} to="/saved">
                See Your Books
              </Nav.Link>
              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => setShowModal(true)}>
              Login/Sign Up
            </Nav.Link>
          )}{" "}
        </li>
      </ul>
      <div className="dropdown" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </div>
  );
};

export default Navbar;
