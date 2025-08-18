/**
 * PayDues Component
 *
 * Displays the membership dues section with pricing ($25), benefits breakdown,
 * and a call-to-action link to the payment form. Features a responsive layout
 * with benefits list and T-shirt preview image. Benefits include free food,
 * merchandise, and membership priority.
 *
 * @component
 * @returns {JSX.Element} Dues payment section with benefits and pricing
 */
import due_benefits from "../Assets/Dues/due_benefits.js";
import tshirt from "../Assets/Dues/Tshirt.jpg";
import {
  SECTION_SPACING,
  CONTAINERS,
  GRID_LAYOUTS,
  TYPOGRAPHY,
  BUTTON_STYLES,
  INTERACTIVE,
  RESPONSIVE_SIZES,
  IMAGE_STYLES,
} from "../../styles/constants";

export default function PayDues() {
  return (
    <div className={SECTION_SPACING.md}>
      <div className={CONTAINERS.default}>
        <div className={`${GRID_LAYOUTS.responsive2} items-center`}>
          <div className="space-y-6">
            <div className="space-y-4">
              <h2
                className={TYPOGRAPHY.subsectionTitle}
                style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                NSBE VIP
              </h2>
              <p
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
                PAY DUES
              </p>
            </div>

            <div
              className={`relative rounded-2xl border-l-8 border-orange-700 bg-white p-6 transition-transform duration-300 ease-out hover:scale-105 space-y-6 style-brand-shadow`}
            >
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                $25
              </p>

              <div className="space-y-4">
                {due_benefits.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-start space-x-3"
                  >
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-orange-700 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <dt className="font-semibold text-black">
                        {feature.name}
                      </dt>
                      <dd className="text-black">{feature.description}</dd>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc2rP4CcGY-RkZGd3M3lASSjejy1TgNu-l2nUIaqOjCXUIicw/viewform?usp=sf_link&pli=1"
                className={`${BUTTON_STYLES.primary} btn-brand-shadow w-fit`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pay Now
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              alt="NSBE T-shirt screenshot"
              src={tshirt}
              width={2432}
              height={1442}
              className={`${RESPONSIVE_SIZES.heroImage.default} ${IMAGE_STYLES.heroImage} ${INTERACTIVE.hover} style-brand-shadow rounded-2xl`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
