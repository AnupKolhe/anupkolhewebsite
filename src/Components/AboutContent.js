import { Link } from "react-router-dom";
import "./AboutContentStyle.css"

import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1> Who Am I</h1>
                <p>
                    Hello
                </p>
                <Link to="/contact">
                    <button>contact</button>
                </Link>
            </div>
        </div>
    )
};

export default AboutContent;