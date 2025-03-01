import React from 'react';
import Navbar from './Components/Navbar';
import Meetings from './Components/Meetings';
import GoogleCal from './Components/GoogleCal';
import EventPhotos from './Components/EventPhotos';
import PayDues from './Components/PayDues';
import Footer from './Components/Footer';
import DisplayPoints from './Components/DisplayPoints';
import JoinSlack from './Components/JoinSlack';
import HeroSect from './Components/HeroSect';
import HornsRaiser from './Components/HornsRaiser';
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSect />
      <GoogleCal />
      <Meetings />
      <DisplayPoints />
      <JoinSlack />
      <PayDues />
      <EventPhotos />
      <Footer />
    </>
  );
};

export default App
