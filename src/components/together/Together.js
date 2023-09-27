import React from 'react';
import './_together.scss';
import { ClickableTile } from '@carbon/react';

const Together = () => {
  return (
    <div className='together'>
      <div className='together-div1'>
        <h5>Together</h5>
      </div>

      <div className='together-div2'>
        <div className='together-div2-div1'>
          <h1 className='together-div2-div1-h1'>We’re in this together</h1>
          <p>
            IBM Partner Plus offers true partnership, built on mutual success,
            and the belief that we can make greater progress together.
          </p>
          <p>
            Let’s build a relationship that grows with your business.
            Collaborating with IBM gives you access to all the technology and
            resources from our teams, along with incentives and support to start
            innovating from day one.
          </p>
          <img src='https://picsum.photos/520/300?grayscale' alt='' />
        </div>
        <div className='together-div2-div2'>
          <ClickableTile id='/' href='/' className='together-div2-div2-tile'>
            <p>
              <a href='/' alt='/'>
                Contact us to explore
              </a>
            </p>
            <a href='/' alt='/'>
              {' '}
              <i class='bx bx-right-arrow-alt bx-sm ' />
            </a>
          </ClickableTile>
          <ClickableTile id='/' href='/' className='together-div2-div2-tile'>
            <p>
              <a href='/' alt='/'>
                Contact us to explore
              </a>
            </p>
            <a href='/' alt='/'>
              {' '}
              <i class='bx bx-right-arrow-alt bx-sm ' />
            </a>
          </ClickableTile>
        </div>
      </div>
    </div>
  );
};

export default Together;
