import React, { useEffect, useState } from "react";
import "../assets/styles/HomePageStyles.css";
import HomeBannerComponent from "../components/HomeBannerComponent";
import HomeAnimatedLine from "../components/HomeAnimatedLine";
import HomeWelcomeComponent from "../components/HomeWelcomeComponent";
import HomePageSocialIcons from "../components/HomePageSocialIcons";
import RightArrow from "../components/RightArrow";
import HomePagePresentation from "../components/HomePagePresentation";

function HomePage() {
  const [goRight, setGoRight] = useState(false);

  const goForward = () => {
    setGoRight(true);
    console.log("Hallow");
    console.log(goRight);
  };


  return (
    <div onClick={goForward}>
      <HomeBannerComponent />
      {/* <HomeAnimatedLine /> */}
      <HomeWelcomeComponent />
      <HomePageSocialIcons />
      <RightArrow goingTo={"/projects"} />
      <HomePagePresentation />
    </div>
  );
}

export default HomePage;
