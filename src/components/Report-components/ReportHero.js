import React from 'react';
import './_report-page.scss';

const ReportHero = () => {
  const divStyle = {
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/hand-arranging-wood-block-stacking-as-step-stair-with-arrow-up_20693-345.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='hero'>
      <div style={divStyle} className='hero-div1'>
        <h1>2022 Concur Annul report</h1>
      </div>
      <div className='hero-div2'>
        <img
          src='https://www.ibm.com/annualreport/assets/images/IBM-ArvindKrishna-5995_r1_CMYK_Silo.webp'
          alt='heroImage'
        />
      </div>
    </div>
  );
};

export default ReportHero;
