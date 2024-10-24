import React from 'react'
import images from '../assets/EventPhotos/event_photos.js'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ImageSwapper from './ImageSwapper.jsx';

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
          <div className='relative flex items-center purple-bg pb-5'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
            <div
              id='slider'
              className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
            >
              {images.map((item) => (
                <img
                  className='carousel-img w-[650px] h-[400px] darkbg object-cover inline-block m-4 cursor-pointer'
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