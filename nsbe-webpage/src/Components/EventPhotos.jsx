import React from 'react'
import images from '../assets/EventPhotos/event_photos.js'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function EventPhotos() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
    
      return (
        <>
          <div className='relative flex w-full items-center py-[7vh]'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
              <div
                id='slider'
                className='overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
              >
                {images.map((item) => (
                  <img
                    className='h-[18rem] w-[30rem] md:h-[18rem] max-md:w-[32rem] max-sm:h-[30vh] max-sm:w-[75vw] object-cover darkbg inline-block m-6 cursor-pointer'
                    src={item}
                    alt='/'
                  />
                ))}
              </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
          </div>
        </>
      );
}