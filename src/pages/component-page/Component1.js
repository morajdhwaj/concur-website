import React from 'react';
import LeadSpace from '../../components/lead-space/LeadSpace';
import ImgTile from '../../components/img-tile';
import RegisterBar from '../../components/register-bar';
import DuoComponent from '../../components/duo-component';
import Hero2 from '../../components/hero-2';
import LeadSpace2 from '../../components/lead-space-2';
import SlickSlider from '../../components/slick-slider';
import SectionLeft from '../../components/section-left/SectionLeft';
import SectionRight from '../../components/section-right/SectionRight';
import ManageData from '../../components/manage-data/ManageData';
import ShortSectionRight from '../../components/short-section-right/ShortSectionRight';
import ShortSectionLeft from '../../components/short-section-left';

const Component1 = () => {
  return (
    <div className='products'>
      <LeadSpace />
      <ImgTile />
      <RegisterBar />
      <SlickSlider />
      <SectionLeft />
      <SectionRight />
      <ManageData />
      <ShortSectionRight />
      <ShortSectionLeft />
      <DuoComponent
        heading={'Achieving real-time visibility'}
        detail={
          ' Learn how IBM Instana helped Enento identify bugs much faster, lower existing latency and provide real-time visibility into every service request'
        }
        button={'Read the story'}
        button2={'Explore concur instana'}
        bgImage={
          "url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1600')"
        }
      />
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
      <Hero2 />

      <LeadSpace2 />
    </div>
  );
};

export default Component1;
