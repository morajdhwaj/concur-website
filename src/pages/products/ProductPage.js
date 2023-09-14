import React from 'react';
import './_productsPage.scss';
import Featured from '../../components/featured';

const ProductPage = () => {
  return (
    <div className='products'>
      <Featured />
      <a href='/products/data-discovery'>Data Discovery</a> <br />
      <a href='/products/data-mapping'>Data Mapping</a> <br />
      <a href='/products/privacy'>Privacy </a> <br />
      <a href='/products/assessments'>Assessments</a> <br />
      <a href='/products/integrations'>Integrations</a> <br />
      <a href='/products/security'>Security</a> <br />
      <a href='/products/privacy-requests'>Privacy request</a> <br />
      <a href='/products/digital-policy-management'>
        Digital-Policy-Management
      </a>
      <br />
      <a href='/products/notice-management'>Notice-Management</a> <br />
      <a href='/products/consent-management'>Consent-Management</a> <br />
      <a href='/products/dpo-studio'>DPO Studio</a> <br />
    </div>
  );
};

export default ProductPage;
