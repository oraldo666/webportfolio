import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./LeftArrowStyle.css";
import { Link } from "react-router-dom";

function LeftArrow({ goingTo }) {
  return (
    <div className="left-arrow-container">
      <Link to={goingTo}>
        <IoIosArrowBack size={70} />
      </Link>
    </div>
  );
}

export default LeftArrow;
