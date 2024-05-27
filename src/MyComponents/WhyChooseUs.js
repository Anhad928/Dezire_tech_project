import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="highlight-box">
        <h2>Why Choose Us</h2>
        <ul className="reasons-list">
          <li className="reason-item">
            <div className="reason-icon">✔</div>
            <div>
              <h3>Expert Design</h3>
              <p>Our team of experienced designers will work closely with you to create a custom exterior that exceeds your vision.</p>
            </div>
          </li>
          <li className="reason-item">
            <div className="reason-icon">✔</div>
            <div>
              <h3>Quality Craftsmanship</h3>
              <p>We only use the highest-quality materials and employ skilled tradesmen to ensure exceptional, long-lasting results.</p>
            </div>
          </li>
          <li className="reason-item">
            <div className="reason-icon">✔</div>
            <div>
              <h3>Personalized Service</h3>
              <p>From the initial consultation to the final walkthrough, you'll receive attentive, responsive service every step of the way.</p>
            </div>
          </li>
          <li className="reason-item">
            <div className="reason-icon">✔</div>
            <div>
              <h3>Satisfaction Guarantee</h3>
              <p>We're committed to your complete satisfaction and will work tirelessly to make sure you love the end result.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUs;
