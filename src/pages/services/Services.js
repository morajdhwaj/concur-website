import React from 'react';
import './_services.scss';
import Announce from '../../components/announce/Announce';
import Subscribe from '../../components/subscribe';
import ServiceScroll1 from '../../components/service-scroll-1/ServiceScroll1';
import ServiceScroll2 from '../../components/service-scroll-2/ServiceScroll2';
import ServiceScroll3 from '../../components/service-scroll-3/ServiceScroll3';

const Services = () => {
  return (
    <div className='services'>
      <Announce />
      <Subscribe />
      <ServiceScroll1 />
      <ServiceScroll2 />
      <ServiceScroll3 />
    </div>
  );
};

export default Services;
