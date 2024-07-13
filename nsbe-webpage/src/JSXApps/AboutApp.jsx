import React from 'react';
import Navbar from '../Components/Navbar';
import Officers from '../Components/Officers';
import AboutDetails from '../Components/AboutDetails';
import Footer from '../Components/Footer';
const AboutApp = () => {
  return (
    <>
      <Navbar />
      <AboutDetails />
      <Officers />
      <Footer />
    </>
  );
};

export default AboutApp
