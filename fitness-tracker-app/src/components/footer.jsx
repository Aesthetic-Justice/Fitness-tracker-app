import "./footer.css";
import { FaGithub, FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Ottawa, Ontario</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              613-111-1111
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Banny.walia07@gmail.com
            </h4>
          </div>
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
