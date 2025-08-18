/**
 * EventPhotos Component
 *
 * A horizontal scrolling gallery of NSBE event photos with navigation arrows.
 * Users can scroll through images manually or use the left/right chevron buttons
 * to navigate. Images are optimized for performance with lazy loading and
 * dragging is disabled to prevent interference with scroll navigation.
 *
 * @component
 * @returns {JSX.Element} Horizontal scrolling photo gallery with navigation
 */
import images from "../Assets/EventPhotos/event_photos.js";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import OptimizedImage from "../../Shared/Components/OptimizedImage";
import { IMAGE_PRESETS } from "../../utils/imageUtils";
import {
  SECTION_SPACING,
  CONTAINERS,
  TYPOGRAPHY,
  ICON_SIZES,
} from "../../styles/constants";

export default function EventPhotos() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    const scrollAmount = window.innerWidth < 768 ? 350 : 500;
    slider.scrollLeft = slider.scrollLeft - scrollAmount;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    const scrollAmount = window.innerWidth < 768 ? 350 : 500;
    slider.scrollLeft = slider.scrollLeft + scrollAmount;
  };

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
              CAPTURING MEMORIES!
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
              EVENT PHOTOS
            </h2>
          </div>

          {/* Photo Gallery */}
          <div className="relative flex items-center">
            <MdChevronLeft
              className={`${ICON_SIZES.xl} opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-200 text-white hover:text-orange-400 flex-shrink-0 z-10`}
              onClick={slideLeft}
            />

            <div
              id="slider"
              className="w-full h-full overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth mx-2 sm:mx-4 py-4"
            >
              {images.map((item, index) => (
                <OptimizedImage
                  key={index}
                  src={item}
                  alt={`NSBE Event Photo ${index + 1}`}
                  width={512}
                  height={288}
                  {...IMAGE_PRESETS.eventPhoto}
                />
              ))}
            </div>

            <MdChevronRight
              className={`${ICON_SIZES.xl} opacity-50 cursor-pointer hover:opacity-100 transition-opacity duration-200 text-white hover:text-orange-400 flex-shrink-0 z-10`}
              onClick={slideRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
