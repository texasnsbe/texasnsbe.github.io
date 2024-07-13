const imgWidth = 200
const imgHeight = 100
const classDef = "col-span-2 max-h-36 w-full object-contain lg:col-span-1"
const socialImgs = [
    {
        name: "LinkedIn",
        img: "https://i.imgur.com/KJP9wXt.png",
        link: "https://www.linkedin.com/company/utnsbe/",
    },
    {
        img: "https://i.imgur.com/Qed4AT4.png",
        link: "https://www.instagram.com/ut_nsbe/",
        name: "Instagram",
    },
    {
        img: "https://i.imgur.com/l8GB9zA.png",
        link: "https://join.slack.com/t/nsbemembers/shared_invite/zt-2mmymfxhx-C2aNZUQxHrCfa2I4M1Lzdg",
        name: "Slack",
    },
    {
        img: "https://i.imgur.com/LvA8vFF.png",
        link: "https://www.instagram.com/nsbe.official/",
        name: "X",
    },
    {
        img: "https://i.imgur.com/K7ZNRDu.png",
        link: "https://www.instagram.com/nsbe.official/",
        name: "Facebook",
    },
]

export default function SocialLinks() {
    return (
      <div className="bg-white py-56 sm:py-60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-6xl font-serif font-black pb-2">
            Contact Us
          </h2>
          <h2 className="text-center text-lg font-normal leading-8 text-gray-600 pb-20">
            Check out our Social Media Pages
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {socialImgs.map((socialImg) => (
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
  