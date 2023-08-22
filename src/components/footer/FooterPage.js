import { Column, Grid } from '@carbon/react';
import React from 'react';
import './_footerPage.scss';

const FooterPage = () => {
  return (
    <Grid className='footer-page'>
      <Column lg={16} md={8} sm={4} className='footer-page-2'>
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <Column lg={16} md={8} sm={4} className='landing-page__banner'>
              <h2>Discover</h2>
              <p>Products</p>
              <p>Trials</p>
              <p>Services</p>
              <p>Industries</p>
              <p>IBM discount</p>
              <p>case studies</p>
              <p>Financing</p>
            </Column>
          </Column>
          <Column md={4} lg={4} sm={4}>
            <Column lg={16} md={8} sm={4} className='landing-page__banner'>
              <h2>Learn about</h2>
              <p> What is IaaS ,PaaS & SaaS?</p>
              <p>What is Cloud Computing?</p>
              <p>What is Virtual Machine?</p>
              <p>What is Object Storage?</p>
              <p>What is Contenarization?</p>
              <p>What is Kubernetes?</p>
              <p>What is FaaS?</p>
            </Column>
          </Column>
          <Column md={4} lg={4} sm={4}>
            <Column lg={16} md={8} sm={4} className='landing-page__banner'>
              <h2>Connect with us</h2>
              <p> Engage IBM Consulting</p>
              <p>Support</p>
              <p>Find a Business Partner</p>
              <p>Developers</p>
              <p>Business Partners</p>
            </Column>
          </Column>
          <Column md={4} lg={4} sm={4}>
            <Column lg={16} md={8} sm={4} className='landing-page__banner'>
              <h2>About IBM</h2>
              <p>Careers</p>
              <p>Latest news</p>
              <p>Investor relations</p>
              <p>Corporate responsibility</p>
              <p>IBM product recycling</p>
              <p>About IBM</p>
            </Column>
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default FooterPage;
