import React from 'react';
import './App.css';
import useTranslate from './hooks/useTranslate';
import RatingImg from './assets/439-4394777_explore-wall-art-trustpilot-5-star-reviews.png';

const App: React.FC = () => {
  return (
    <>
      <header>
        <i className='fa-solid fa-envelope-open-text'></i>
        Ask.mh.fynd@.se
        <i className='fa-solid fa-phone'></i> 0700605542 SEK
        <i className='fa-solid fa-map-pin'></i>
        {useTranslate('FIND_STORE', 'sv')}
        <img src={RatingImg} alt='Our Rating' />
      </header>
    </>
  );
};

export default App;
