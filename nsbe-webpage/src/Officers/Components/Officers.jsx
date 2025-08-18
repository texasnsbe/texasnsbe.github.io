/**
 * Officers Component
 *
 * Displays the NSBE officers organized by their departments (President, Membership,
 * Communications, Finance, Programs). Shows the top five executives prominently
 * and lists all other officers under their respective department heads.
 * Each officer card includes their photo, name, role, and LinkedIn profile link.
 *
 * @component
 * @returns {JSX.Element} Organized display of all NSBE officers by department
 */
import top_v from "../Assets/Officers/top_five.js";
import officers from "../Assets/Officers/officers.js";
import OptimizedImage from "../../Shared/Components/OptimizedImage";
import { IMAGE_PRESETS } from "../../utils/imageUtils";
import {
  SECTION_SPACING,
  CONTAINERS,
  TYPOGRAPHY,
  INTERACTIVE,
} from "../../styles/constants";

export default function Officers() {
  // Function to convert role name to ID
  const getRoleId = (roleName) => {
    const idMap = {
      "Graduate Liaison": "graduate-liaison",
      "Fundraising Chair": "fundraising",
      "Finance Chair": "finance",
      "Telecomms. Chair": "telecomms",
      "Public Relations": "public-relations",
      "Athletics Chair": "athletics",
      "Corporate Liason": "corporate",
      "Professional Development": "professional",
      "Cockrell Relations": "cockrell",
      "Membership Chair": "membership",
      Historian: "historian",
      "BWISE Coordinator": "bwise",
      "Conference Planner": "conference",
      "Social Chair": "social",
      "TORCH Chair": "torch",
      "PCI Torch Chair": "pci-torch",
      "FAT Advisor": "fat",
      "Academic Excellence": "academic",
    };
    return idMap[roleName] || roleName.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className={SECTION_SPACING.md}>
      <div className={CONTAINERS.default}>
        <div className="space-y-16">
          {top_v.map((chairperson) => (
            <div
              className="space-y-8"
              key={chairperson.role.zone}
              id={chairperson.role.zone.toLowerCase()}
            >
              {/* Department Title */}
              <h1
                className={`${TYPOGRAPHY.sectionTitle} text-center text-white`}
                style={{
                  fontFamily: "Rubik, sans-serif",
                  textShadow:
                    "0.1em 0.1em 0 #000, 0.2em 0.2em 0.1em rgba(0,0,0,0.3)",
                  WebkitTextFillColor: "#ffffff",
                  letterSpacing: "0.02em",
                  marginBottom: "2rem",
                }}
              >
                {chairperson.role.zone}
              </h1>

              {/* Department Head */}
              <div className="flex justify-center">
                <div
                  className={`${INTERACTIVE.hover} flex flex-col items-center space-y-4 max-w-sm`}
                >
                  <div className="relative">
                    <OptimizedImage
                      alt={chairperson.name}
                      src={chairperson.imageUrl}
                      width={256}
                      height={256}
                      {...IMAGE_PRESETS.officerPhotoHead}
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3
                      className="font-semibold text-2xl text-white"
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {chairperson.name}
                    </h3>
                    <p
                      className="font-semibold text-lg text-yellow-400"
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {chairperson.role.name}
                    </p>
                    <a
                      href={chairperson.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2"
                    >
                      <span className="relative inline-block">
                        <OptimizedImage
                          alt="LinkedIn Icon Shadow"
                          src="https://i.imgur.com/MCA42gN.png"
                          width={25}
                          height={25}
                          className="h-6 w-6 md:h-8 md:w-8 absolute top-0 left-0 translate-x-0.5 translate-y-0.5 opacity-80 pointer-events-none select-none"
                          loading="lazy"
                          decoding="async"
                        />
                        <OptimizedImage
                          alt="LinkedIn Icon"
                          src="https://i.imgur.com/KJP9wXt.png"
                          width={25}
                          height={25}
                          className="h-6 w-6 md:h-8 md:w-8 object-contain transition-transform duration-300 ease-out hover:scale-110 select-none relative"
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Department Officers */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {officers.map((person) =>
                  person.id === chairperson.role.zone ? (
                    <div
                      key={person.name}
                      id={getRoleId(person.role)}
                      className="block group"
                    >
                      <article className="relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl">
                        {/* Image Section */}
                        <div className="relative p-6 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800">
                          <div className="flex justify-center">
                            <OptimizedImage
                              alt={person.name}
                              src={person.imageUrl}
                              width={120}
                              height={120}
                              className="h-32 w-32 object-cover transition-transform duration-300 ease-out hover:scale-105 select-none rounded-full style-brand-shadow border-4 border-white"
                            />
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 space-y-3">
                          <h3
                            className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300"
                            style={{ fontFamily: "Rubik, sans-serif" }}
                          >
                            {person.name}
                          </h3>
                          <p
                            className="text-orange-700 font-semibold text-sm uppercase tracking-wide"
                            style={{ fontFamily: "Rubik, sans-serif" }}
                          >
                            {person.role}
                          </p>
                          <div className="flex justify-center pt-2">
                            <a
                              href={person.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block transition-transform duration-300 ease-out hover:scale-110"
                            >
                              <span className="relative inline-block">
                                <OptimizedImage
                                  alt="LinkedIn Icon Shadow"
                                  src="https://i.imgur.com/MCA42gN.png"
                                  width={24}
                                  height={24}
                                  className="h-6 w-6 absolute top-0 left-0 translate-x-0.5 translate-y-0.5 opacity-80 pointer-events-none select-none"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <OptimizedImage
                                  alt="LinkedIn Icon"
                                  src="https://i.imgur.com/KJP9wXt.png"
                                  width={24}
                                  height={24}
                                  className="h-6 w-6 object-contain transition-transform duration-300 ease-out hover:scale-110 select-none relative"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
