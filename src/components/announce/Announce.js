import React from 'react';
import './_announce.scss';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const Announce = () => {
  return (
    <div className='announce'>
      <div className='announce-div1'>
        <div className='announce-div1-div1'>
          <h3>
            IBM announces plans to acquire the Adobe Workfront consulting unit
            and assets from . Consulting Corporation to further its hybrid cloud
            and AI strategy.
          </h3>
        </div>
        <div className='announce-div1-div2'>
          <Button
            size='lg'
            className='announce-div1-button'
            renderIcon={ArrowRight}
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className='announce-div2'>
        <div className='announce-div2-div1'>
          <div className='announce-div2-div1-div1'>
            <h4 className='announce-h4'>
              {' '}
              Helping businesses accelerate their journey to cloud
            </h4>
          </div>
          <div className='announce-div2-div1-div2'>
            <p className='announce-p'>
              Change isn’t constrained to business or industry. It’s happening
              throughout the world, every moment of every day. For enterprise
              leaders, the complexity of decision making has never been greater.
              To compete and win requires a trusted partner with the experience
              and skills to bring opportunity into focus and operationalize
              positive change quickly — a partner who can enable confident
              decisioning that keeps you ahead of the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announce;
