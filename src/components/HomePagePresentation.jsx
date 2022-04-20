import React from "react";
import "./HomePagePresentationStyle.css";

function HomePagePresentation() {
  return (
    <div className="home-page-presentation-container">
      <h1 className="first-text">I am a full-stack developer</h1>
      <br />
      <h1 className="second-text">
        <span className="span-text">Front End Developing: - </span>
        Dealing with the interface and user-facing systems. Develop the
        navigation, interface, and visuals with JavaScript and ReactJs
      </h1>
      <br />
      <h1 className="third-text">
        <span className="span-text">Back End Developing: - </span>
        Dealing with the server and database of the application - Create the
        back frame that allows the front end development to exist - Utilize
        Python and Django Store user information into database
      </h1>
      <br />
      <h1 className="forth-text">
        <span className="span-text">DevOps: - </span> I have good knowledge of
        integrations with Git (GitLab, GitHub with pull requests), Heroku Cloud
        Platform, and familiar with some AWS technologies.
      </h1>
    </div>
  );
}

export default HomePagePresentation;
