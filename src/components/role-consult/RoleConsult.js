import React from 'react';
import './_role-consult.scss';
import { Link } from 'react-router-dom';
import { Tile } from '@carbon/react';

const RoleConsult = () => {
  return (
    <div className='role-consult'>
      <div className='role-consult-div1'>
        <h5>Roles</h5>
      </div>

      <div className='role-consult-div2'>
        <div className='role-consult-div2-heading '>
          <h1>Roles in Consulting</h1>
          <p className='role-consult-div2-p'>
            Explore a few of our key job categories.
          </p>
        </div>
        <div className='role-consult-tile-div'>
          <Tile className='role-consult-tile'>
            <h3 className='role-consult-tile-heading'>
              Business Transformation
            </h3>

            <div className='role-consult-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>

            <Link href='https://www.carbondesignsystem.com'>See all jobs</Link>
          </Tile>
          <Tile className='role-consult-tile'>
            <h3 className='role-consult-tile-heading'>
              Business Transformation
            </h3>

            <div className='role-consult-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>

            <Link href='https://www.carbondesignsystem.com'>See all jobs</Link>
          </Tile>
          <Tile className='role-consult-tile'>
            <h3 className='role-consult-tile-heading'>
              Business Transformation
            </h3>

            <div className='role-consult-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>

            <Link href='https://www.carbondesignsystem.com'>See all jobs</Link>
          </Tile>
          <Tile className='role-consult-tile'>
            <h3 className='role-consult-tile-heading'>
              Business Transformation
            </h3>

            <div className='role-consult-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>

            <Link href='https://www.carbondesignsystem.com'>See all jobs</Link>
          </Tile>
          <Tile className='role-consult-tile'>
            <h3 className='role-consult-tile-heading'>
              Business Transformation
            </h3>

            <div className='role-consult-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>

            <Link href='https://www.carbondesignsystem.com'>See all jobs</Link>
          </Tile>
          <Tile className='role-consult-tile'>
            <h3 className='role-consult-tile-heading'>
              Business Transformation
            </h3>

            <div className='role-consult-tile-address'>
              <p>
                Identify goals and develop compelling proposals and business
                cases to achieve desired outcomes.
              </p>
            </div>

            <Link href='https://www.carbondesignsystem.com'>See all jobs</Link>
          </Tile>
        </div>
      </div>
    </div>
  );
};

export default RoleConsult;
