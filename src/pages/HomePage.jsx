import React from "react";
import "../assets/styles/HomePageStyles.css";
import HomeBannerComponent from "../components/HomeBannerComponent";
import HomeAnimatedLine from "../components/HomeAnimatedLine";
import HomeWelcomeComponent from "../components/HomeWelcomeComponent";
import HomePageSocialIcons from "../components/HomePageSocialIcons";
import RightArrow from "../components/RightArrow";
import HomePagePresentation from "../components/HomePagePresentation";

function HomePage() {
  return (
    <div>
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
