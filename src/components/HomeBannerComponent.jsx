import React from "react";
import { Link } from "react-router-dom";
import "./HomeBannerComponentStyle.css";
import djangopng from "../assets/images/png-transparent-django.png";
import pythonpng from "../assets/images/python-programmer-png.png";
import reactpng from "../assets/images/kisspng-react.png";
import githubpng from "../assets/images/png-clipart.png";

function HomeBannerComponent() {
  return (
    <div className="home-banner">
      <Link to="/">
        <img className="home-banner-img" src={pythonpng} alt="" />
      </Link>
      <Link to="/">
        <img className="home-banner-img" src={reactpng} alt="" />
      </Link>

      <Link to="/">
        <img className="home-banner-img" src={djangopng} alt="" />
      </Link>
      <Link to="/">
        <img className="home-banner-img" src={githubpng} alt="" />
      </Link>
    </div>
  );
}

export default HomeBannerComponent;
