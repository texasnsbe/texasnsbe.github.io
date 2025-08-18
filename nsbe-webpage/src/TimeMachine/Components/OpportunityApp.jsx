/**
 * TimeMachineApp Component
 *
 *
 * @component
 * @returns {JSX.Element} A basic page layout with navigation and footer
 */
import Navbar from "../../Shared/Components/Navbar";
import Footer from "../../Shared/Components/Footer";

const TimeMachineApp = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default TimeMachineApp;
