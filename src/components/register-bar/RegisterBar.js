import React from 'react';
import './_register-bar.scss';
import { Button } from '@carbon/react';

const RegisterBar = () => {
  return (
    <div className="register-bar">
      <div className="register-bar-left">
        <h3>Think mumbai 2023</h3>
        <p>
          Join us virtually as we demystify the technology and share the
          principles to guide your generative AI business strategy.
        </p>
      </div>
      <div className=" register-bar-right">
        <Button className="register-right-div-button">
          <h5>Register Today</h5>
          <i class='bx bx-right-arrow-alt'></i>
        </Button>
      </div>
    </div>
  );
};

export default RegisterBar;
