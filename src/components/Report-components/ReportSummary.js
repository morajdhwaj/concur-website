import React from 'react';
import './_report-page.scss';

const ReportSummary = () => {
  return (
    <div className='summary'>
      <div className='summary-div'>
        <h5 className='summary-msg-title'>
          A letter from Arvind Krishna <br /> Chairman and Chief Executive
          Officer
        </h5>
        <h3 className='summary-msg'>Dear IBM Investor:</h3>
        <h3 className='summary-msg' style={{ marginTop: 30 }}>
          In 2022 we took decisive steps to build a stronger IBM, executing
          against a sound strategy with speed, focus, and consistency. Our
          growth is accelerating, our confidence is growing, and our company is
          gaining momentum.
        </h3>
        <p className='summary-description'>
          The reasons for this are clear. Our clients and partners are facing a
          series of specific business challenges: inflation, supply chain
          disruption, tight labor markets, sustainability requirements, and an
          ever-evolving cybersecurity threat landscape. They recognize
          technology as a source of competitive advantage, capable of addressing
          these immediate issues and future-proofing their businesses by
          increasing productivity, reducing costs, driving innovation, and
          fueling growth.
        </p>
        <p className='summary-description'>
          To that end, we have sharpened our focus on IBM’s unique ability to
          integrate technology and business expertise for our clients and our
          partners. Our portfolio is built around hybrid cloud and artificial
          intelligence (AI), the two most transformational technologies of our
          time. And our go-to-market approach brings together the necessary
          software, consulting, and infrastructure our clients require, from
          across our expanding ecosystem of partners.
        </p>
        <p className='summary-description'>This is today’s IBM.</p>
        <p className='summary-description'>This is today’s IBM.</p>
      </div>
    </div>
  );
};

export default ReportSummary;
