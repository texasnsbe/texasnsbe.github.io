/**
 * ResourcesApp Component
 *
 * Main page component for the Resources section of the NSBE website.
 * Provides a layout that includes navigation, resource links, and footer.
 * This component serves as the container for all resource-related content.
 *
 * @component
 * @returns {JSX.Element} Complete resources page with navigation and content
 */
import Navbar from "../../Shared/Components/Navbar";
import ResourceLinks from "./ResourceLinks";
import Footer from "../../Shared/Components/Footer";

const ResourcesApp = () => {
  return (
    <>
      <Navbar />
      <ResourceLinks />
      <Footer />
    </>
  );
};

export default ResourcesApp;
