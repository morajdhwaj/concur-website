import React from 'react';
import './_industries-featured.scss';
import { Button } from '@carbon/react';

const IndustriesFeatured = () => {
  return (
    <div className='industries-featured'>
      <h2 className='industries-featured-h'>
        Featured Industry Client Stories
      </h2>
      <div className='industries-featured-div'>
        <div className='industries-featured-card'>
          <img
            src='https://1.cms.s81c.com/sites/default/files/2021-07/SB_img1.jpg'
            alt='card'
            className='industries-featured-card-img'
          />
          <p className='industries-featured-card-p'>
            Sund & Baelt - Building bridges to better insight
          </p>
          <Button kind='secondary' className='industries-featured-card-button'>
            Featured Story
          </Button>
        </div>
        <div className='industries-featured-card'>
          <img
            src='https://1.cms.s81c.com/sites/default/files/2021-07/HP_img1_1600w.jpg'
            alt='card'
            className='industries-featured-card-img'
          />
          <p className='industries-featured-card-p'>
            Sund & Baelt - Building bridges to better insight
          </p>
          <Button kind='secondary' className='industries-featured-card-button'>
            Featured Story
          </Button>
        </div>
        <div className='industries-featured-card'>
          <img
            src='https://1.cms.s81c.com/sites/default/files/2021-07/BIC_img1.JPG'
            alt='card'
            className='industries-featured-card-img'
          />
          <p className='industries-featured-card-p'>
            Sund & Baelt - Building bridges to better insight
          </p>
          <Button kind='secondary' className='industries-featured-card-button'>
            Featured Story
          </Button>
        </div>
        <div className='industries-featured-card'>
          <img
            src='https://1.cms.s81c.com/sites/default/files/2021-07/SB_img1.jpg'
            alt='card'
            className='industries-featured-card-img'
          />
          <p className='industries-featured-card-p'>
            Sund & Baelt - Building bridges to better insight
          </p>
          <Button kind='secondary' className='industries-featured-card-button'>
            Featured Story
          </Button>
        </div>
        <div className='industries-featured-card'>
          <img
            src='https://1.cms.s81c.com/sites/default/files/2021-07/SB_img1.jpg'
            alt='card'
            className='industries-featured-card-img'
          />
          <p className='industries-featured-card-p'>
            Sund & Baelt - Building bridges to better insight
          </p>
          <Button kind='secondary' className='industries-featured-card-button'>
            Featured Story
          </Button>
        </div>
        <div className='industries-featured-card'>
          <img
            src='https://1.cms.s81c.com/sites/default/files/2021-07/SB_img1.jpg'
            alt='card'
            className='industries-featured-card-img'
          />
          <p className='industries-featured-card-p'>
            Sund & Baelt - Building bridges to better insight
          </p>
          <Button kind='secondary' className='industries-featured-card-button'>
            Featured Story
          </Button>
        </div>
      </div>
      <div className='blank-div'></div>
    </div>
  );
};

export default IndustriesFeatured;
