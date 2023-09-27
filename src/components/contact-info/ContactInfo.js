import React from 'react';
import './_contact-info.scss';

const ContactInfo = () => {
  return (
    <div className='contact-info-page'>
      <div className='contact-info-page-div1'>
        <h5>Related</h5>
      </div>

      <div className='contact-info-page-div2'>
        <div className='contact-info-page-div2-heading '>
          <h1 className='contact-info-page-div2-heading-h1 '>
            Contact information
          </h1>
        </div>
        <div className='contact-info-page-div2-div1'>
          <div className='contact-info-page-div2-div1-card'>
            <i class='bx bxs-buildings bx-lg' />
            <br />
            <h5>Corporate address</h5>
            <br />
            <p>1 New Orchard Road Armonk, New York 10504-1722 United States</p>
            <br />
            <br />
            <a href='/'>Contact HR</a>
          </div>
          <div className='contact-info-page-div2-div1-card'>
            <i class='bx bxs-phone bx-lg'></i>
            <br />
            <h5>Phone numbers General:</h5>
            <a href='/'>1-800-426-4968 (toll-free)</a>
            <br />
            <h5>Shopping assistance:</h5>
            <a href='/'>1-800-426-4968 (toll-free)</a>
            <br />
          </div>
          <div className='contact-info-page-div2-div1-card'>
            <i class='bx bx-link-alt bx-lg'></i>
            <br />
            <h5>Follow IBM</h5>

            <a href='/'>Linkedin</a>

            <a href='/'>Twitter</a>

            <a href='/'>Instagram</a>
          </div>
          <div className='contact-info-page-div2-div1-card'>
            <i class='bx bx-link-alt bx-lg'></i>
            <br />
            <h5>Follow IBM</h5>

            <a href='/'>Linkedin</a>

            <a href='/'>Twitter</a>

            <a href='/'>Instagram</a>
          </div>
          <div className='contact-info-page-div2-div1-card'>
            <i class='bx bxs-buildings bx-lg' />
            <br />
            <h5>Corporate address</h5>
            <br />
            <p>1 New Orchard Road Armonk, New York 10504-1722 United States</p>
            <br />
            <br />
            <a href='/'>Contact HR</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
