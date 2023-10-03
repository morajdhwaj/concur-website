import React from 'react';
import './_section-right.scss';

const SectionRight = () => {
  return (
    <div className='section-right'>
      <div className='section-right-div1'>
        <img
          src='https://www.datocms-assets.com/16414/1696019795-adoptnewai.png?auto=format&dpr=0.72&w=700'
          alt=''
        />
      </div>
      <div className='section-right-div2'>
        <h2 className='section-right-div2-header'>
          Transform privacy management
        </h2>
        <p className='section-right-div2-desc'>
          <span style={{ fontWeight: 'bold' }}>
            Deploying AI securely is critical to business growth.
          </span>
          We’re building the new frontier of AI governance that empowers
          companies to accelerate AI adoption and innovation with confidence.
        </p>
        <p className='section-right-div2-point-title'>
          Handle business AI adoption with confidence
        </p>
        <p className='section-right-div2-point-desc'>
          A single technical control for data going into large language models,
          and the data being returned.
        </p>
        <p className='section-right-div2-point-title'>
          Gain real-time visibility in AI deployments
        </p>
        <p className='section-right-div2-point-desc'>
          Experience a single view to audit AI across your business, and assess
          usage and risks.
        </p>
        <p className='section-right-div2-point-title'>Strengthen compliance</p>
        <p className='section-right-div2-point-desc'>
          Ensure continuous monitoring and alerts, and leverage predefined
          policies to ensure the right controls are applied (or create custom
          policies).
        </p>
      </div>
    </div>
  );
};

export default SectionRight;
