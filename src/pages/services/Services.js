import React from 'react';
import './_services.scss';
import Announce from '../../components/announce/Announce';
import Subscribe from '../../components/subscribe';
import ServiceScroll1 from '../../components/service-scroll-1/ServiceScroll1';
import ServiceScroll2 from '../../components/service-scroll-2/ServiceScroll2';
import ServiceScroll3 from '../../components/service-scroll-3/ServiceScroll3';
import PartnerShip from '../../components/partner-ship';
import Subscribe2 from '../../components/subscribe-2/Subscribe2';
import Industries from '../../components/industries';
import Studies from '../../components/studies/Studies';
import TabComponent from '../../components/tabs-component/TabComponent';
import Disclaimer from '../../components/disclaimer/Disclaimer';

const Services = () => {
  return (
    <div className='services'>
      <Announce />
      <Subscribe />
      <ServiceScroll1 />
      <ServiceScroll2 />
      <ServiceScroll3 />
      <PartnerShip />
      <Subscribe2 />
      <Industries />
      <Studies />
      <TabComponent />
      <Disclaimer />
    </div>
  );
};

export default Services;
