import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cardsH1'>Popular Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='VR Ears: Hear Off-World, Listen Off-Ear'
              label='Adventure'
              path='/login'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The VR Den at Revolver Creative'
              label='Luxury'
              path='/login'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='VRGO Mini-Move around VR'
              label='Mystery'
              path='/login'
            />
            <CardItem
              src='images/img-4.jpg'
              text='etee: the button-free VR controller'
              label='Adventure'
              path='/login'
            />
            <CardItem
              src='images/img-8.jpg'
              text='VR - Short Film'
              label='Adrenaline'
              path='/login'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;