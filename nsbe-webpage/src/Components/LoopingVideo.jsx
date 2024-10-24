import React from 'react';
import video from '../assets/EventPhotos/NSBEEE.mp4'; // Adjust the path to your video file

const LoopingVideo = () => {
  return (
    <div>
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute mt-8 w-[30rem] h-[33rem] object-cover max-w-none rounded-xl border-4 border-black max-lg:hidden" // Hide video at 1024px and above
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoopingVideo;
