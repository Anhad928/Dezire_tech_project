// src/MyComponents/AboutUs.js
import React from 'react';
import './AboutUs.css';
import house1 from './classic.png'; // Ensure the paths to your images are correct
import house2 from './contemporary.jpg';
import { Link } from 'react-router-dom';
import house3 from './farmhouse.jpg';


const AboutUs = () => {
  return (
    <div className="about-us">
        <div className="home-button-container">
        <Link to="/" className="home-button">Return to Home</Link>
      </div>
      <div className="breadcrumb">
      </div>
      <h1>About Us</h1>
      <p>
        At Dezire Exteriors, we are passionate about transforming homes through exceptional exterior design solutions. With our team of experienced professionals and commitment to quality craftsmanship, we strive to exceed our clients' expectations. From stunning landscaping to custom outdoor living spaces, let us help you create the home of your dreams.
      </p>
      <div className="image-gallery">
        <img src={house1} alt="House 1" />
        <img src={house2} alt="House 2" />
        <img src={house3} alt="House 3" />
      </div>
    </div>
  );
};

export default AboutUs;
