/**
 * OfficersButton Component
 *
 * A simple call-to-action button that navigates users to the Officers page.
 * Uses React Router's Link component for client-side navigation and includes
 * hover animations and styling consistent with the site's design system.
 *
 * @component
 * @returns {JSX.Element} Navigation button to the officers page
 */
import { Link } from "react-router-dom";
import { SECTION_SPACING, BUTTON_STYLES } from "../../styles/constants";

export default function OfficersButton() {
  return (
    <div className={`${SECTION_SPACING.md} flex justify-center`}>
      <Link
        to="/officers"
        className={`${BUTTON_STYLES.primary} btn-brand-shadow`}
      >
        Meet Our Officers
      </Link>
    </div>
  );
}
