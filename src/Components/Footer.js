import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSteam,
  FaTwitter,
} from "react-icons/fa";
import "./FooterStyle.css";

import React from "react";

const Footer = () => {
  const url = "_blank";
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Siddharth Nagar ,Goregaon-West, Mumbai,</p>
              <p>Maharashtra, India </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9137658130
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              anupkolhe233@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>This is me Anup Kolhe</p>
          <p>I enjoying doing Programming</p>
          <div className="social">    
            <a href="https://twitter.com/Anup_S_Kolhe" target={url}>
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </a>
            <a href="https://www.linkedin.com/in/anup-kolhe-6673a9201/" target={url}>
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/AnupKolhe" target={url}>
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            </a>
            <a href="https://steamcommunity.com/profiles/76561198090757699/" target={url}>
            <FaSteam size={30}
            style={{color:"#fff",marginRight:"1rem"}}
            />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p> Created By &nbsp;&nbsp;
          <a href=" "> Anup Kolhe</a>
          |
          &copy; 2023 All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
