import React, { useState } from "react";
import emailjs from "emailjs-com";
import tiranamap from "../assets/images/Tirana-GoogleMaps.png";
import "./ContactFormComponentStyle.css";

function ContactFormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.id;

    setFormData({
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
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
    } else {
      setShowMessage(true);
    }
  };

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={sendEmail}>
        {showMessage ? <h1>Please fill out the form.</h1> : null}

        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-input"
          onChange={handleChange}
          id="name"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-input"
          onChange={handleChange}
          id="email"
        />
        <label>Message</label>
        <textarea
          type="text"
          name="message"
          className="form-input-message"
          id="message"
          onChange={handleChange}
        />
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
