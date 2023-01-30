import "./workcard.css";
import pro1 from "../assets/pro1.png";
import { NavLink } from "react-router-dom";

export const workcard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="" className="project1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <a href={props.view} className="btn">
            View
          </a>
          <a href={props.source} className="btn">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default workcard;
