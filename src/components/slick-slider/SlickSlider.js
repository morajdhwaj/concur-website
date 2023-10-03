import React from 'react';
import './_slick-slider.scss';
import Marquee from 'react-fast-marquee';
const SlickSlider = () => {
  return (
    <div className='slick-slider'>
      <Marquee class='marquee-container'>
        <div className='slick-slider-marquee-div'>
          <img
            src='/image/amazon-1.png'
            alt='hp'
            className='slick-slider-marquee-div-img'
          />
        </div>
        <div className='slick-slider-marquee-div'>
          <img
            src='/image/amazon-1.png'
            alt='hp'
            className='slick-slider-marquee-div-img'
          />
        </div>
        <div className='slick-slider-marquee-div'>
          <img
            src='/image/amazon-1.png'
            alt='hp'
            className='slick-slider-marquee-div-img'
          />
        </div>
        <div className='slick-slider-marquee-div'>
          <img
            src='/image/amazon-1.png'
            alt='hp'
            className='slick-slider-marquee-div-img'
          />
        </div>
        <div className='slick-slider-marquee-div'>
          <img
            src='/image/amazon-1.png'
            alt='hp'
            className='slick-slider-marquee-div-img'
          />
        </div>
        <div className='slick-slider-marquee-div'>
          <img
            src='/image/amazon-1.png'
            alt='hp'
            className='slick-slider-marquee-div-img'
          />
        </div>
      </Marquee>
    </div>
  );
};

export default SlickSlider;
