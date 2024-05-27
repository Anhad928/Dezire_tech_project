// src/MyComponents/OurServices.js
import React from 'react';
import './OurServices.css';

const OurServices = () => {
  return (
    <div className="our-services">
      <div className="highlight-box">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <div className="service-number">1</div>
            <div>
              <h3>Roof Replacement</h3>
              <p>Transform the look of your home with a new, high-quality roof that enhances its curb appeal.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-number">2</div>
            <div>
              <h3>Siding Installation</h3>
              <p>Upgrade your home's exterior with durable, low-maintenance siding options that add style and protection.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-number">3</div>
            <div>
              <h3>Landscaping Design</h3>
              <p>Elevate your outdoor spaces with thoughtful landscaping that complements your home's architecture.</p>
            </div>
          </div>
          <div className="service-item">
            <div className="service-number">4</div>
            <div>
              <h3>Window Replacement</h3>
              <p>Improve energy efficiency and aesthetics with custom-fitted windows that seamlessly integrate with your home's style.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
