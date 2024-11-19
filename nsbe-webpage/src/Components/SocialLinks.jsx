import socials from '../assets/SocialMedia/socials_colors.js';
const imgWidth = 150
const imgHeight = 75
const classDef ="col-span-2 mt-10 w-[20vw] object-contain items-center lg:col-span-1 transition-all hover:scale-110 duration-300 ease-out";

export default function SocialLinks() {
    return (
      <div className="flex flex-col items-center pb-[5vh]">
        <h1 className="herostyle tracking-tight transition-all hover:scale-105 duration-300 ease-out">
          CONTACT
        </h1>
        <div className="grid grid-cols-5 max-md:grid-cols-1 mx-[13vw] gap-x-[5.5vw] gap-y-[5.5vh]">
          {socials.map((socialImg) => (
            <a href={socialImg.link} target="_blank" rel="noopener noreferrer">
              <img
                alt={socialImg.name}
                src={socialImg.img}
                className={classDef}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
  