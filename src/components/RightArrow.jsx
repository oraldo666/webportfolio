import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./RightArrowStyle.css";
import { Link } from "react-router-dom";

function RightArrow({ goingTo, goForward, setGoRight }) {
  return (
    <div className="right-arrow-container" onClick={goForward}>
      <Link to={goingTo}>
        <IoIosArrowForward size={70} />
      </Link>
    </div>
  );
}

export default RightArrow;
