import React from 'react';
import './_subscribe-2.scss';
import { Button, Tile } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const Subscribe2 = () => {
  return (
    <div className='subscribe-2'>
      <div className='subscribe-2-div1'>
        <h5>Subscribe 2</h5>
      </div>

      <div className='subscribe-2-div2'>
        <div className='subscribe-2-div2-heading '>
          <h1 className='subscribe-2-div2-h'>
            Subscribe to our monthly newsletters
          </h1>
          <p className='subscribe-2-div2-p'>
            Receive our newsletters that deliver thoughtful insights on emerging
            trends.
          </p>
        </div>
        <div className='subscribe-2-div2-button'>
          <Button renderIcon={ArrowRight}>Subscribe now</Button>

          <Button renderIcon={ArrowRight} kind='tertiary'>
            know more
          </Button>
        </div>
        <div className='subscribe-2-tile-div'>
          <Tile className='subscribe-2-tile'>
            <h3 className='subscribe-2-tile-heading'>
              Business Transformation
            </h3>

            <div className='subscribe-2-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>

            <a href='/job-details' className='subscribe-2-tile-a'>
              Email us <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </Tile>
          <Tile className='subscribe-2-tile'>
            <h3 className='subscribe-2-tile-heading'>
              Business Transformation
            </h3>

            <div className='subscribe-2-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>

            <a href='/job-details' className='subscribe-2-tile-a'>
              Register now <i class='bx bx-right-arrow-alt bx-sm'></i>{' '}
            </a>
          </Tile>
          <Tile className='subscribe-2-tile'>
            <h3 className='subscribe-2-tile-heading'>
              Business Transformation
            </h3>

            <div className='subscribe-2-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>

            <a href='/job-details' className='subscribe-2-tile-a'>
              See all jobs <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </Tile>
        </div>
      </div>
    </div>
  );
};

export default Subscribe2;
