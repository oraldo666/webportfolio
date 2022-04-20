import React from "react";
import { SocialIcon } from "react-social-icons";
import "./HomePageSocialIconsStyle.css";

function HomePageSocialIcons() {
  return (
    <div className="social-icons-container">
      <h1>Follow Me</h1>
      <SocialIcon
        url="https://www.linkedin.com/in/oraldo-hysaj-49210918a/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon
        url="https://github.com/oraldo666"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon
        url="https://www.instagram.com/oraldohysaj/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon
        url="https://www.facebook.com/oraldo.hysaj/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <SocialIcon
        url="https://twitter.com/oraldo_hysaj"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  );
}

export default HomePageSocialIcons;
