import "./AboutContentStyle.css";
import React from "react";
import self from "../assets/self-remove.png"


const AboutContent = (url) => {
    const downloadResume ='http://localhost:3000/pdf/Profile.pdf';
    return (

        <div className="about-content">
            <div className="content">
                <div className="column left">
                    <img src={self} alt="self" />
                </div>
                <div className="column right">
                    <div>

                    </div>
                    <div>
                    </div>
                    <div>
                        <button className="btn" >Download CV </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
