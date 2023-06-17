import "./HeroImg.css";
import React from "react";
import MuteImg from "../assets/self.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={MuteImg} alt="MuteImg" />
      </div>
      <div className="content">
        <h1>
          <p>Software Developer</p>
        </h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/project" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
