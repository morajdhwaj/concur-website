import React from 'react';
import './_studies.scss';
import { ClickableTile } from '@carbon/react';

const Studies = () => {
  return (
    <div className='studies'>
      <div className='studies-div1'>
        <h5>Case Studies</h5>
      </div>

      <div className='studies-div2'>
        <div className='studies-div2-heading '>
          <h1 className='studies-div2-heading-h '>
            IBM solutions are transforming industries
          </h1>
          <p className='studies-div2-p'>
            IBM solutions are transforming industries Discover the extraordinary
            impact of IBM’s innovative technologies on diverse industries. Our
            deep industry knowledge, customized services, and industry-specific
            solutions are helping clients to transform their businesses around
            the world.
          </p>
        </div>
        <div className='studies-tile-div'>
          <ClickableTile
            href='https://www.carbondesignsystem.com/'
            className='studies-tile'
          >
            <img
              src='https://picsum.photos/200/300'
              alt='dummy'
              className='studies-tile-img '
            />
            <h4 className='studies-tile-heading'>Telefonica</h4>
            <p className='studies-tile-p'>
              IBM solutions are transforming industries Discover the
              extraordinary impact of IBM’s innovative technologies on diverse
              industries. Our deep industry knowledge,
            </p>
            <p className='studies-tile-button'>
              <i class='bx bx-right-arrow-alt bx-md' />
            </p>
          </ClickableTile>

          <ClickableTile
            href='https://www.carbondesignsystem.com/'
            className='studies-tile'
          >
            <img
              src='https://picsum.photos/200/300'
              alt='dummy'
              className='studies-tile-img '
            />
            <h4 className='studies-tile-heading'>Telefonica</h4>
            <p className='studies-tile-p'>
              IBM solutions are transforming industries Discover the
              extraordinary impact of IBM’s innovative technologies on diverse
              industries. Our deep industry knowledge,
            </p>
            <p className='studies-tile-button'>
              <i class='bx bx-right-arrow-alt bx-md' />
            </p>
          </ClickableTile>

          <ClickableTile
            href='https://www.carbondesignsystem.com/'
            className='studies-tile'
          >
            <img
              src='https://picsum.photos/200/300'
              alt='dummy'
              className='studies-tile-img '
            />
            <h4 className='studies-tile-heading'>Telefonica</h4>
            <p className='studies-tile-p'>
              IBM solutions are transforming industries Discover the
              extraordinary impact of IBM’s innovative technologies on diverse
              industries. Our deep industry knowledge,
            </p>
            <p className='studies-tile-button'>
              <i class='bx bx-right-arrow-alt bx-md' />
            </p>
          </ClickableTile>
        </div>
      </div>
    </div>
  );
};

export default Studies;
