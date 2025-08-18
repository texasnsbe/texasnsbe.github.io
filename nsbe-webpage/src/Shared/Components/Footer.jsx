/**
 * Footer
 *
 * Displays social links with a simple lifted hover effect and the current year.
 * Uses a shared image class string for consistency across icons.
 */
import socialsColors from "../Assets/SocialMedia/socials_colors.js";
import socialsGrayscale from "../Assets/SocialMedia/socials_grayscale.js";
import "../../CSS/Footer.css";

const classDef =
  "col-span-2 max-h-12 w-full object-contain lg:col-span-1 transition-all duration-300 ease-out group-hover:scale-125";

/**
 * Renders the site footer with social icons and copyright text.
 */
export default function Footer() {
  const yearDisplay = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <h1 className="text-4xl font-semibold footer-title-shadow footer-soft-lift">
          Stay Connected.
        </h1>
        <div className="flex justify-center mx-auto mt-[5vh] max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          {socialsColors.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative inline-block group">
                <img
                  alt={`${socialImg.name} shadow`}
                  src={(socialsGrayscale[index] && socialsGrayscale[index].img) ? socialsGrayscale[index].img : socialImg.img}
                  className={`${classDef} absolute top-0 left-0 translate-x-1 translate-y-1 opacity-80 pointer-events-none select-none`}
                  aria-hidden="true"
                />
                <img
                  alt={socialImg.name}
                  src={socialImg.img}
                  className={`${classDef} relative footer-soft-lift`}
                />
              </span>
            </a>
          ))}
        </div>
        <p className="mt-[8vh]">
          ©{yearDisplay} Texas NSBE. All rights reserved.
        </p>
      </div>
    </div>
  );
}
