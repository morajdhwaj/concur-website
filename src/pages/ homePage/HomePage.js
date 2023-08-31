import React from 'react';
import './_homePage.scss';
import LeadSpace from '../../components/lead-space/LeadSpace';
import RegisterBar from '../../components/register-bar';
import DuoComponent from '../../components/duo-component';
import Hero2 from '../../components/hero-2';
import LeadSpace2 from '../../components/lead-space-2';

const HomePage = () => {
  return (
    <div className='main'>
      <LeadSpace />
      <RegisterBar />
      <DuoComponent
        heading={'Achieving real-time visibility'}
        detail={
          ' Learn how IBM Instana helped Enento identify bugs much faster, lower existing latency and provide real-time visibility into every service request'
        }
        button={'Register Today'}
        image={
          "url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1600')"
        }
      />
      <DuoComponent
        heading={'Discover the possibilities of AI with watsonx'}
        detail={
          ' IBM’s built-for-business AI and data platform is now available for free trial'
        }
        button={'Register Today'}
        image={
          "url('https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1600 ')"
        }
      />
      <Hero2 />
      <LeadSpace2 />
    </div>
  );
};

export default HomePage;
