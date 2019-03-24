import React, {useState, useEffect} from 'react';

import Quote from './quote.js';
import {fetchQuote, rateQuote} from '../utils/quotes';

const Quotes = () => {
  const [quote, setQuote] = useState(
    {
      content:'',
      ratings: [],
      addresses: [],
      _id: null
    }
  );
  const [info, setInfo] = useState('Click any of the buttons below to get a Swanson quote!');
  const [address, setAddress] = useState(null)

  const handleQuoteClick = type => {
    fetchQuote(type)
      .then(res => {
        setInfo('');
        setQuote(res.data);
      })
      .catch(() => {
        setInfo('Unable to get a Swanson quote. Try refreshing the page.');
      })
  }

  const handleRatingClick = (rating, id = quote._id) => {
    rateQuote(id, rating, address)
      .then(res => {
        setQuote(res.data);
        setInfo('Your vote has been taken into consideration.')
      })
      .catch(() => {
        setInfo('You have already voted on this quote.');
      })
  }

  const handleGetAddress = () => {
    // use api call to get address
    let address = '192.168.1.10'
    setAddress(address)
  }

  useEffect(() => {
    handleGetAddress();
  }, [])


  return (
    <section className='quotes'>
      <div className='display-container'>
        <div className='display-info'>
          {info}
        </div>
        <Quote quote={quote} onClick={rating => handleRatingClick(rating)} />
      </div>
      <div className='quote-btn-container'>
        <button className='quote-btn' onClick={() => handleQuoteClick('small')}>Small</button>
        <button className='quote-btn' onClick={() => handleQuoteClick('medium')}>Medium</button>
        <button className='quote-btn' onClick={() => handleQuoteClick('large')}>Large</button>
      </div>
    </section>
  );
}

export default Quotes;