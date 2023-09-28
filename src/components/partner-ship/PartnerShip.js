import React from 'react';
import './_partner-ship.scss';
import { Tile } from '@carbon/react';
import { IntegrationData } from '../../local-data/IntegrationData';

const PartnerShip = ({ header }) => {
  const [...integrationData] = IntegrationData;

  console.log(integrationData);

  return (
    <div className='partnership'>
      <div className='partnership-div1'>
        <h5>Partnership</h5>
      </div>

      <div className='partnership-div2'>
        <div className='partnership-div2-heading '>
          <h1 className='partnership-div2-h'>{header}</h1>
        </div>
        <div className='partnership-tile-div'>
          {integrationData.map((item) => {
            return (
              <Tile className='partnership-tile' key={item?.id}>
                <img
                  src='https://ih1.redbubble.net/image.4713585318.4961/st,small,507x507-pad,600x600,f8f8f8.jpg'
                  alt='logo'
                  className='partnership-tile-img'
                />

                <h3 className='partnership-tile-heading'>
                  {item?.integrationTitle}
                </h3>

                <div className='partnership-tile-p'>
                  <p>{item?.integrationDescription}</p>
                </div>

                <br />
                <a href={item?.integrationURL} className='partnership-tile-a'>
                  Know more
                  <i class='bx bx-right-arrow-alt bx-sm'></i>
                </a>
              </Tile>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnerShip;
