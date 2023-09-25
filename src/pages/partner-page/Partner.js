import React from 'react';
import './_partner.scss';
import Related from '../../components/related/Related';
import Together from '../../components/together/Together';
import ContactInfo from '../../components/contact-info/ContactInfo';

const Partner = () => {
  return (
    <div className='partner'>
      <Related />
      <Together />
      <ContactInfo />
    </div>
  );
};

export default Partner;
