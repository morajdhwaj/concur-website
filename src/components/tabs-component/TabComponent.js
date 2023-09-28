import React from 'react';
import './_tab-component.scss';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@carbon/react';

const TabComponent = () => {
  return (
    <div className='tab-component'>
      <div className='tab-component-div1'>
        <h5>Case Studies</h5>
      </div>

      <div className='tab-component-div2'>
        <div className='tab-component-div2-heading '>
          <h1 className='tab-component-div2-heading-h '>What we offer</h1>
        </div>
        <div className='tab-component-tab-div'>
          <Tabs>
            <TabList
              activation='manual'
              aria-label='List of tabs'
              className='tab-component-tab-div-tabs'
            >
              <Tab style={{ padding: ' 2vh 8vh 2vh 2vh', fontSize: '16px' }}>
                Loans
              </Tab>
              <Tab style={{ padding: ' 2vh 8vh 2vh 2vh', fontSize: '16px' }}>
                Leasing
              </Tab>
              <Tab
                title='Tab label 4'
                style={{ padding: ' 2vh 8vh 2vh 2vh', fontSize: '16px' }}
              >
                IBM Project <br /> Financing™
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className='tab-component-panel '>
                  <div className='tab-component-panel-div1'>
                    <img
                      src='https://picsum.photos/570/300'
                      alt=''
                      className='tab-component-panel-div1-img'
                    />
                  </div>
                  <div className='tab-component-panel-div2'>
                    <h4 className='tab-component-panel-div2-h'>Loans</h4>
                    <p className='tab-component-panel-div2-p'>
                      IBM solutions are transforming industries Discover the
                      extraordinary impact of IBM’s innovative technologies on
                      diverse industries. Our deep industry knowledge,
                    </p>
                    <a className='tab-component-panel-div2-a' href='/'>
                      View loan option
                      <i class='bx bx-right-arrow-alt bx-sm ' />
                    </a>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='tab-component-panel '>
                  <div className='tab-component-panel-div1'>
                    <img
                      src='https://picsum.photos/seed/picsum/570/300'
                      alt=''
                      className='tab-component-panel-div1-img'
                    />
                  </div>
                  <div className='tab-component-panel-div2'>
                    <h4 className='tab-component-panel-div2-h'>Leasing</h4>
                    <p className='tab-component-panel-div2-p'>
                      Take a predictable approach to building your hybrid cloud
                      and AI infrastructure with leasing options that can help
                      enhance ROI and TCO.
                    </p>
                    <a className='tab-component-panel-div2-a' href='/'>
                      View loan option
                      <i class='bx bx-right-arrow-alt bx-sm ' />
                    </a>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                {' '}
                <div className='tab-component-panel '>
                  <div className='tab-component-panel-div1'>
                    <img
                      src='https://picsum.photos/id/237/570/300'
                      alt=''
                      className='tab-component-panel-div1-img'
                    />
                  </div>
                  <div className='tab-component-panel-div2'>
                    <h4 className='tab-component-panel-div2-h'>
                      IBM Project Financing™
                    </h4>
                    <p className='tab-component-panel-div2-p'>
                      Achieve financial flexibility with a single source IT
                      financing option that can combine loans, leases and
                      payment plans to help accelerate your hybrid cloud and AI
                      projects.
                    </p>
                    <a className='tab-component-panel-div2-a' href='/'>
                      View loan option
                      <i class='bx bx-right-arrow-alt bx-sm ' />
                    </a>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
