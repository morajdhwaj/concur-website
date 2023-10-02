import React from 'react';
import './tos.scss';

const TOS = () => {
  return (
    <div className='tos'>
      <div className='tos-div1'>
        <h2 className='tos-div1-h'>Terms of Services</h2>
      </div>
      <div className='tos-div2'>
        <div className='tos-div2-div1'>
          <h5 className='tos-div2-div1-h'>Date: August 15, 2015</h5>
        </div>

        <div className='tos-div2-div2'>
          <div>
            <h1 className='tos-div2-div2-h '>Overview</h1>

            <p className='tos-div2-div2-p'>
              The following are the terms of an agreement between you and IBM.
              By accessing, or using this Web site, you acknowledge that you
              have read, understand, and agree to be bound by these terms and to
              comply with all applicable laws and regulations, including export
              and re-export control laws and regulations. If you do not agree to
              these terms, please do not use this Web site.
            </p>
            <p className='tos-div2-div2-p'>
              IBM may, without notice to you, at any time, revise these Terms of
              Use and any other information contained in this Web site. IBM may
              also make improvements or changes in the products, services, or
              programs described in this site at any time without notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TOS;
