import React from 'react';
import './_duo-component.scss';
import { Button } from '@carbon/react';

const DuoComponent = ({ heading, detail, button }) => {
  const divStyle = {
    backgroundImage: "url('https://i.stack.imgur.com/3hGEz.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div style={divStyle} className='duo-component'>
      <div className='duo-component-div'>
        <div className='duo-div1'>
          <h2 className='duo-div1-h2'>{heading}</h2>
          <p className='duo-div1-p'>{detail}</p>
          <div className='duo-div1-div'>
            <Button className='duo-div1-button'>
              <h5 className='duo-div1-button-h5'>{button}</h5>
              <i class='bx bx-right-arrow-alt duo-div1-button-i'></i>
            </Button>
            <Button className='duo-div1-button2'>
              <h5 className='duo-div1-button-h5'>Register Today</h5>
              <i class='bx bx-right-arrow-alt duo-div1-button-i'></i>
            </Button>
          </div>
        </div>
        <div className='duo-div2'>div2</div>
      </div>
    </div>
  );
};

export default DuoComponent;
