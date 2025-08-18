import { useEffect } from "react";
import Navbar from "../../Shared/Components/Navbar";
import Officers from "./Officers";
import AboutDetails from "./AboutDetails";
import Footer from "../../Shared/Components/Footer";
const AboutApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <AboutDetails />
        <Officers />
        <Footer />
      </div>
    </>
  );
};

export default AboutApp;
