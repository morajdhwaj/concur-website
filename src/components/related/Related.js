import React from 'react';
import './_related.scss';

const Related = () => {
  return (
    <div className='partner-page'>
      <div className='partner-page-div1'>
        <h5>Related</h5>
      </div>

      <div className='partner-page-div2'>
        <div className='partner-page-div2-heading '>
          <h1 className='partner-page-div2-heading-h1 '>Related solutions</h1>
        </div>
        <div className='partner-page-div2-div1'>
          <div className='partner-page-div2-div1-div1'>
            <h3>Concur Cloud</h3>
          </div>
          <div className='partner-page-div2-div1-div2'>
            <p>
              IBM Cloud with Red Hat offers market-leading security, enterprise
              scalability and open innovation to unlock the full potential of
              cloud and AI.
            </p>
            <a href='/' className='partner-page-div2-div1-div2-a'>
              Explore Concur Cloud <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </div>
        </div>
        <div className='partner-page-div2-div1'>
          <div className='partner-page-div2-div1-div1'>
            <h3>VMware Solutions</h3>
          </div>
          <div className='partner-page-div2-div1-div2'>
            <p>
              IBM Cloud for VMware Solutions is designed to help you move VMware
              workloads from on premises to the IBM Cloud.
            </p>
            <a href='/' className='partner-page-div2-div1-div2-a'>
              Explore Concur Cloud <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </div>
        </div>
        <div className='partner-page-div2-div1'>
          <div className='partner-page-div2-div1-div1'>
            <h3>Virtual Servers</h3>
          </div>
          <div className='partner-page-div2-div1-div2'>
            <p>
              Concur Cloud Virtual Servers are public and dedicated virtual
              servers that provision and scale on demand, with monthly and
              hourly billing options.
            </p>
            <a href='/' className='partner-page-div2-div1-div2-a'>
              Explore Concur Cloud <i class='bx bx-right-arrow-alt bx-sm'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
