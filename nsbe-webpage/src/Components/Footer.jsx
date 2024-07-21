import React from 'react';
import '../CSS/Footer.css';

const classDef = "col-span-2 max-h-12 w-full object-contain lg:col-span-1"
const socialImgs = [
    {
        name: "LinkedIn",
        img: "https://i.imgur.com/MCA42gN.png",
        link: "https://www.linkedin.com/company/utnsbe/",
    },
    {
        img: "https://i.imgur.com/rIbUWeH.png",
        link: "https://www.instagram.com/ut_nsbe/",
        name: "Instagram",
    },
    {
        img: "https://i.imgur.com/uhRUrsD.png",
        link: "https://join.slack.com/t/nsbemembers/shared_invite/zt-2mmymfxhx-C2aNZUQxHrCfa2I4M1Lzdg",
        name: "Slack",
    },
    {
        img: "https://i.imgur.com/LvA8vFF.png",
        link: "https://www.instagram.com/nsbe.official/",
        name: "X",
    },
    {
        img: "https://i.imgur.com/F7O5Op8.png",
        link: "https://www.instagram.com/nsbe.official/",
        name: "Facebook",
    },
]

export default function Footer() {
  return (
    <div className="purple-bg footer">
      <div className="footer-content">
        <h1 className='text-6xl font-semibold mb-10'>Get in Touch</h1>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {socialImgs.map((socialImg) => (
            <a href={socialImg.link}>
                <img
                alt={socialImg.name}
                src={socialImg.img}
                className={classDef}
                />
            </a>
          ))}
          </div>
        <p className='mt-20'>© 2024-2025 University of Texas NSBE. All rights reserved.</p>
      </div>
    </div>
  );
}

