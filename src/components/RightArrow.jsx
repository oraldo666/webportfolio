import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./RightArrowStyle.css";
import { Link } from "react-router-dom";

function RightArrow({ goingTo }) {
  return (
    <div className="right-arrow-container">
      <Link to={goingTo}>
        <IoIosArrowForward size={70} />
      </Link>
    </div>
  );
}

export default RightArrow;
