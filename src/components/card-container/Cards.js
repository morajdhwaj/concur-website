import React from 'react';
import './_cards.scss';
import Card from '../card/Card';
const Cards = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f4 ', width: '100%' }}>
      <h1 className='card_container_h2'>Featured Industry Client Stories</h1>
      <div className='card_container'>
        <div className='card_container1'>
          <Card
            img='/image/img1.png'
            p='Sund & Baelt - Building bridges to better insight'
          />
          <Card
            img='/image/img2.png'
            p='HealthPartners - No time for downtime'
          />
          <Card
            img='/image/img3.png'
            p='Bic Camera, Inc. - A monumental upgrade'
          />
          <Card
            img='/image/img4.png'
            p='Home Trust - Rising to the challenge'
          />
          <Card
            img='/image/img5.png'
            p='Dubber - Bring AI into the discussion'
          />
          <Card img='/image/img6.png' p='IBM Global Chief Data Office' />
        </div>
      </div>
    </div>
  );
};

export default Cards;
