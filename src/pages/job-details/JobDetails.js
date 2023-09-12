import React from 'react';
import './_job-details.scss';
import JobApply from '../../components/job-apply/JobApply';
import { Button } from '@carbon/react';

const JobDetails = () => {
  return (
    <div className='job-details'>
      <JobApply />
      <div className='job-details-div1'>
        <div className='job-details-div1-div1'>
          <h3 className='job-details-div1-div1-h3'>Introduction</h3>
          <p className='job-details-div1-div1-p'>
            As a Strategy Consultant at IBM, you will help reinvent businesses
            and industries by developing and utilizing specialized knowledge of
            industry-specific and cross-industry competitive strategies. You’ll
            manage complex components of an engagement, working closely with
            clients and their customers to understand their pain points. Your
            strategic recommendations will drive change in a digitally-enabled
            era and give you the opportunity to collaborate with highly talented
            IBMers. Are you ready?
          </p>
          <h3 className='job-details-div1-div1-h3'>
            Your Role and Responsibilities
          </h3>
          <p className='job-details-div1-div1-p'>
            As a Strategy Consultant at IBM, you will help reinvent businesses
            and industries by developing and utilizing specialized knowledge of
            industry-specific and cross-industry competitive strategies. You’ll
            manage complex components of an engagement, working closely with
            clients and their customers to understand their pain points. Your
            strategic recommendations will drive change in a digitally-enabled
            era and give you the opportunity to collaborate with highly talented
            IBMers. Are you ready?
            <br />
            <br />
            What You’ll Do This role is for a Finance Transformation Project
            Manager, which delivers implementation services across all sectors
            of TruQua and IBM within North America. This individual will be
            responsible for leading project teams, as well as serve as an
            individual contributor, spearheading proposals, ensuring the quality
            of team delivery, thought leadership, keeping the team members
            utilized, growing our practice, and deepening our relationships with
            key partners. This candidate will be highly knowledgeable with
            required SAP Finance Transformation product capabilities, business
            processes, solution mechanics, and configuration requirements, as
            well as integration with other technologies. This individual will
            also lead advisory for client executives and leaders on the benefits
            delivered by SAP as a strategic asset to their broader Finance
            Transformation journey.
          </p>
          <h3 className='job-details-div1-div1-h3'>
            Required Technical and Professional Expertise
          </h3>

          <ul className='job-details-ul'>
            <li>
              1. Proven track record in managing complex SAP Finance such as
            </li>
            <li>
              2. Expertise in Finance Transformation Advisory, Consulting or
              Program Management
            </li>
            <li>3. Deep knowledge of SAP ECC, namely SAP FI-CO</li>
          </ul>
        </div>
        <div className='job-details-div1-div2'>
          <h3 className='job-details-div1-div2-h3'>Key Job Details</h3>
          <div className='job-details-div1-div2-div1'>
            <h5>Role :{'  '} </h5>
            <p> Finance Transformation Project Manager</p>
          </div>
          <div className='job-details-div1-div2-div1'>
            <h5>Category :{'  '} </h5>
            <p> Consulting</p>
          </div>
          <div className='job-details-div1-div2-div1'>
            <h5>Role :{'  '} </h5>
            <p> Finance Transformation Project Manager</p>
          </div>
          <div className='job-details-div1-div2-div1'>
            <h5>Category :{'  '} </h5>
            <p> Consulting</p>
          </div>
          <div className='job-details-div1-div2-div1'>
            <h5>Role :{'  '} </h5>
            <p> Finance Transformation Project Manager</p>
          </div>
          <div className='job-details-div1-div2-div1'>
            <h5>Category :{'  '} </h5>
            <p> Consulting</p>
          </div>
          <Button className='job-details-div1-div2-button'>Apply now</Button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
