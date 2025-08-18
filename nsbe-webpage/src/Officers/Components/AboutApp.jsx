/**
 * AboutApp Component
 *
 * Main container component for the Officers/About page. Manages the page layout
 * by composing the Navbar, AboutDetails, Officers list, and Footer components.
 * Automatically scrolls to the top when the component mounts to ensure proper
 * navigation behavior when routing to this page.
 *
 * @component
 * @returns {JSX.Element} Complete officers page with all sections
 */
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
