import React from 'react';
import Navbar from './Components/Navbar';
import Meetings from './Components/Meetings';
import GoogleCal from './Components/GoogleCal';
import EventPhotos from './Components/EventPhotos';
import PayDues from './Components/PayDues';
import Footer from './Components/Footer';
import DisplayPoints from './Components/DisplayPoints';
import JoinSlack from './Components/JoinSlack';
import NewHeroSect from './Components/NewHeroSect';
const App = () => {
  return (
    <>
          <Navbar />
          <NewHeroSect/>
          <EventPhotos />
          <GoogleCal />
          <JoinSlack/>
          <Meetings />
          <DisplayPoints />
          <PayDues />
          <Footer />
    </>
  );
};

export default App
