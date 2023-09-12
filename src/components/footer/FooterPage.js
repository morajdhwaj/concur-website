import { Column, Grid, Select, SelectItem } from '@carbon/react';
import React from 'react';
import './_footerPage.scss';

const FooterPage = () => {
  return (
    <div className='main-footer'>
      <Grid className=''>
        <Column lg={16} md={8} sm={4} className='footer-page-2'>
          <Grid>
            <Column md={4} lg={4} sm={4}>
              <Column lg={16} md={8} sm={4} className='landing-page__banner'>
                <h2 className='footer-h2'>Discover</h2>
                <p className='footer-p'>
                  <a href='/#' className='footer-a'>
                    Products
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/#' className='footer-a'>
                    Trials
                  </a>
                </p>
                <p className='footer-p'>
                  <a href='/services' className='footer-a'>
                    Services
                  </a>
                </p>
                <p className='footer-p'>Industries</p>
                <p className='footer-p'>IBM discount</p>
                <p className='footer-p'>case studies</p>
                <p className='footer-p'>Financing</p>
              </Column>
            </Column>
            <Column md={4} lg={4} sm={4}>
              <Column lg={16} md={8} sm={4} className='landing-page__banner'>
                <h2 className='footer-h2'>Learn about</h2>
                <p className='footer-p'> What is IaaS ,PaaS & SaaS?</p>
                <p className='footer-p'>What is Cloud Computing?</p>
                <p className='footer-p'>What is Virtual Machine?</p>
                <p className='footer-p'>What is Object Storage?</p>
                <p className='footer-p'>What is Contenarization?</p>
                <p className='footer-p'>What is Kubernetes?</p>
                <p className='footer-p'>What is FaaS?</p>
              </Column>
            </Column>
            <Column md={4} lg={4} sm={4}>
              <Column lg={16} md={8} sm={4} className='landing-page__banner'>
                <h2 className='footer-h2'>Connect with us</h2>
                <p className='footer-p'> Engage IBM Consulting</p>
                <p className='footer-p'>Support</p>
                <p className='footer-p'>Find a Business Partner</p>
                <p className='footer-p'>Developers</p>
                <p className='footer-p'>Business Partners</p>
              </Column>
            </Column>
            <Column md={4} lg={4} sm={4}>
              <Column lg={16} md={8} sm={4} className='landing-page__banner'>
                <h2 className='footer-h2'>About IBM</h2>
                <p className='footer-p'>Careers</p>
                <p className='footer-p'>Latest news</p>
                <p className='footer-p'>Investor relations</p>
                <p className='footer-p'>Corporate responsibility</p>
                <p className='footer-p'>IBM product recycling</p>
                <p className='footer-p'>About IBM</p>

                <h2 className='footer-h2-select'>Select a country/region</h2>

                <Select
                  defaultValue='placeholder-item'
                  id='select-1'
                  invalidText='A valid value is required'
                  labelText=''
                >
                  <SelectItem text='Choose country' value='placeholder-item' />

                  <SelectItem text='Option 1' value='option-1' />
                  <SelectItem text='Option 2' value='option-2' />

                  <SelectItem text='Option 3' value='option-3' />
                  <SelectItem text='Option 4' value='option-4' />
                </Select>
              </Column>
            </Column>
            <div className='line-div' />
          </Grid>
        </Column>
        <Grid className='bottom-item'>
          <p className='bottom-item-p'>Contact</p>
          <p className='bottom-item-p'>Privacy</p>
          <p className='bottom-item-p'>Terms of use</p>
          <p className='bottom-item-p'>Accessibility</p>
          <p className='bottom-item-p'> Cookie Preferences</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterPage;
