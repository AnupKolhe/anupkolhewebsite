import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import react1 from "../assets/mute.jpg";
import react2 from "../assets/mutestanding.jpg"
import React from "react";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1> Who Am I</h1>
                <p>Hello</p>
                <Link to="/contact">
                    <button className="btn">contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1} className="img" alt="true" />
                    </div>
                    <div className="img-stack top">
                        <img src={react2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
