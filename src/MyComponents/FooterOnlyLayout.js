// src/MyComponents/FooterOnlyLayout.js
import React from 'react';
import Footer from './Footer';
import './FooterOnlyLayout.css'; // Import the new CSS file

const FooterOnlyLayout = ({ children }) => {
  return (
    <div className="footer-only-layout">
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default FooterOnlyLayout;
