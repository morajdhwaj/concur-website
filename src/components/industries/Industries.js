import React from 'react';
import './_industries.scss';
import { ClickableTile } from '@carbon/react';

const Industries = () => {
  return (
    <div className='industries'>
      <div className='industries-div1'>
        <h5>Roles</h5>
      </div>

      <div className='industries-div2'>
        <div className='industries-div2-heading '>
          <h1 className='industries-div2-heading-h '>
            IBM solutions are transforming industries
          </h1>
          <p className='industries-div2-p'>
            IBM solutions are transforming industries Discover the extraordinary
            impact of IBM’s innovative technologies on diverse industries. Our
            deep industry knowledge, customized services, and industry-specific
            solutions are helping clients to transform their businesses around
            the world.
          </p>
        </div>
        <div className='industries-tile-div'>
          <ClickableTile
            href='https://www.carbondesignsystem.com/'
            className='industries-tile'
          >
            <h4>Clickable tile</h4>
            <a href='/'>
              <i class='bx bx-right-arrow-alt bx-sm' />
            </a>
          </ClickableTile>
          <ClickableTile
            href='https://www.carbondesignsystem.com/'
            className='industries-tile'
          >
            <h4>Clickable tile</h4>
            <a href='/'>
              <i class='bx bx-right-arrow-alt bx-sm' />
            </a>
          </ClickableTile>
          <ClickableTile
            href='https://www.carbondesignsystem.com/'
            className='industries-tile'
          >
            <h4>Clickable tile</h4>
            <a href='/'>
              <i class='bx bx-right-arrow-alt bx-sm' />
            </a>
          </ClickableTile>
          <ClickableTile
            href='https://www.carbondesignsystem.com/'
            className='industries-tile'
          >
            <h4>Clickable tile</h4>
            <a href='/'>
              <i class='bx bx-right-arrow-alt bx-sm' />
            </a>
          </ClickableTile>
          <ClickableTile
            href='https://www.carbondesignsystem.com/'
            className='industries-tile'
          >
            <h4>Clickable tile</h4>
            <a href='/'>
              <i class='bx bx-right-arrow-alt bx-sm' />
            </a>
          </ClickableTile>
          <ClickableTile
            href='https://www.carbondesignsystem.com/'
            className='industries-tile'
          >
            <h4>Clickable tile</h4>
            <a href='/'>
              <i class='bx bx-right-arrow-alt bx-sm' />
            </a>
          </ClickableTile>
        </div>
      </div>
    </div>
  );
};

export default Industries;
