/**
 * DisplayPoints Component
 *
 * Embeds the NSBE member leaderboard in an iframe that shows the most active
 * members based on their participation points. The leaderboard is powered by
 * a Google Apps Script that generates dynamic content showing member rankings.
 *
 * @component
 * @returns {JSX.Element} Embedded leaderboard showing most active NSBE members
 */
import {
  SECTION_SPACING,
  CONTAINERS,
  TYPOGRAPHY,
  RESPONSIVE_SIZES,
  INTERACTIVE,
} from "../../styles/constants";

export default function DisplayPoints() {
  return (
    <div className={SECTION_SPACING.md}>
      <div className={CONTAINERS.default}>
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center space-y-3">
            <p
              className={TYPOGRAPHY.subsectionTitle}
              style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              MOST ACTIVE MEMBERS!
            </p>
            <h2
              className={`${TYPOGRAPHY.sectionTitle} text-white`}
              style={{
                fontFamily: "Rubik, sans-serif",
                textShadow:
                  "0.1em 0.1em 0 #000, 0.2em 0.2em 0.1em rgba(0,0,0,0.3)",
                WebkitTextFillColor: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              LEADERBOARD
            </h2>
          </div>

          <iframe
            src="https://script.google.com/macros/s/AKfycbyNfzaTwzEEDc45ZqGRdDVbjS2XCpv2cn8KLFxG_rgPKd8Qt9EH5mYJWWTsO92d0qaD/exec"
            className={`${RESPONSIVE_SIZES.iframe.default} ${INTERACTIVE.hover} rounded-2xl style-brand-shadow`}
            title="NSBE Member Leaderboard"
          />
        </div>
      </div>
    </div>
  );
}
