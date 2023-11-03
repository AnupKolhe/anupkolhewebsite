import "./AboutContentStyle.css";
import React from "react";
import self from "../assets/self-remove.png"


const AboutContent = (url) => {
    const downloadResume = "https://drive.google.com/file/d/1C-bOwdm6_6lx_DxJy0W8hyiw-YPMFzcY/view?usp=sharing";
    return (

        <div className="about-content">
            <div className="content">
                <div className="column left">
                    <img className="self" src={self} alt="self" />
                </div>
                <div className="column right">
                    <div className="text">
                        <p>As a developer, I specialize in creating modular and
                            scalable front-end architectures.I generate fresh
                            and unique content for any specific purpose.Since
                            I respect the time, I always deliver content within
                            the promised timeframe. I understand and respect the fact,
                            that there is a story behind every brand , behind every
                            individual. </p>
                    </div>
                    <div>
                    </div>
                    <div>
                        <a href={downloadResume} target="_blank">
                            <button className="btn" >Download CV </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
