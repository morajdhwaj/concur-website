import React from 'react';
import './_inside-comp.scss';

const InsideComp = () => {
  return (
    <div className='inside'>
      <div className='inside-div1'>
        <h1 className='inside-div1-h'>Inside IBM</h1>
      </div>
      <div className='inside-div2'>
        <p className='inside-div2-p'>
          Solving the world’s problems through technology wouldn’t be possible
          without our most important invention: the IBMer. Have a look at our
          talented teams.
        </p>

        <a href='/#' className='inside-div2-a'>
          <p className='inside-div2-a-p'> About IBM</p>
          <i class='bx bx-right-arrow-alt bx-sm'></i>
        </a>
      </div>
    </div>
  );
};

export default InsideComp;
