import React from 'react';
import './_duo-component.scss';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const DuoComponent = ({ heading, detail, button, image }) => {
  const divStyle = {
    backgroundImage: image,
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
            <Button renderIcon={ArrowRight} size='md'>
              {button}
            </Button>

            <Button renderIcon={ArrowRight} size='md' kind='tertiary'>
              Button
            </Button>
          </div>
        </div>
        <div className='duo-div2'>div2</div>
      </div>
    </div>
  );
};

export default DuoComponent;
