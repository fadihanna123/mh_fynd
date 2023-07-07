import React, { useEffect, useState } from 'react';
import './App.css';
import useTranslate from './hooks/useTranslate';
import RatingImg from './assets/439-4394777_explore-wall-art-trustpilot-5-star-reviews.png';
import { Helper } from 'helper';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState('sv');
  const currenciesList = [
    {
      currency: 'SEK',
      lang: 'sv',
      flag: 'assets/sweden_flag.png',
    },
    {
      currency: 'EUR',
      lang: 'de',
      flag: 'assets/germany_flag.png',
    },
    {
      currency: 'FR',
      lang: 'fr',
      flag: 'assets/france_flag.png',
    },
    {
      currency: 'USD',
      lang: 'en',
      flag: 'assets/uk_flag.png',
    },
  ];
  const helper = new Helper();

  const { getStorage, saveStorage } = helper;

  useEffect(() => {
    const getLangData = getStorage('lang');

    if (!getLangData) {
      saveStorage('lang', 'sv');
    }

    setSelectedLang(getLangData || '');
  }, []);

  return (
    <>
      <header>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottom: '1px solid black',
            padding: 10,
          }}
        >
          <div>
            <i className='fa-solid fa-envelope-open-text'></i> Ask.mh.fynd@.se
          </div>
          <div>
            <i className='fa-solid fa-phone'></i> 0700605542
          </div>
          <div>
            <select
              onChange={(e) => {
                const foundLang = currenciesList.find(
                  (currency) => currency.currency === e.target.value
                )!.lang;

                setSelectedLang(foundLang || '');
              }}
            >
              {currenciesList.map((currency, i: number) => {
                return (
                  <React.Fragment key={i}>
                    <option
                      // style={{
                      //   backgroundImage: 'url(`${currency.flag}`)',
                      // }}
                      value={currency.currency}
                    >
                      {currency.currency}
                    </option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
          <div>
            <Link to='/FindStore'>
              <i className='fa-solid fa-map-pin'></i>{' '}
              {useTranslate('FIND_STORE', selectedLang)}
            </Link>
          </div>
          <div>
            <img style={{ width: '100px' }} src={RatingImg} alt='Our Rating' />
          </div>
        </div>
      </header>
    </>
  );
};

export default App;
