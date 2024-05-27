import React from 'react';
import './OurWork.css';
import farmhouseImage from './farmhouse.jpg'; // Add your images here
import contemporaryImage from './contemporary.jpg';
import classicImage from './classic.png';

const OurWork = () => {
    return (
      <section className="our-work">
        <div className="highlight-box">
          <h2>Our Work</h2>
          <div className="work-examples">
            <div className="work-item">
              <img src={farmhouseImage} alt="Farmhouse Transformation" className="work-image" />
              <div className="work-content">
                <h3>Farmhouse Transformation</h3>
                <p>We transformed this dated home into a stunning, contemporary farmhouse with a cohesive, charming design.</p>
              </div>
            </div>
            <div className="work-item">
              <img src={contemporaryImage} alt="Contemporary Masterpiece" className="work-image" />
              <div className="work-content">
                <h3>Contemporary Masterpiece</h3>
                <p>Our team expertly blended modern materials and design elements to create this truly unique and impressive home exterior.</p>
              </div>
            </div>
            <div className="work-item">
              <img src={classicImage} alt="Classic Curb Appeal" className="work-image" />
              <div className="work-content">
                <h3>Classic Curb Appeal</h3>
                <p>We enhanced the timeless charm of this home by updating the siding, roofing, and landscaping for maximum curb appeal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default OurWork;