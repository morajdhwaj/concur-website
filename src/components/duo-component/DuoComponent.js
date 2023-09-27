import React from 'react';
import './_duo-component.scss';
import { Button, TextInput } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const DuoComponent = ({
  heading,
  detail,
  button,
  button2,
  bgImage,
  image,
  paragraph,
  labelText,
}) => {
  const divStyle = {
    backgroundImage: bgImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={divStyle} className='duo-component'>
      <div className='duo-component-div'>
        <div className='duo-div1'>
          <h2 className='duo-div1-h2'>{heading}</h2>
          {paragraph !== undefined && (
            <p className='duo-div1-detail'>{paragraph}</p>
          )}
          {detail !== undefined && <p className='duo-div1-p'>{detail}</p>}
          {labelText !== undefined && (
            <div className='duo-div1-div-search'>
              <TextInput
                type='text'
                labelText={labelText}
                placeholder='What are you looking for today'
              />
              <div className='duo-div1-div-search-button'>
                <Button renderIcon={ArrowRight} size='md'>
                  search
                </Button>
              </div>
            </div>
          )}
          <div className='duo-div1-div'>
            {button !== undefined && (
              <Button renderIcon={ArrowRight} size='md'>
                {button}
              </Button>
            )}

            {button2 !== undefined && (
              <Button renderIcon={ArrowRight} size='md' kind='tertiary'>
                {button2}
              </Button>
            )}
          </div>
        </div>
        <div className='duo-div2'>
          {image !== undefined && (
            <img src={image} alt='Laptop' className='duo-div2-img' />
          )}
        </div>
      </div>
    </div>
  );
};

export default DuoComponent;
