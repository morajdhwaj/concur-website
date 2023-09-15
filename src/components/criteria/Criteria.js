import React from 'react';
import './_criteria.scss';
import { Button, Dropdown } from '@carbon/react';

const items = [
  {
    id: 'option-0',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'option-1',
    text: 'Option 1',
  },
  {
    id: 'option-2',
    text: 'Option 2',
  },
  {
    id: 'option-3',
    text: 'Option 3 - a disabled item',
    disabled: true,
  },
  {
    id: 'option-4',
    text: 'Option 4',
  },
  {
    id: 'option-5',
    text: 'Option 5',
  },
];

const Criteria = () => {
  return (
    <div className='criteria'>
      <div className='criteria-div1'>
        <p className='criteria-div1-p'>
          Enter search criteria and click Search:
        </p>
        <div className='criteria-div1-div1'>
          <div className='criteria-div1-div1-div1'>
            <div
              style={{
                width: 300,
              }}
            >
              <Dropdown
                nid='default'
                titleText='Dropdown label'
                initialSelectedItem={items[1]}
                label='Option 1'
                items={items}
                itemToString={(item) => (item ? item.text : '')}
              />
            </div>
            <div
              style={{
                width: 300,
              }}
            >
              <Dropdown
                nid='default'
                titleText='Dropdown label'
                initialSelectedItem={items[1]}
                label='Option 1'
                items={items}
                itemToString={(item) => (item ? item.text : '')}
              />
            </div>
          </div>
          <div className='criteria-div1-div1-div2'>
            <Button className='' kind='secondary'>
              Reset
            </Button>
            <Button className='' kind='secondary'>
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className='criteria-cart-div'>
        <div className='criteria-cart'>
          <h5 className='criteria-cart-h5'>Mater Private Network</h5>
          <p className='criteria-cart-p'>
            Mater Private Network builds a digital engagement platform to
            transform the referral experience for patients and doctors.
          </p>
          <Button className='criteria-cart-button' kind='secondary'>
            Learn More
          </Button>
        </div>
        <div className='criteria-cart'>
          <h5 className='criteria-cart-h5'>Mater Private Network</h5>
          <p className='criteria-cart-p'>
            Mater Private Network builds a digital engagement platform to
            transform the referral experience for patients and doctors.
          </p>
          <Button className='criteria-cart-button' kind='secondary'>
            Learn More
          </Button>
        </div>
        <div className='criteria-cart'>
          <h5 className='criteria-cart-h5'>Mater Private Network</h5>
          <p className='criteria-cart-p'>
            Mater Private Network builds a digital engagement platform to
            transform the referral experience for patients and doctors.
          </p>
          <Button className='criteria-cart-button' kind='secondary'>
            Learn More
          </Button>
        </div>
        <div className='criteria-cart'>
          <h5 className='criteria-cart-h5'>Mater Private Network</h5>
          <p className='criteria-cart-p'>
            Mater Private Network builds a digital engagement platform to
            transform the referral experience for patients and doctors.
          </p>
          <Button className='criteria-cart-button' kind='secondary'>
            Learn More
          </Button>
        </div>
        <div className='criteria-cart'>
          <h5 className='criteria-cart-h5'>Mater Private Network</h5>
          <p className='criteria-cart-p'>
            Mater Private Network builds a digital engagement platform to
            transform the referral experience for patients and doctors.
          </p>
          <Button className='criteria-cart-button' kind='secondary'>
            Learn More
          </Button>
        </div>
        <div className='criteria-cart'>
          <h5 className='criteria-cart-h5'>Mater Private Network</h5>
          <p className='criteria-cart-p'>
            Mater Private Network builds a digital engagement platform to
            transform the referral experience for patients and doctors.
          </p>
          <Button className='criteria-cart-button' kind='secondary'>
            Learn More
          </Button>
        </div>
        <div className='criteria-cart'>
          <h5 className='criteria-cart-h5'>Mater Private Network</h5>
          <p className='criteria-cart-p'>
            Mater Private Network builds a digital engagement platform to
            transform the referral experience for patients and doctors.
          </p>
          <Button className='criteria-cart-button' kind='secondary'>
            Learn More
          </Button>
        </div>
        <div className='criteria-cart'>
          <h5 className='criteria-cart-h5'>Mater Private Network</h5>
          <p className='criteria-cart-p'>
            Mater Private Network builds a digital engagement platform to
            transform the referral experience for patients and doctors.
          </p>
          <Button className='criteria-cart-button' kind='secondary'>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
