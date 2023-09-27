import React from 'react';
import './_partner.scss';
import Related from '../../components/related/Related';
import Together from '../../components/together/Together';
import ContactInfo from '../../components/contact-info/ContactInfo';
import Collaborates from '../../components/collaborate/Collaborates';

const Partner = () => {
  return (
    <div className='partner'>
      <Related />
      <Together />
      <ContactInfo />
      <Collaborates />
    </div>
  );
};

export default Partner;
