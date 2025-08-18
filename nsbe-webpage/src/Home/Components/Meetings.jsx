/**
 * Meetings Component
 *
 * Displays a grid of recent General Body Meeting (GBM) posts with links to
 * presentation slides. Each meeting card shows the date, thumbnail image,
 * and title. Links open in new tabs to Google Slides presentations.
 *
 * @component
 * @returns {JSX.Element} Grid of recent GBM meeting cards with links
 */
import gbmposts from "../Assets/GBMs/gbm.js";
import {
  SECTION_SPACING,
  CONTAINERS,
  TYPOGRAPHY,
} from "../../styles/constants";

export default function Meetings() {
  return (
    <div className={SECTION_SPACING.md}>
      <div className={CONTAINERS.default}>
        <div className="space-y-6">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <p
              className={TYPOGRAPHY.subsectionTitle}
              style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              MISSED THE MEETING?
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
              RECENT GBMS
            </h2>
          </div>

          {/* Meetings Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
            {gbmposts.map((post) => (
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                key={post.date}
                className="block group"
              >
                <article className="relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Image with Overlay */}
                  <div className="relative">
                    <img
                      className="w-full h-64 object-cover"
                      src={post.slideImg}
                      loading="lazy"
                      alt={`GBM ${post.title} presentation thumbnail`}
                      width={400}
                      height={256}
                      decoding="async"
                    />

                    {/* Meeting Number Overlay */}
                    <div className="absolute top-4 left-4 bg-orange-700 text-white rounded-xl px-4 py-2 font-bold text-lg shadow-lg">
                      GBM {post.title}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-2">
                    <time className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                      {post.date}
                    </time>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                      General Body Meeting {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      View presentation slides
                    </p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
