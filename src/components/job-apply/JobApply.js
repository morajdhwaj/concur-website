import React from 'react';
import './_job-apply.scss';
import { Button } from '@carbon/react';
import { Link } from 'react-router-dom';

const JobApply = () => {
  return (
    <div className='job-apply'>
      <h1 className='job-apply-heading'>
        Finance Transformation Project Manager
      </h1>
      <div className='job-apply-div2'>
        <h3 className='job-apply-div2-h3'>Multiple Location</h3>
        <h3 className='job-apply-div2-h3' style={{ color: 'blue' }}>
          See All
        </h3>
        <h3 className='job-apply-div2-h3'>Consulting</h3>
        <h3 className='job-apply-div2-h3'>Professional</h3>
      </div>
      <div className='job-apply-div3'>
        <Button size='lg'> Apply Now</Button>
        <div className='job-apply-div3-div2'>
          <Link>
            <i class='bx bxl-linkedin bx-sm'></i>
          </Link>
          <Link>
            <i class='bx bxl-twitter bx-sm'></i>
          </Link>
          <Link>
            <i class='bx bxs-envelope bx-sm'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
