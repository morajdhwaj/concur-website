import React from 'react';
import './_service-scroll-2.scss';

const ServiceScroll2 = () => {
  return (
    <div className='service-scroll-2'>
      <div className='service-scroll-2-div1'>Scroll 2</div>
      <div className='service-scroll-2-div2'>
        <div className='service-scroll-2-div2-div1'>
          <h2>
            IBM announces plans to acquire the Adobe Workfront consulting unit
            and assets from Rego Consulting Corporation to further its hybrid
            cloud and AI strategy.
          </h2>
        </div>
        <div className='service-scroll-2-div2-div2'>
          <a className='service-scroll-2-div2-div2-a' href='/'>
            Learn more <i class='bx bx-right-arrow-alt bx-sm'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceScroll2;
