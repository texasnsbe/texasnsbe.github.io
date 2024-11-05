import React from 'react';
import video from '../assets/EventPhotos/NSBEEE.mp4'; // Adjust the path to your video file

const LoopingVideo = () => {
  return (
    <div>
      <video 
        autoPlay 
        muted 
        loop 
        className="h-[75vh] w-[80vw] max-lg:h-[60vh] max-md:h-[50vh] max-sm:h-[35vh] max-sm:w-[90vw] object-cover rounded-xl darkbg" // Hide video at 1024px and above
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoopingVideo;
