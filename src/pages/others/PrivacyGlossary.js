import React, { useState } from 'react';
import './privacy-glossary.scss';
import { Button, TextInput } from '@carbon/react';
import { PrivacyGlossaryData } from '../../local-data/PrivacyGlossaryData';
import { useNavigate } from 'react-router-dom';

const PrivacyGlossary = () => {
  const [...privacyGlossaryData] = PrivacyGlossaryData;

  const navigate = useNavigate();

  const handleNavigate = (termItem) => {
    navigate('/privacy-glossary/term', { state: { termItem: termItem } });
  };

  const [select, setSelect] = useState('');

  const handleClick = (header) => {
    console.log(header, ' clicked');
    setSelect(header);
  };

  const handleReset = () => {
    setSelect('');
  };

  console.log(privacyGlossaryData);

  return (
    <div>
      <div className='privacy-glossary'>
        <div className='privacy-glossary-div1'>
          <h2 className='privacy-glossary-div1-h'>Privacy Glossary</h2>
          <p className='privacy-glossary-div1-p'>
            GDPR. CCPA. CPPA. CPRA. DSAR. We’ll just say it-the privacy industry
            is swimming in acronyms. Make sense of the alphabet soup with
            Transcend's Privacy Glossary. Use the search bar to explore or
            scroll down for a full list of terms.
          </p>
          <div className='privacy-glossary-div1-search'>
            <TextInput
              id='text-input-1'
              type='text'
              placeholder='Enter terms'
              className='privacy-glossary-div1-search-input'
            />
            <Button
              href=''
              className='privacy-glossary-div1-search-button'
              size='md'
              kind='secondary'
            >
              Search
            </Button>
          </div>
        </div>
        <div className='privacy-glossary-div2'>
          <img
            src='https://img.freepik.com/free-photo/grandma-taking-care-plants-garden_23-2149518819.jpg?t=st=1695979734~exp=1695980334~hmac=545f41d0b87cd017ac5fc5936658813d9faf23636bc149a6856bf5d9d383b134'
            alt=''
          />
        </div>
      </div>
      <div className='alphabet'>
        <div className='alphabet-list'>
          <h4 className='alphabet-card' onClick={() => handleReset()}>
            All
          </h4>
          {privacyGlossaryData.map((item) => (
            <h4
              onClick={() => handleClick(item.header)}
              className='alphabet-card'
              key={item.header}
            >
              {item.header}
            </h4>
          ))}
        </div>

        {privacyGlossaryData
          .filter((item) => item.header.startsWith(select))
          .map((item) => (
            <div className='alphabet-link-card' key={item.header}>
              <div className='alphabet-link-card-div1'>
                <h1 className='alphabet-link-card-div1-h'>{item.header}</h1>
              </div>
              <div className='alphabet-link-card-div2'>
                {item.terms.map((termItem, i) => (
                  <div
                    className='alphabet-link-card-div2-a'
                    onClick={() => handleNavigate(item)}
                    key={i}
                  >
                    <p className='alphabet-link-card-div2-a-h'>
                      {termItem.term}
                    </p>
                    <i className='bx bx-chevron-right'></i>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PrivacyGlossary;
