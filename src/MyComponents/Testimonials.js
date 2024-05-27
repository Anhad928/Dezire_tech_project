import React from 'react';
import './Testimonials.css';
import akashImage from './akash.jpg'; // Add your images here
import sandeepImage from './sandeep.jpeg';
import garryImage from './garry.jpg';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="highlight-box">
        <h2>Testimonials</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <img src={akashImage} alt="Akash Bhambra" className="testimonial-image" />
            <p className="testimonial-author">Akash Bhambra</p>
            <p className="testimonial-text">"The team kept us informed every step of the way, ensuring we were always in the loop about the progress of the renovation. Their consistent communication and transparency made the entire process smooth and stress-free. We never had to worry about unexpected issues or delays because they handled everything with utmost professionalism. In the end, we're absolutely thrilled with the final result. The quality of their work exceeded our expectations, and we couldn't be happier with the transformation of our space."</p>
          </div>
          <div className="testimonial-item">
            <img src={sandeepImage} alt="Sandeep Singh" className="testimonial-image" />
            <p className="testimonial-author">Sandeep Singh</p>
            <p className="testimonial-text">"Dezire Exteriors exceeded all of our expectations in every aspect of their work. From the initial consultation to the final touches, their attention to detail was evident. They meticulously planned and executed every part of the project, ensuring that no detail was overlooked. Their commitment to excellence is unparalleled, and it shows in the superior quality of their craftsmanship. They went above and beyond to ensure that every aspect of the project was completed to the highest standard. We are incredibly satisfied with the results and would highly recommend Dezire Exteriors to anyone looking for top-notch exterior renovation services."</p>
          </div>
          <div className="testimonial-item">
            <img src={garryImage} alt="Garry" className="testimonial-image" />
            <p className="testimonial-author">Garry</p>
            <p className="testimonial-text">"We've enthusiastically recommended Dezire Exteriors to all our friends and neighbors because of the exceptional experience we had with them. Their professionalism, dedication, and quality of work truly set them apart in the industry. From start to finish, they demonstrated a level of expertise and customer care that is rare to find. Every interaction with their team was positive, and the results of their work speak for themselves. They transformed our space beyond our expectations, and we couldn't be happier. Dezire Exteriors truly are the best in the business, and we are confident that anyone who chooses them will be just as satisfied as we are."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
