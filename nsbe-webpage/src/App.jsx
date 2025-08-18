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
        {/* Horizontal flex container for Calendar and Slack components */}
        <div className="py-8">
          <div className="mx-auto max-w-6xl px-4 lg:px-6">
            <div className="flex flex-col lg:flex-row lg:gap-6 lg:items-start space-y-8 lg:space-y-0">
              {/* Calendar component - takes up one vertical flex box */}
              <div className="flex-1 min-w-0">
                <GoogleCal />
              </div>

              {/* Slack component - takes up one vertical flex box */}
              <div className="flex-1 min-w-0">
                <JoinSlack />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="meetings">
        <Meetings />
      </div>
      <div id="points">
        <DisplayPoints />
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
