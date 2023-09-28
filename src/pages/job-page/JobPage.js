import React from "react";
import "./_job-page.scss";
import DuoComponent from "../../components/duo-component";
import JobFeatured from "../../components/job-featured/JobFeatured";
import JoinNetwork from "../../components/join-network";
import RoleConsult from "../../components/role-consult";
import Cards from "../../components/card-container";
import InsideComp from "../../components/inside-comp/InsideComp";
import Resoureses from "../../components/resoureses/Resoureses";

const JobPage = () => {
  return (
    <div>
      <DuoComponent
        heading={"Consulting"}
        bgiImage={
          "url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1600')"
        }
        image={
          "https://img.freepik.com/free-photo/close-up-adorable-kitten-outdoors_23-2150782409.jpg?size=626&ext=jpg&ga=GA1.1.802550660.1695817924&semt=sph"
        }
        paragraph={
          "Help businesses accelerate their multicloud journey by combining Red Hats flexible, hybrid cloud portfolio with our technology and open ecosystem of strategic partners"
        }
        labelText={"wha are you looking for today"}
      />
      <JobFeatured />
      <Resoureses />
      <RoleConsult />
      <JoinNetwork />
      <InsideComp />
      <Cards />
    </div>
  );
};

export default JobPage;
