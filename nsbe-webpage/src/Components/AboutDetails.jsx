import React from "react";
import { Link } from "react-router-dom";
import topvphotos from "../assets/Officers/New_Officer_Photos/TopV.jpg";

const image = [
  {
    id: 1,
    name: "TOP V Photo",
    src: topvphotos,
  },
];
export default function AboutDetails() {
  return (
    <>
      <div className="mx-[12.5vw]">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-y-16 lg:gap-x-16">
          <img
            src={image[0].src}
            alt={image[0].name}
            className=" darkbg object-cover transition-all hover:scale-110 duration-300 ease-out"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-center text-3xl font-normal leading-8 mt-1 tracking-wider text-black mx-auto pt-5 ">
              What Are We
            </h2>
            <h1 className="text-center herostyle tracking-tight transition-all hover:scale-105 duration-300 ease-out">
              ABOUT
            </h1>
            <p className="text-black text-lg border-l-8 rounded-2xl darkbg border-orange-700 p-5 bg-orange-50 tracking-wide font-medium">
              <span className="text-xl inline-block rounded-md pl-2 pr-1 startl">
                O
              </span>
              ur mission is to increase the number of culturally responsible
              Black engineers excelling academically, succeeding professionally,
              and positively impacting the community. We offer resources for
              academic excellence, professional development, etc..
            </p>
            {/* <Link href="https://www.instagram.com/nsbe.official/" class="ml-3 mt-10 block w-fit rounded-md px-16 py-3 text-center text-sm font-semibold text-white startm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 buttondarkbg transition-all hover:scale-105 duration-300 ease-out">Fund NSBE</Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
