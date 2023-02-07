import "./footer.css";
import { FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h4>Our Mission</h4>
          <p>
            To help new and experienced athletes to track their goals and
            progression, achieve their goals, and help them obtain their dream
            physique! Lets Get Fit!
          </p>
        </div>
        <div className="right">
          <h4>Our Team</h4>
          <div className="social">
            <p>Banny Walia</p>
            <a href="https://github.com/bannywalia">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
          <div className="social">
            <p>Hakim Yusuf</p>
            <a href="https://github.com/bannywalia">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
          <div className="social">
            <p>Troy Reid-Knight</p>
            <a href="https://github.com/TRK41">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
