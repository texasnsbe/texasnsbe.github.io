import React from 'react';
import socials from '../assets/Socials/socials_grayscale.js';
import '../CSS/Footer.css';

const classDef = "col-span-2 max-h-12 w-full object-contain lg:col-span-1 transition-all hover:scale-125 duration-300 ease-out"

export default function Footer() {
  return (
    <div className="purple-bg footer">
      <div className="footer-content">
        <h1 className='text-6xl font-semibold mb-10'>Get in Touch</h1>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
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
        <p className='mt-20'>© 2024-2025 University of Texas NSBE. All rights reserved.</p>
      </div>
    </div>
  );
}

