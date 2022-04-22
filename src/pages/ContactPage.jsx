import React from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import ContactFormComponent from "../components/ContactFormComponent";

function ContactPage() {
  return (
    <div>
      <RightArrow goingTo={"/blog"} />
      <LeftArrow goingTo={"/projects"} />
      <ContactFormComponent />
    </div>
  );
}

export default ContactPage;
