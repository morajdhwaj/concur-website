import React from 'react';
import './_solutions.scss';
import { useNavigate } from 'react-router-dom';

const SolutionPage = () => {
  const number = 10;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/solutions/consent', { state: { number: number } });
  };

  console.log(number);

  return (
    <div className='solutions'>
      <h1>SolutionPage</h1>
      <button onClick={handleClick}>Click me</button> <br />
      <a href='/solutions/consent'>Consent</a> <br />
      <a href='/solutions/consumer'>Consumer</a> <br />
      <a href='/solutions/healthcare'>healthcare</a> <br />
      <a href='/solutions/fintech'>Fintech</a> <br />
      <a href='/solutions/startups'>StartUps</a> <br />
      <a href='/solutions/media'>Media</a> <br />
      <a href='/solutions/e-commerce'>E-commerce</a> <br />
      <a href='/solutions/b2b'>B2B</a> <br />
      <a href='/solutions/b2c'>B2C</a> <br />
      <a href='/solutions/b2g'>B2G</a> <br />
      <a href='/solutions/lgpd-brazil'>LGPD-brazil</a> <br />
      <a href='/solutions/pdpl-south-arabia'>PDPL-south-arabia</a> <br />
      <a href='/solutions/dpdpa'>DPDPA</a> <br />
      <a href='/solutions/pdpl'>PDPL</a> <br />
      <a href='/solutions/popia'>Popia</a> <br />
    </div>
  );
};

export default SolutionPage;
