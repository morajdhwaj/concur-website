import React from 'react';
import './_disclaimer.scss';

const Disclaimer = () => {
  return (
    <div className='disclaimer'>
      <div className='disclaimer-div1'>
        <h5> </h5>
      </div>

      <div className='disclaimer-div2'>
        <div className='disclaimer-div2-div1 '>
          <h5>Disclaimer</h5>
        </div>
        <div className='disclaimer-div-div2'>
          <p className='disclaimer-div2-div2-p'>
            IBM Financing offerings are provided through IBM subsidiaries and
            divisions worldwide to qualified commercial and government clients.
            IBM Financing lease and financing offerings are provided in the
            United States through IBM Credit LLC.
          </p>
          <p className='disclaimer-div2-div2-p'>
            Rates and availability are based on a client’s credit rating,
            financing terms, offering type, equipment and product type and
            options, and may vary by country. This offering does not guarantee
            that credit will be provided. Non-IBM content which is part of an
            overall IBM end user client solution may also be eligible for
            financing through IBM Financing. Non-hardware items are financed by
            means of loans.
          </p>
          <p className='disclaimer-div2-div2-p'>
            Other restrictions may apply. Rates and offerings are subject to
            change, extension or withdrawal without notice and may not be
            available in all countries. IBM and IBM Financing do not, nor intend
            to, offer or provide accounting, tax or legal advice to clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
