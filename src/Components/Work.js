import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import PojectCardData from "./WorkCardData";
import WorkCardData from "./WorkCardData";

import React from "react";

const Work = () => {
    return (
        <div className="wordk-container">
            <h1 className="project-heading"> PROJECTS </h1>
            <div className="project-container">
                {WorkCardData.map((val, ind) => {
                    return (
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            texts={val.texts}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Work;
