import "./HeroImg.css";
import IntroImg from "../assets/intro-bg.jpeg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="Introimg" className="intro-img" />
      </div>
      <div className="content">
        <p>It's time to crush your goals</p>
        <h1>Lets Get Fit!</h1>
        <div>
          <Link to="/workouts" className="btn">
            Workouts
          </Link>
          <Link to="/goals" className="btn btn-light">
            Goals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
