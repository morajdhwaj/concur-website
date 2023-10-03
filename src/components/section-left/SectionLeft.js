import React from 'react';
import './_section-left.scss';

const SectionLeft = () => {
  return (
    <div className='section-left'>
      <div className='section-left-div1'>
        <h2 className='section-left-div1-header'>
          Adopt new AI technologies with confidence
        </h2>
        <p className='section-left-div1-desc'>
          <span style={{ fontWeight: 'bold' }}>
            Deploying AI securely is critical to business growth.
          </span>
          We’re building the new frontier of AI governance that empowers
          companies to accelerate AI adoption and innovation with confidence.
        </p>
        <p className='section-left-div1-point-title'>
          Handle business AI adoption with confidence
        </p>
        <p className='section-left-div1-point-desc'>
          A single technical control for data going into large language models,
          and the data being returned.
        </p>
        <p className='section-left-div1-point-title'>
          Gain real-time visibility in AI deployments
        </p>
        <p className='section-left-div1-point-desc'>
          Experience a single view to audit AI across your business, and assess
          usage and risks.
        </p>
        <p className='section-left-div1-point-title'>Strengthen compliance</p>
        <p className='section-left-div1-point-desc'>
          Ensure continuous monitoring and alerts, and leverage predefined
          policies to ensure the right controls are applied (or create custom
          policies).
        </p>
      </div>
      <div className='section-left-div2'>
        <img
          src='https://www.datocms-assets.com/16414/1696019795-adoptnewai.png?auto=format&dpr=0.72&w=700'
          alt=''
        />
      </div>
    </div>
  );
};

export default SectionLeft;
