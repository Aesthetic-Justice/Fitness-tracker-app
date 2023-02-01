import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Nav, Modal, Button } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../utils/auth";

const AppNavbar = () => {
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
    <>
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
              <Button onClick={Auth.logout}>Logout</Button>
            ) : (
              <Button onClick={() => setShowModal(true)}>Login/Sign Up</Button>
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
      </div>
      <Example show={showModal} setShow={setShowModal} />
    </>
  );
};

function Example({ show, setShow }) {
  const [currTab, setCurrTab] = useState("login");

  const handleClose = () => {
    console.log("hello");
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link onClick={() => setCurrTab("login")}>Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => setCurrTab("signup")}>Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Modal.Header>
        <Modal.Body>
          <div>{currTab === "signup" ? <SignUpForm /> : <LoginForm />}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AppNavbar;
