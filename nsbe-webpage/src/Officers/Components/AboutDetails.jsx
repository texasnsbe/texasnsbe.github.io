/**
 * AboutDetails Component
 *
 * Displays the officers page header with the NSBE mission statement
 * and a featured image. Uses a single card layout combining the mission
 * statement with the TopV image, similar to GBM cards. Includes the
 * OFFICERS title prominently at the top.
 */
import image from "../Assets/Officers/New_Officer_Photos/TopV.jpg";
import {
  SECTION_SPACING,
  CONTAINERS,
  TYPOGRAPHY,
} from "../../styles/constants";

export default function AboutDetails() {
  return (
    <div className={SECTION_SPACING.lg}>
      {/* Officers Title Section */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1
            className={`${TYPOGRAPHY.hero} text-white`}
            style={{
              fontFamily: "Rubik, sans-serif",
              textShadow:
                "0.1em 0.1em 0 #000, 0.2em 0.2em 0.1em rgba(0,0,0,0.3)",
              WebkitTextFillColor: "#ffffff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            2024-25 OFFICERS
          </h1>
        </div>
      </div>

      {/* Mission Statement Card */}
      <div className={CONTAINERS.default}>
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <article className="relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={image}
                  alt="NSBE Top Five Officers"
                  className="w-full h-80 md:h-96 object-cover"
                  width={800}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />

                {/* Mission Badge Overlay */}
                <div className="absolute top-6 left-6 bg-orange-700 text-white rounded-xl px-6 py-3 font-bold text-lg shadow-lg">
                  Our Mission
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Building Excellence in Engineering
                </h2>
                <p className="text-lg leading-relaxed tracking-wide font-medium text-gray-700">
                  <span className="text-2xl text-orange-700 font-bold mr-2">
                    Our
                  </span>
                  mission is to increase the number of culturally responsible
                  Black engineers excelling academically, succeeding
                  professionally, and positively impacting the community!
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
