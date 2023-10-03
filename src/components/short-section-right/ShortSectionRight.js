import React from 'react';
import './_short-section-right.scss';

const ShortSectionRight = () => {
  return (
    <div className='short-section-right'>
      <div className='short-section-right-div1'>
        <img
          src='https://www.datocms-assets.com/16414/1691190504-image-6.svg'
          alt=''
          className='short-section-right-div1-img'
        />
      </div>
      <div className='short-section-right-div2'>
        <h5 className='short-section-right-div2-title'>
          AUTOMATE DATA DISCOVERY
        </h5>
        <h2 className='short-section-right-div2-h'>No more flying blind</h2>
        <p className='short-section-right-div2-p'>
          Finally gain a transparent view of your company’s personal data.
          Transcend scans your website and plugs into your tech stack to quickly
          discover your data silos, auto-populates them into your live Data
          Inventory, and uses smart content classification to categorize
          personal data points.
        </p>
      </div>
    </div>
  );
};

export default ShortSectionRight;
