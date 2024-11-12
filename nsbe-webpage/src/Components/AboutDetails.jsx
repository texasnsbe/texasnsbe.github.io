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
          <div className="flex flex-col justify-center">
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
          </div>
          <img
            src={image[0].src}
            alt={image[0].name}
            className=" darkbg object-cover transition-all hover:scale-110 duration-300 ease-out"
          />
        </div>
      </div>
    </>
  );
}
