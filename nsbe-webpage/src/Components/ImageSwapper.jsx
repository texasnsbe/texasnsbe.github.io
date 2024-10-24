import photos from '../assets/EventPhotos/event_photos.js'

import React, { useState, useEffect } from 'react';

const ImageSwapper = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [photos.length]);

  return (
    <div className="relative mt-16 h-80 lg:mt-8">
      <img
        src={photos[currentIndex]}
        alt={`Slide ${currentIndex}`}
        // width={1824}
        // height={1080}
        className=" absolute left-0 top-0 w-[30rem] h-[33rem] object-cover max-w-none rounded-xl border-4 border-black"
      />
    </div>
  );
};

export default ImageSwapper;
