import React from 'react';
import Navbar from '../Components/Navbar';
import Officers from '../Components/Officers';
import AboutDetails from '../Components/AboutDetails';
import Footer from '../Components/Footer';
const AboutApp = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Navbar />
        <AboutDetails />
        <Officers />
        <Footer />
      </div>
    </>
  );
};

export default AboutApp
