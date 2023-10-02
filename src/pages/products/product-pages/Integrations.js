import React from 'react';
import PartnerShip from '../../../components/partner-ship/PartnerShip';
import './integration.scss';
const Integrations = () => {
  return (
    <div className='products'>
      <div className='integration'>
        <h1 className='integration-h'>Over 1,300 pre-built integrations</h1>
        <p className='integration-p'>
          With the largest ecosystem of pre-built integrations, Transcend easily
          hooks up to any system where personal data is stored–from your
          internal databases to 1,300+ SaaS vendors. Transcend builds and
          manages all integration code in house, so you never need to worry
          about new endpoints or maintenance.
        </p>
      </div>
      <PartnerShip header={'Integrations'} />
    </div>
  );
};

export default Integrations;
