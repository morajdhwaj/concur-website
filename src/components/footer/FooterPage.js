import { Column, Dropdown, Grid } from '@carbon/react';
import React from 'react';
import './_footerPage.scss';

const items = [
  {
    id: 'option-1',
    text: 'India',
  },
  {
    id: 'option-2',
    text: 'Saudi Arabia',
  },
  {
    id: 'option-3',
    text: 'Brazil',
  },
  {
    id: 'option-4',
    text: 'South Africa',
  },
];
const FooterPage = () => {
  return (
    <div className='main-footer'>
      <Grid className=''>
        <Column lg={16} md={8} sm={4} className='footer-page-2'>
          <Grid>
            <Column md={3} lg={3} sm={3}>
              <Column lg={12} md={8} sm={4} className='landing-page__banner'>
                <h2 className='footer-h2'>Products</h2>
                <p className='footer-p'>
                  <a href='/products' className='footer-a'>
                    Consent
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/#' className='footer-a'>
                    Data Mapping
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/services' className='footer-a'>
                    Privacy Request
                  </a>
                </p>
                <p className='footer-p'>Assessments</p>
                <p className='footer-p'>
                  <a href='/products/integrations' className='footer-a'>
                    Integrations
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/case-studies' className='footer-a'>
                    Digital Policy
                  </a>
                </p>
                <p className='footer-p'>Notice Management</p>
              </Column>
            </Column>

            <Column md={3} lg={3} sm={3}>
              <Column lg={12} md={8} sm={4} className='landing-page__banner'>
                <h2 className='footer-h2'>Solutions</h2>
                <p className='footer-p'>Consumer</p>
                <p className='footer-p'>Health Care </p>
                <p className='footer-p'>Fintech</p>
                <p className='footer-p'>Startups</p>
                <p className='footer-p'>DPAR/DSAR</p>
                <p className='footer-p'>DPO Studio</p>
              </Column>
            </Column>
            <Column md={3} lg={3} sm={3}>
              <Column lg={12} md={8} sm={4} className='landing-page__banner'>
                <h2 className='footer-h2'>Resources</h2>
                <p className='footer-p'>Case studies</p>
                <p className='footer-p'>Blog</p>
                <p className='footer-p'>Reports</p>
                <p className='footer-p'>Webinar</p>
                <p className='footer-p'>Glossay</p>
                <p className='footer-p'>Circulars</p>
                <p className='footer-p'>Others</p>
              </Column>
            </Column>
            <Column md={3} lg={3} sm={3}>
              <Column lg={12} md={8} sm={4} className='landing-page__banner'>
                <h2 className='footer-h2'>Company</h2>
                <p className='footer-p'>
                  <a href='/circulars' className='footer-a'>
                    About Us
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/customers' className='footer-a'>
                    Careers
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/case-studies' className='footer-a'>
                    Terms of Service
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/community' className='footer-a'>
                    Privacy Policy
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/privacy-glossary' className='footer-a'>
                    EULA
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/data-mapping-cost-calculator' className='footer-a'>
                    Privacy Request
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/training' className='footer-a'>
                    Training
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/demo' className='footer-a'>
                    Demo
                  </a>
                </p>
              </Column>
            </Column>
            <Column md={3} lg={3} sm={3}>
              <Column lg={12} md={8} sm={4} className='landing-page__banner'>
                <h2 className='footer-h2'>Developer</h2>
                <p className='footer-p'>Open Source</p>
                <p className='footer-p'>Docs</p>
                <p className='footer-p'>Help</p>
                <p className='footer-p'>Community</p>
                <p className='footer-p'>Status</p>
                <p className='footer-p'>
                  <a href='/privacy-glossary' className='footer-a'>
                    Privacy Glossary
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/resources' className='footer-a'>
                    Contact Us
                  </a>
                </p>

                <Dropdown
                  id='default'
                  initialSelectedItem={items[0]}
                  label='Option 1'
                  items={items}
                  itemToString={(item) => (item ? item.text : '')}
                  className='footer-dropdown'
                />
              </Column>
            </Column>
          </Grid>
          <div className='line-div' />
        </Column>
        <Grid className='bottom-item'>
          <p className='bottom-item-p'>Contact</p>
          <p className='bottom-item-p'>Privacy</p>
          <a href='/legal/term-of-service' className='bottom-item-p'>
            <p className='bottom-item-p'>Terms of service</p>
          </a>
          <p className='bottom-item-p'>Accessibility</p>
          <p className='bottom-item-p'> Cookie Preferences</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterPage;
