import React from 'react';
import './_lead-space2.scss';
import { Button } from '@carbon/react';
import { ArrowRight, ImageReference } from '@carbon/icons-react';

const LeadSpace2 = () => {
  return (
    <div className='lead-space2'>
      <div>
        <h2 className='lead-space2-h'>Take the next step</h2>

        <p className='lead-space2-p'>
          Start delivering proactive, continuous application performance now.
        </p>
        <div className='lead-space2-div'>
          <Button renderIcon={ArrowRight} size='xl'>
            Request your IMB Turbonomic <br />
            demo
          </Button>

          <Button renderIcon={ImageReference} size='xl' kind='tertiary'>
            Get started with Instana today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeadSpace2;
