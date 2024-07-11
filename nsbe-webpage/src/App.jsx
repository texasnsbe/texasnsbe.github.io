import React from 'react';
import Navbar from './Components/Navbar'; 
import HeroSection from './Components/Navbar';
import Meetings from './Components/Meetings';
import GoogleCal from './Components/GoogleCal';
import LeaderSection from './Components/Officers';
const App = () => {
  return (
    <>
      <HeroSection />
      <GoogleCal />
      <Meetings />
      <LeaderSection />
    </>
  );
};

export default App
