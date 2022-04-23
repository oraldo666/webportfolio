import React from "react";
import "./ProjectComponetStyle.css";
import firstimg from "../assets/images/project-images/top11.png";
import cloudimg from "../assets/images/project-images/png-transparent-cloud.png";
import laptopcounter from "../assets/images/project-images/laptop-on-counter.jpeg";

function ProjectComponet() {
  return (
    <div className="project-container">
      <div className="project-card">
        <div className="project-card-img-container">
          <img src={firstimg} alt="" className="project-card-img" />
        </div>
        <div className="project-card-description project-card-description-animation">
          <h1>This is the first project card This is the first project card</h1>
        </div>
      </div>

      <div className="project-card">
        <div className="project-card-img-container">
          <img src={cloudimg} alt="" className="project-card-img" />
        </div>
        <div className="project-card-description project-card-description-animation">
          <h1>This is the first project card This is the first project card</h1>
        </div>
      </div>
      <div className="project-card">
        <div className="project-card-img-container">
          <img src={laptopcounter} alt="" className="project-card-img" />
        </div>
        <div className="project-card-description project-card-description-animation">
          <h1>This is the first project card This is the first project card</h1>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponet;
