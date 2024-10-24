import socials from '../assets/SocialMedia/socials_colors.js';
const imgWidth = 200
const imgHeight = 100
const classDef = "col-span-2 max-h-36 w-full object-contain lg:col-span-1 transition-all hover:scale-125 duration-300 ease-out"

export default function SocialLinks() {
    return (
      <div className="purple-bg py-56 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-normal leading-8 mt-1 tracking-wider text-black mx-auto pt-5 ">
            Where Can I Find More NSBE?
          </h2>
          <h1 className="transition-all hover:scale-105 duration-300 ease-out text-center text-6xl headerstyle font-black pb-20">
            Contact Us
          </h1>
          <div className="flex justify-between mx-auto mt-10 max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
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
      </div>
    )
  }
  