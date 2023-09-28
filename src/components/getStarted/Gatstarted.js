import React from "react";
import "./_getStarted.scss";
import { Button } from "@carbon/react";
const Gatstarted = () => {
  return (
    <div className="main_div">
      <div className="emptydiv"></div>
      <div className="getstarted">
        <h1 className="heading">Get started</h1>
        <p className="para">
          A robust financial plan can help you accelerate your hybrid cloud and
          AI journey.
        </p>

        <Button className="register-right-div-button">
          <h5 className="btn-heading">Contact us</h5>
          <i class="bx bx-envelope bx-sm"></i>
        </Button>
      </div>
    </div>
  );
};

export default Gatstarted;
