import React from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

function ContactPage() {
  return (
    <div>
      <RightArrow goingTo={"/blog"} />
      <LeftArrow goingTo={"/projects"} />
    </div>
  );
}

export default ContactPage;
