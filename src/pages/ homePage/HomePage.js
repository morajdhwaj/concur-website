import React from 'react';
import './_homePage.scss';
import LeadSpace from '../../components/lead-space/LeadSpace';
import RegisterBar from '../../components/register-bar';
import DuoComponent from '../../components/duo-component';

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
      />
    </div>
  );
};

export default HomePage;
