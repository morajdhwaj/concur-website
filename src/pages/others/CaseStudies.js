import React from 'react';
import './_others-page.scss';
import DuoComponent2 from '../../components/duo-component-2';
import IndustriesFeatured from '../../components/industries-featured/IndustriesFeatured';
import Criteria from '../../components/criteria';

const CaseStudies = () => {
  return (
    <div className='others-page'>
      <DuoComponent2 />
      <IndustriesFeatured />
      <Criteria />
    </div>
  );
};

export default CaseStudies;
