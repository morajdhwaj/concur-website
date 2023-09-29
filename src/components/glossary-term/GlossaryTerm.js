import React from 'react';
import './_glossary-term.scss';
import { useLocation } from 'react-router-dom';

const GlossaryTerm = () => {
  const termItem = useLocation();
  console.log(termItem.state.termItem.terms[0], 'hello');

  return (
    <div className='glossary-term'>
      <h1>{termItem.state.termItem.terms[0].term}</h1>
      <h1>{termItem.state.termItem.terms[1].term}</h1>
    </div>
  );
};

export default GlossaryTerm;
