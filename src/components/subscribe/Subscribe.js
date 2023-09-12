import React from 'react';
import './_subscribe.scss';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className='subscribe-div1'>
        <div className='subscribe-div1-div1'>
          <h3 style={{ fontWeight: 600 }}>
            Subscribe to our monthly newsletters
          </h3>
          <h3>
            Receive our newsletters that deliver thoughtful insights on emerging
            trends.
          </h3>
        </div>
        <div className='subscribe-div1-div2'>
          <Button
            size='lg'
            renderIcon={ArrowRight}
            className='subscribe-button'
          >
            Subscribe now
          </Button>
          <Button
            size='lg'
            renderIcon={ArrowRight}
            className='subscribe-button'
            kind='tertiary'
          >
            Know more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
