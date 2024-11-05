import React from 'react';
import socials from '../assets/SocialMedia/socials_grayscale.js';
import '../CSS/Footer.css';

const classDef = "col-span-2 max-h-12 w-full object-contain lg:col-span-1 transition-all hover:scale-125 duration-300 ease-out"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h1 className='text-4xl font-semibold'>Get in Touch</h1>
        <div className="flex justify-center mx-auto mt-[5vh] max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          {socials.map((socialImg) => (
            <a href={socialImg.link}>
                <img
                alt={socialImg.name}
                src={socialImg.img}
                className={classDef}
                />
            </a>
          ))}
          </div>
        <p className='mt-[10vh]'>©2024-2025 Texas NSBE. All rights reserved.</p>
      </div>
    </div>
  );
}

