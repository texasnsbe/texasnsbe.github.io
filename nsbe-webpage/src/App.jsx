import React from 'react';
import Navbar from './Components/Navbar';
import Meetings from './Components/Meetings';
import GoogleCal from './Components/GoogleCal';
import HeroSect from './Components/HeroSect';
import EventPhotos from './Components/EventPhotos';
import PayDues from './Components/PayDues';
import Footer from './Components/Footer';
import DisplayPoints from './Components/DisplayPoints';
const App = () => {
  return (
    <>
          <Navbar />
          <HeroSect/>
          <EventPhotos />
          <GoogleCal />
          <Meetings />
          <DisplayPoints />
          <PayDues />
          <Footer />
    </>
  );
};

export default App
