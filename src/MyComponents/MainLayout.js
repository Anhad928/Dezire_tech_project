// src/MyComponents/MainLayout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header title="Dezire Exteriors" searchBar={true} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
