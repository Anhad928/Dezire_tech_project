// src/MyComponents/OurTeam.js
import React from 'react';
import { Link } from 'react-router-dom';
import './OurTeam.css';
import teamMember1 from './IMG_8813 2.jpg'; // Ensure the paths to your images are correct
import teamMember2 from './IMG_8814 2.jpg';
import teamMember3 from './IMG_8815 2.jpg';

const OurTeam = () => {
  return (
    <div className="our-team">
      <Link to="/" className="home-button">Home</Link>
      <h1>Meet Our Team</h1>
      <div className="team-members">
        <div className="team-member">
          <img src={teamMember1} alt="Mr. Davinder Pal Singh" />
          <h2>Mr. Davinder Pal Singh</h2>
          <p>Our CEO has over 20 years of experience in the real estate and building industry and a track record of success. He leads our team with a customer-first approach and a passion for helping people find their dream home.</p>
        </div>
        <div className="team-member">
          <img src={teamMember2} alt="Mr. Kanwardeep Singh" />
          <h2>Mr. Kanwardeep Singh</h2>
          <p>As our co-founder, Kanwardeep brings a wealth of knowledge to our team. With a background in real estate, building and sales, he is dedicated to bringing innovative solutions to the real estate industry.</p>
        </div>
        <div className="team-member">
          <img src={teamMember3} alt="Anhadpreet Singh" />
          <h2>Mr. Anhadpreet Singh</h2>
          <p>Our IT Consultant, Anhadpreet Singh, has a certified degree from the University of Alberta in Computer Science. He is committed to using his expertise to create a seamless experience for our clients, from browsing listings and answering the queries to maintaining a large database of information and conceptual designs.</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
