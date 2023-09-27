import React from 'react';
import { useLocation } from 'react-router-dom';

const Consent = () => {
  const number = useLocation();
  console.log(number.state.number);

  return (
    <div>
      <h1>Consent</h1>
    </div>
  );
};

export default Consent;
