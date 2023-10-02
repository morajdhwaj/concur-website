import React from 'react';
import './_join-network.scss';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const JoinNetwork = () => {
  return (
    <div className='join-network'>
      <h2 className='join-network-heading'>Join our talent network</h2>
      <p className='join-network-p'>
        Stay up-to-date on career opportunities in Consulting that match your
        skills and interests.
      </p>
      <Button className='join-network-button' renderIcon={ArrowRight} size='lg'>
        Register
      </Button>
    </div>
  );
};

export default JoinNetwork;
