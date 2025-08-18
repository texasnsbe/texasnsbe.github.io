/**
 * Footer
 *
 * Displays social links with a simple lifted hover effect and the current year.
 * Uses standardized styling classes and design constants for consistency.
 */
import socialsColors from "../Assets/SocialMedia/socials_colors.js";
import socialsGrayscale from "../Assets/SocialMedia/socials_grayscale.js";
import "../../CSS/Footer.css";

export default function Footer() {
  const yearDisplay = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-content">
        <h1 className="footer-title">Stay Connected.</h1>

        <div className="footer-social-grid">
          {socialsColors.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group"
            >
              <span className="relative inline-block">
                <img
                  alt={`${socialImg.name} shadow`}
                  src={
                    socialsGrayscale[index] && socialsGrayscale[index].img
                      ? socialsGrayscale[index].img
                      : socialImg.img
                  }
                  className="footer-social-icon absolute top-0 left-0 translate-x-1 translate-y-1 opacity-80 pointer-events-none select-none"
                  aria-hidden="true"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                />
                <img
                  alt={socialImg.name}
                  src={socialImg.img}
                  className="footer-social-icon relative footer-soft-lift"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-base footer-copyright">
          ©{yearDisplay} Texas NSBE. All rights reserved.
        </p>
      </div>
    </div>
  );
}
