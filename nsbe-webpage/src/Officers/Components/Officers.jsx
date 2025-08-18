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
    <>
      <div className="mt-6 pb-10">
        {top_v.map((chairperson) => (
          <div
            className="py-6 mx-[12.5vw]"
            key={chairperson.role.zone}
            id={chairperson.role.zone.toLowerCase()}
          >
            <h1 className="my-10 max-xl:text-center subheaderstyle transition-all hover:scale-105 duration-300 ease-out">
              {chairperson.role.zone}
            </h1>
            <div className="grid max-w-7xl gap-x-8 gap-y-20 xl:grid-cols-3 max-lg:grid-cols-1">
              <div className="flex flex-col max-xl:items-center max-xl:text-center">
                <img
                  loading="lazy"
                  className="max-xl:w-[40vw] max-sm:w-[90vw] object-cover darkbg transition-all hover:scale-110 duration-300 ease-out"
                  src={chairperson.imageUrl}
                  alt={chairperson.name}
                />
                <h2 className="mt-10 tracking-tight text-gray-900 startl">
                  {chairperson.name}
                </h2>
                <p className="mt-1 text-4xl font-semibold start-topv-title">
                  {chairperson.role.name}
                </p>
                <a
                  href={chairperson.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-block mt-4">
                    <img
                      loading="lazy"
                      src="https://i.imgur.com/MCA42gN.png"
                      width="50"
                      className="absolute top-0 left-0 translate-x-0.5 translate-y-0.5 opacity-80 pointer-events-none select-none"
                      alt="LinkedIn Icon Shadow"
                      aria-hidden="true"
                    />
                    <img
                      loading="lazy"
                      src="https://i.imgur.com/KJP9wXt.png"
                      width="50"
                      className="relative object-center drop-shadow-none"
                      alt="LinkedIn Icon"
                    />
                  </span>
                </a>
              </div>

              <ul
                role="list"
                className="sm:ml-16 grid gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              >
                {officers.map((person) =>
                  person.id === chairperson.role.zone ? (
                    <li key={person.name} id={getRoleId(person.role)}>
                      <div className="flex items-center gap-x-6 transition-all hover:scale-110 duration-300 ease-out">
                        <img
                          loading="lazy"
                          alt={person.name}
                          src={person.imageUrl}
                          className="h-[16vh] w-auto rounded-full darkbg"
                        />
                        <div>
                          <h3 className="font-semibold leading-6 tracking-tight text-stone-100 startm">
                            {person.name}
                          </h3>
                          <p className="font-semibold leading-6 text-yellow-400 start-title">
                            {person.role}
                          </p>
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="relative inline-block mt-2">
                              <img
                                loading="lazy"
                                alt="LinkedIn Icon Shadow"
                                src="https://i.imgur.com/MCA42gN.png"
                                width="25"
                                className="absolute top-0 left-0 translate-x-0.5 translate-y-0.5 opacity-80 pointer-events-none select-none"
                                aria-hidden="true"
                              />
                              <img
                                loading="lazy"
                                alt="LinkedIn Icon"
                                src="https://i.imgur.com/KJP9wXt.png"
                                width="25"
                                className="relative"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
