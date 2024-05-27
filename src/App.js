import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './MyComponents/MainLayout';
import FooterOnlyLayout from './MyComponents/FooterOnlyLayout';
import OurServices from './MyComponents/OurServices';
import OurWork from './MyComponents/OurWork';
import WhyChooseUs from './MyComponents/WhyChooseUs';
import Testimonials from './MyComponents/Testimonials';
import GetQuote from './MyComponents/GetQuote';
import AboutUs from './MyComponents/AboutUs';
import ContactUs from './MyComponents/ContactUs';
import OurTeam from './MyComponents/OurTeam';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <OurServices />
              <WhyChooseUs />
              <OurWork />
              <Testimonials />
              <GetQuote />
            </MainLayout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <FooterOnlyLayout>
              <AboutUs />
            </FooterOnlyLayout>
          }
        />
        <Route
          path="/services"
          element={
            <MainLayout>
              <OurServices />
            </MainLayout>
          }
        />
        <Route
          path="/ourwork"
          element={
            <MainLayout>
              <OurWork />
            </MainLayout>
          }
        />
        <Route
          path="/whychooseus"
          element={
            <MainLayout>
              <WhyChooseUs />
            </MainLayout>
          }
        />
        <Route
          path="/testimonials"
          element={
            <MainLayout>
              <Testimonials />
            </MainLayout>
          }
        />
        <Route
          path="/getquote"
          element={
            <MainLayout>
              <GetQuote />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <FooterOnlyLayout>
              <ContactUs />
            </FooterOnlyLayout>
          }
        />
        <Route
          path="/team"
          element={
            <FooterOnlyLayout>
              <OurTeam />
            </FooterOnlyLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
