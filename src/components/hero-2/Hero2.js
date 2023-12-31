import React from 'react';
import './_hero2.scss';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

const Hero2 = () => {
  return (
    <div className='hero2'>
      <div className='hero2-div1'>
        <h2 className='hero2-div1-h'>AIOps Solutions</h2>

        <p className='hero2-div1-p'>
          Discover how AI for IT operations deliver the insights you need to
          help drive exceptional business performance
        </p>
        <div className='hero2-div1-div'>
          <Button renderIcon={ArrowRight} size='xl'>
            Request your IMB Turbonomic <br />
            demo
          </Button>

          <Button renderIcon={ArrowRight} size='xl' kind='tertiary'>
            SignUp for forrester's report on <br /> how to import AIOps
          </Button>
        </div>
      </div>
      <div className='hero2-div2'>
        <img
          src='https://t3.ftcdn.net/jpg/01/59/48/58/240_F_159485891_2BAJ56o5UcbA0RG5TaUw7fcclmHv0qvt.jpg'
          alt='Laptop'
          className='hero2-div2-img'
        />
      </div>
    </div>
  );
};

export default Hero2;
