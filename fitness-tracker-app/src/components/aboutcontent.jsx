import "./aboutcontent.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpeg";
import AE from "../assets/AE_PP.webp";

const aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I am Fullstack developer, Videographer, and Editor. I create
          responsive websites, as well as creative videos using Adobe software.
        </p>
        <div className="btn-container">
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
          <a href="./resume.pdf" download="resume.pdf">
            <button className="btn">Resume</button>
          </a>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} alt="" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={AE} alt="" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutcontent;
