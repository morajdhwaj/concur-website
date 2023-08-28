import React from 'react';
import './_leadSpace.scss';
import { Button } from '@carbon/react';

const LeadSpace = () => {
  return (
    <div className='lead-space'>
      <div className='left-div'>
        <h2 className=''>Need for speed in threat detection</h2>
        <p>
          Explore AI & automation's major impact on breach identification speed
          in the 2023 Cost of a Data Breach report
        </p>
        <Button className='right-div-button'>
          <h5>Explore the findings</h5>
          <i class='bx bx-right-arrow-alt'></i>
        </Button>
      </div>
      <div className='right-div'>div2</div>
    </div>
  );
};

export default LeadSpace;
