/**
 * App
 *
 * Root application shell that assembles the home page sections and shared layout.
 * Each section is wrapped in a div with an id referenced by the `Navbar` for
 * in-page navigation.
 */
import Navbar from "./Shared/Components/Navbar";
import Meetings from "./Home/Components/Meetings";
import GoogleCal from "./Home/Components/GoogleCal";
import EventPhotos from "./Home/Components/EventPhotos";
import PayDues from "./Home/Components/PayDues";
import Footer from "./Shared/Components/Footer";
import DisplayPoints from "./Home/Components/DisplayPoints";
import JoinSlack from "./Home/Components/JoinSlack";
import HeroSect from "./Home/Components/HeroSect";
import OfficersButton from "./Home/Components/OfficersButton";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <HeroSect />
      </div>
      <div id="calendar">
        <GoogleCal />
      </div>
      <div id="meetings">
        <Meetings />
      </div>
      <div id="points">
        <DisplayPoints />
      </div>
      <div id="slack">
        <JoinSlack />
      </div>
      <div id="dues">
        <PayDues />
      </div>
      <div id="photos">
        <EventPhotos />
      </div>
      <OfficersButton />
      <Footer />
    </>
  );
};

export default App;
