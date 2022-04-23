import React from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import ProjectComponet from "../components/ProjectComponet";
import "../assets/styles/ProjectPageStyle.css";

function ProjectPage() {
  return (
    <div className="project-page-container">
      <h1
        style={{ textAlign: "center", fontSize: "50px", marginBottom: "20px" }}
      >
        Projects
      </h1>
      <RightArrow goingTo={"/contact"} />
      <LeftArrow goingTo={"/"} />
      <ProjectComponet />
    </div>
  );
}

export default ProjectPage;
