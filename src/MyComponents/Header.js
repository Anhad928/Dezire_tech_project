// src/MyComponents/Header.js
import React from 'react';
import './Header.css';
import headerImage from './test.png'; // Ensure the path to your image is correct

const Header = () => {
  const scrollToQuote = () => {
    document.getElementById('get-quote').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">Dezire Tech</h1>
          <p className="header-subtitle">Elevating your home's beauty and value with exceptional exterior design solutions.</p>
          <button onClick={scrollToQuote} className="quote-button">Get a Quote</button>
        </div>
        <div className="header-image">
          <img src={headerImage} alt="Dezire Tech" />
        </div>
      </div>
    </header>
  );
};

export default Header;  
