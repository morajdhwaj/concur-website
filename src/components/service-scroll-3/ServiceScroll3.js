import React from 'react';
import './_service-scroll-3.scss';

const ServiceScroll3 = () => {
  return (
    <div className='service-scroll-3'>
      <div className='service-scroll-3-div1'>Scroll 2</div>
      <div className='service-scroll-3-div2'>
        <div className='service-scroll-3-div2-div1'>
          <h1 className='service-scroll-3-div2-div2-h'>
            Co-create with IBM Garage™
          </h1>
        </div>
        <div className='service-scroll-3-div2-div2'>
          <div className='service-scroll-3-div2-div2-div1'>
            <p className='service-scroll-3-div2-div2-div1-p'>
              Ideate, build, measure, iterate and scale solutions seamlessly
              with our end-to-end framework of design thinking, agile and DevOps
              practices. Achieve speed-to-value and adopt breakthrough
              technologies through the partnership created with your team and a
              diverse set of IBM experts in business, design and technology.
            </p>
            <div className='service-scroll-3-div2-div2-div1-div'>
              <a className='' href='/'>
                Learn more <i class='bx bx-right-arrow-alt bx-sm'></i>
              </a>
              <br />
              <br />
              <a className='' href='/'>
                Talk to an concur garage experts
                <i class='bx bx-right-arrow-alt bx-sm'></i>
              </a>
            </div>
          </div>
          <div className='service-scroll-3-div2-div2-div2'>
            <img
              src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=500'
              alt='cat'
              className='service-scroll-3-div2-div2-div2-img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceScroll3;
