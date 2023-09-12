import React from 'react';
import './_services.scss';
import Announce from '../../components/announce/Announce';
import Subscribe from '../../components/subscribe';

const Services = () => {
  return (
    <div className='services'>
      <Announce />
      <Subscribe />
    </div>
  );
};

export default Services;
