import "./weight.css";
import WeightImg from "../assets/weightrack.jpg";
import React, { Component } from "react";

class weight extends Component {
  render() {
    return (
      <div className="hero">
        <div className="mask">
        <img src={WeightImg} alt="Weightimg" className="weight-img" />
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default weight;