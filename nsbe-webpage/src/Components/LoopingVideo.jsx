import React from "react";
import video from "../assets/EventPhotos/NSBEEE.mp4"; // Adjust the path to your video file
import image from "../assets/EventPhotos/EventImages/nsbe_jumbo_yellow.png"; // Add the path to your fallback image
import { useMediaQuery } from "react-responsive";

const LoopingVideo = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 }); // Define the breakpoint for mobile

  return (
    <div>
      {isMobile ? (
        <img
          src={image}
          alt="Event"
          className="h-[75vh] w-[80vw] max-lg:h-[60vh] max-md:h-[50vh] max-sm:h-[35vh] max-sm:w-[90vw] object-cover rounded-xl darkbg"
        />
      ) : (
        <video
          preload="auto"
          autoPlay
          muted
          loop
          className="h-[75vh] w-[80vw] max-lg:h-[60vh] max-md:h-[50vh] max-sm:h-[35vh] max-sm:w-[90vw] object-cover rounded-xl darkbg"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default LoopingVideo;


