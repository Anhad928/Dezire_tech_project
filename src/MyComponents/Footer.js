import React from 'react';
import './Footer.css';
import dzLogo from './dz-logo.png'; // Add your logo image here
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={dzLogo} alt="DZ Logo" />
      </div>
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <ul>
              <li><Link to="/aboutus">About Us</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li><Link to="/team">Our Team</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
