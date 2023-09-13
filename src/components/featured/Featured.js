import React from 'react';
import './_featured.scss';
import { Link } from 'react-router-dom';
import { Tile } from '@carbon/react';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featured-div1'>
        <h5>Featured</h5>
      </div>

      <div className='featured-div2'>
        <div className='featured-div2-heading '>
          <h2>Featured Products</h2>
        </div>
        <div className='featured-tile-div'>
          <Tile className='featured-tile'>
            <h3 className='featured-tile-heading'>IBM cloud park for data</h3>

            <div className='featured-tile-details'>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
              </p>
            </div>

            <Link
              href='https://www.carbondesignsystem.com'
              className='featured-tile-arrow'
            >
              <i class='bx bx-right-arrow-alt bx-md'></i>
            </Link>
          </Tile>
          <Tile className='featured-tile'>
            <h3 className='featured-tile-heading'>IBM cloud park for data</h3>

            <div className='featured-tile-details'>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
              </p>
            </div>

            <Link
              href='https://www.carbondesignsystem.com'
              className='featured-tile-arrow'
            >
              <i class='bx bx-right-arrow-alt bx-md'></i>
            </Link>
          </Tile>
          <Tile className='featured-tile'>
            <h3 className='featured-tile-heading'>IBM cloud park for data</h3>

            <div className='featured-tile-details'>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
              </p>
            </div>

            <Link
              href='https://www.carbondesignsystem.com'
              className='featured-tile-arrow'
            >
              <i class='bx bx-right-arrow-alt bx-md'></i>
            </Link>
          </Tile>
          <Tile className='featured-tile'>
            <h3 className='featured-tile-heading'>IBM cloud park for data</h3>

            <div className='featured-tile-details'>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
              </p>
            </div>

            <Link
              href='https://www.carbondesignsystem.com'
              className='featured-tile-arrow'
            >
              <i class='bx bx-right-arrow-alt bx-md'></i>
            </Link>
          </Tile>
          <Tile className='featured-tile'>
            <h3 className='featured-tile-heading'>IBM cloud park for data</h3>

            <div className='featured-tile-details'>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
              </p>
            </div>

            <Link
              href='https://www.carbondesignsystem.com'
              className='featured-tile-arrow'
            >
              <i class='bx bx-right-arrow-alt bx-md'></i>
            </Link>
          </Tile>
          <Tile className='featured-tile'>
            <h3 className='featured-tile-heading'>IBM cloud park for data</h3>

            <div className='featured-tile-details'>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
              </p>
            </div>

            <Link
              href='https://www.carbondesignsystem.com'
              className='featured-tile-arrow'
            >
              <i class='bx bx-right-arrow-alt bx-md'></i>
            </Link>
          </Tile>
        </div>
      </div>
    </div>
  );
};

export default Featured;
