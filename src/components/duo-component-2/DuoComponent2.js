import React from 'react';
import './_duo-component-2.scss';

const DuoComponent2 = () => {
  const divStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div style={divStyle} className='duo-component-2'>
      <div className='duo-component-2-div'>
        <div className='duo-component-2-div1'>
          <h2 className='duo-component-2-div1-h2'>Case Studies</h2>
          <p className='duo-component-2-div1-p'>
            Showcasing IBM Client Stories
          </p>
        </div>
      </div>
    </div>
  );
};

export default DuoComponent2;
