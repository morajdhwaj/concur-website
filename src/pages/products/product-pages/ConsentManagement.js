import React from 'react';
import LeadSpace from '../../../components/lead-space/LeadSpace';
import DuoComponent from '../../../components/duo-component';
import Resoureses from '../../../components/resoureses/Resoureses';

const ConsentManagement = () => {
  return (
    <div>
      <LeadSpace />

      <Resoureses />
      <DuoComponent
        heading={'Discover the possibilities of AI with watsonx'}
        detail={
          ' IBM’s built-for-business AI and data platform is now available for free trial'
        }
        button={'Take a tour'}
        bgImage={
          "url('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1600 ')"
        }
      />
    </div>
  );
};

export default ConsentManagement;
