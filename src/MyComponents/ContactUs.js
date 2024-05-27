// src/MyComponents/ContactUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import officeImage from './office.jpeg'; // Ensure the path to your image is correct

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-item">
          <Link to="/" className="home-button">Home </Link>
        </div>
      <div className="contact-details">
        <h1>Connect With Us</h1>
        <div className="contact-item">
          <div className="contact-number">1</div>
          <div className="contact-info">
            <h2>Visit Our Office</h2>
            <p>Come by our conveniently located office to speak with one of our agents in person.</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-number">2</div>
          <div className="contact-info">
            <h2>Call Us Today at +91 9814209331</h2>
            <p>Give us a call to discuss your real estate needs and schedule a consultation.</p>
          </div>
        </div>
       
      </div>
      <div className="contact-image">
        <img src={officeImage} alt="Office" />
      </div>
    </div>
  );
};

export default ContactUs;
