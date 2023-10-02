import React from 'react';
import './_homePage.scss';
import LeadSpace from '../../components/lead-space/LeadSpace';
import ImgTile from '../../components/img-tile';
import RegisterBar from '../../components/register-bar';
import DuoComponent from '../../components/duo-component';

const HomePage = () => {
  return (
    <div className='main'>
      <LeadSpace />
      <ImgTile />
      <DuoComponent
        heading={'Discover the possibilities of AI with watsonx'}
        detail={
          ' IBM’s built-for-business AI and data platform is now available for free trial'
        }
        button={'Take a tour'}
        bgImage={
          "url('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1600 ')"
        }
      />
      <RegisterBar />
    </div>
  );
};

export default HomePage;
