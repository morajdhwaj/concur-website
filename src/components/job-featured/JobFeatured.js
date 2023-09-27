import React from "react";
import "./_job-featured.scss";
import { Button, Tile } from "@carbon/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@carbon/icons-react";

const JobFeatured = () => {
  return (
    <div className="job-featured">
      <div className="job-featured-div1">
        <h5>Job</h5>
      </div>

      <div className="job-featured-div2">
        <div className="job-featured-div2-heading ">
          <h1>Featured Consulting jobs</h1>
          <p className="job-featured-div2-p">Apply to recently posted jobs.</p>
        </div>
        <div className="job-featured-tile-div">
          <Tile className="job-featured-tile">
            <p>Consulting</p>

            <h3 className="tile-heading">Business Transformation</h3>
            <h3 className="tile-heading"> Constant : Finance</h3>

            <div className="tile-address">
              <p>Experience:Professional</p>
              <p>Location:New York,US</p>
            </div>

            <Link href="https://www.carbondesignsystem.com">Link</Link>
          </Tile>
          <Tile className="job-featured-tile">
            <p>Consulting</p>

            <h3 className="tile-heading">Business Transformation</h3>
            <h3 className="tile-heading"> Constant : Finance</h3>

            <div className="tile-address">
              <p>Experience:Professional</p>
              <p>Location:New York,US</p>
            </div>

            <Link href="https://www.carbondesignsystem.com">Link</Link>
          </Tile>
          <Tile className="job-featured-tile">
            <p>Consulting</p>

            <h3 className="tile-heading">Business Transformation</h3>
            <h3 className="tile-heading"> Constant : Finance</h3>

            <div className="tile-address">
              <p>Experience:Professional</p>
              <p>Location:New York,US</p>
            </div>

            <Link href="https://www.carbondesignsystem.com">Link</Link>
          </Tile>
          <Tile className="job-featured-tile">
            <p>Consulting</p>

            <h3 className="tile-heading">Business Transformation</h3>
            <h3 className="tile-heading"> Constant : Finance</h3>

            <div className="tile-address">
              <p>Experience:Professional</p>
              <p>Location:New York,US</p>
            </div>

            <Link href="https://www.carbondesignsystem.com">Link</Link>
          </Tile>
          <Tile className="job-featured-tile">
            <p>Consulting</p>

            <h3 className="tile-heading">Business Transformation</h3>
            <h3 className="tile-heading"> Constant : Finance</h3>

            <div className="tile-address">
              <p>Experience:Professional</p>
              <p>Location:New York,US</p>
            </div>

            <Link href="https://www.carbondesignsystem.com">Link</Link>
          </Tile>
        </div>
        <Button
          className="job-featured-button"
          renderIcon={ArrowRight}
          size="lg"
        >
          See all jobs
        </Button>
      </div>
    </div>
  );
};

export default JobFeatured;
