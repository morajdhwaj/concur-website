import React from 'react';
import './_partner-ship.scss';
import { Tile } from '@carbon/react';

const PartnerShip = () => {
  return (
    <div className='partnership'>
      <div className='partnership-div1'>
        <h5>Partnership</h5>
      </div>

      <div className='partnership-div2'>
        <div className='partnership-div2-heading '>
          <h1 className='partnership-div2-h'>Strategic partnerships</h1>
        </div>
        <div className='partnership-tile-div'>
          <Tile className='partnership-tile'>
            <img
              src='https://ih1.redbubble.net/image.4713585318.4961/st,small,507x507-pad,600x600,f8f8f8.jpg'
              alt='logo'
              className='partnership-tile-img'
            />

            <h3 className='partnership-tile-heading'>
              Efficient SAP migration
            </h3>

            <div className='partnership-tile-p'>
              <p>
                We provide custom SAP S/4HANA roadmaps that lower costs,
                increase agility and improve results.
              </p>
            </div>

            <br />
            <a href='/job-details' className='partnership-tile-a'>
              Explore our SAP services
              <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </Tile>
          <Tile className='partnership-tile'>
            <img
              src='https://ih1.redbubble.net/image.4713585318.4961/st,small,507x507-pad,600x600,f8f8f8.jpg'
              alt='logo'
              className='partnership-tile-img'
            />
            <h3 className='partnership-tile-heading'>AWS Cloud services</h3>

            <div className='partnership-tile-address'>
              <p>
                We can help speed your design, migration and operation on AWS
                Cloud regardless of your industry segment.
              </p>
            </div>
            <br />
            <a href='/job-details' className='partnership-tile-a'>
              Explore our SAP services{' '}
              <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </Tile>
          <Tile className='partnership-tile'>
            <img
              src='https://ih1.redbubble.net/image.4713585318.4961/st,small,507x507-pad,600x600,f8f8f8.jpg'
              alt='logo'
              className='partnership-tile-img'
            />
            <h3 className='partnership-tile-heading'>
              Business Transformation
            </h3>

            <div className='partnership-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>
            <br />
            <a href='/job-details' className='partnership-tile-a'>
              Explore our SAP services{' '}
              <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </Tile>
          <Tile className='partnership-tile'>
            <img
              src='https://ih1.redbubble.net/image.4713585318.4961/st,small,507x507-pad,600x600,f8f8f8.jpg'
              alt='logo'
              className='partnership-tile-img'
            />

            <h3 className='partnership-tile-heading'>
              Efficient SAP migration
            </h3>

            <div className='partnership-tile-p'>
              <p>
                We provide custom SAP S/4HANA roadmaps that lower costs,
                increase agility and improve results.
              </p>
            </div>

            <br />
            <a href='/job-details' className='partnership-tile-a'>
              Explore our SAP services
              <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </Tile>
          <Tile className='partnership-tile'>
            <img
              src='https://ih1.redbubble.net/image.4713585318.4961/st,small,507x507-pad,600x600,f8f8f8.jpg'
              alt='logo'
              className='partnership-tile-img'
            />
            <h3 className='partnership-tile-heading'>AWS Cloud services</h3>

            <div className='partnership-tile-address'>
              <p>
                We can help speed your design, migration and operation on AWS
                Cloud regardless of your industry segment.
              </p>
            </div>
            <br />
            <a href='/job-details' className='partnership-tile-a'>
              Explore our SAP services{' '}
              <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </Tile>
          <Tile className='partnership-tile'>
            <img
              src='https://ih1.redbubble.net/image.4713585318.4961/st,small,507x507-pad,600x600,f8f8f8.jpg'
              alt='logo'
              className='partnership-tile-img'
            />
            <h3 className='partnership-tile-heading'>
              Business Transformation
            </h3>

            <div className='partnership-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>
            <br />
            <a href='/job-details' className='partnership-tile-a'>
              Explore our SAP services{' '}
              <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </Tile>
        </div>
      </div>
    </div>
  );
};

export default PartnerShip;
