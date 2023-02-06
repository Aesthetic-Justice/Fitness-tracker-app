import "./weight.css";
import WeightImg from "../assets/weightrack.jpg";
import React, { Component } from "react";

class weight extends Component {
  render() {
    return (
      <div className="hero">
        <div className="mask">
          <img src={WeightImg} alt="Weightimg" className="weight-img" />
          <p>{this.props.text}</p>
        </div>
        <div className="content">
          <p>It's time to crush your goals</p>
          <h1>Lets Get Fit!</h1>
        </div>
      </div>
    );
  }
}

export default weight;
