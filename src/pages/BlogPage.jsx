import React from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";

function BlogPage() {
  return (
    <div>
      <RightArrow goingTo={"/"} />
      <LeftArrow goingTo={"/contact"} />
    </div>
  );
}

export default BlogPage;
