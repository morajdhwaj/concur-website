import React from 'react';
import './_glossary-term.scss';
import { useLocation } from 'react-router-dom';

const GlossaryTerm = () => {
  const termItem = useLocation();

  const header = termItem?.state?.termItem?.header;
  const terms = termItem?.state?.termItem?.terms;

  console.log(header);
  console.log(terms);

  return (
    <div className='glossary-term'>
      <div className='glossary-term-div1'>
        <h2 className='glossary-term-div1-h'>{header}</h2>
      </div>
      <div className='glossary-term-div2'>
        <a href='/privacy-glossary' className='glossary-term-div2-a '>
          <i class='bx bx-chevron-left glossary-term-div2-a-p'></i>
          <p className='glossary-term-div2-a-p'>Glossary page</p>
        </a>
        {terms.map((term, i) => {
          return (
            <div key={i} className='glossary-term-div2-div1'>
              <h2 className='glossary-term-div2-term'>{term?.term}</h2>
              <p className='glossary-term-div2-p'>{term?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlossaryTerm;
