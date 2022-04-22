import React from "react";
import emailjs from "emailjs-com";
import tiranamap from "../assets/images/Tirana-GoogleMaps.png";
import "./ContactFormComponentStyle.css";

function ContactFormComponent() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={sendEmail}>
        <h1>Please fill out the form.</h1>
        <label>Name</label>
        <input type="text" name="name" className="form-input" />
        <label>Email</label>
        <input type="email" name="email" className="form-input" />
        <label>Message</label>
        <textarea name="message" className="form-input-message" />
        <input type="submit" value="Send" className="send-button" />
      </form>
      <div className="contact-location">
        <h1>Location.</h1>
        <img src={tiranamap} alt="" className="img-location" />
      </div>
    </div>
  );
}

export default ContactFormComponent;
