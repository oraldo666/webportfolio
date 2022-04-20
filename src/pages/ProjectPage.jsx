import React from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import "../assets/styles/ProjectPageStyle.css";

function ProjectPage() {
  return (
    <div className="project-page-container">
      <RightArrow goingTo={"/contact"} />
      <LeftArrow goingTo={"/"} />

      <h2 className="project-lorem">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        necessitatibus vitae ipsam impedit, expedita cupiditate omnis est quasi
        officiis quisquam rem reprehenderit aliquam qui rerum ducimus eius
        consequatur natus ad!
      </h2>

      <h2 className="project-lorem">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        necessitatibus vitae ipsam impedit, expedita cupiditate omnis est quasi
        officiis quisquam rem reprehenderit aliquam qui rerum ducimus eius
        consequatur natus ad!
      </h2>

      <h2 className="project-lorem">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
        necessitatibus vitae ipsam impedit, expedita cupiditate omnis est quasi
        officiis quisquam rem reprehenderit aliquam qui rerum ducimus eius
        consequatur natus ad!
      </h2>
    </div>
  );
}

export default ProjectPage;
