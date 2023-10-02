import React from 'react';
import './_error-404.scss';

const Error404 = () => {
  return (
    <div className='error-404'>
      <h1 className='error-404-h'>404</h1>
      <h1 className='error-404-h'>Page not found!</h1>
      <a href='/' className='error-404-a'>
        Go to the home page →
      </a>
    </div>
  );
};

export default Error404;
