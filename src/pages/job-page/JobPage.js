import React from 'react';
import './_job-page.scss';
import DuoComponent from '../../components/duo-component';
import JobFeatured from '../../components/job-featured/JobFeatured';
import JoinNetwork from '../../components/join-network';
import RoleConsult from '../../components/role-consult';

const JobPage = () => {
  return (
    <div>
      <DuoComponent
        heading={'Consulting'}
        bgiImage={
          "url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1600')"
        }
        image={
          "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=500'"
        }
        paragraph={
          'Help businesses accelerate their multicloud journey by combining Red Hats flexible, hybrid cloud portfolio with our technology and open ecosystem of strategic partners'
        }
        labelText={'wha are you looking for today'}
      />
      <JobFeatured />
      <RoleConsult />
      <JoinNetwork />
    </div>
  );
};

export default JobPage;
