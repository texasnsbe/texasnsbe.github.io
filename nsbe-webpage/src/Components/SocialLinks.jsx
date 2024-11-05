import socials from '../assets/SocialMedia/socials_colors.js';
const imgWidth = 150
const imgHeight = 75
const classDef = "col-span-2 max-h-24 w-full object-contain lg:col-span-1 transition-all hover:scale-110 duration-300 ease-out"

export default function SocialLinks() {
    return (
      <div className="flex flex-col pb-20">
        <h2 className="text-center text-3xl mt-1 tracking-wider text-black pt-5 ">
          More NSBE?
        </h2>
        <h1 className="transition-all hover:scale-105 duration-300 ease-out text-center headerstyle pb-[12vh]">
          CONTACT
        </h1>
        <div className="grid grid-cols-5 max-md:grid-cols-1 mx-[12.5vw] gap-x-6 gap-y-20 items-center">
          {socials.map((socialImg) => (
            <a href={socialImg.link}>
              <img
                alt={socialImg.name}
                src={socialImg.img}
                width={imgWidth}
                height={imgHeight}
                className={classDef}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
  