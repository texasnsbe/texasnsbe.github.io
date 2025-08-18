/**
 * HeroSect
 *
 * Displays the home page hero header and the looping introduction video.
 * Uses standardized typography and spacing from the design system.
 */
import LoopingVideo from "../../Shared/Components/LoopingVideo";
import { SECTION_SPACING, TYPOGRAPHY } from "../../styles/constants";

export default function HeroSect() {
  return (
    <div className={`flex justify-center ${SECTION_SPACING.md}`}>
      <div className="flex flex-col justify-center items-center space-y-8 md:space-y-10 lg:space-y-12 max-w-6xl mx-auto px-6">
        <h1
          className={`${TYPOGRAPHY.hero} text-white mb-4 md:mb-5 lg:mb-6`}
          style={{
            fontFamily: "Rubik, sans-serif",
            textShadow: "0.1em 0.1em 0 #000, 0.2em 0.2em 0.1em rgba(0,0,0,0.3)",
            WebkitTextFillColor: "#ffffff",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Welcome to
          <br />
          <span className="text-yellow-400 block mt-2 md:mt-3 lg:mt-4">
            Texas NSBE
          </span>
        </h1>
        <div className="transform hover:scale-105 transition-transform duration-500 ease-out">
          <LoopingVideo />
        </div>
      </div>
    </div>
  );
}
