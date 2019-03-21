import React, {useState} from 'react';

import Rating from './rating.js';
import {fetchQuote} from '../utils/quotes';

const Quotes = () => {
  const [quote, setQuote] = useState(
    {
      display:'Click any of the buttons below to get a Swanson quote!',
      rating: 'none'
    }
  );

  const handleClick = type => {
    fetchQuote(type)
      .then(res => {
        setQuote(res.data[0])
      })
      .catch(() => {
        setQuote(
          {
            display: 'Unable to get a Swanson quote. Try refreshing the page.',
            rating: 'none'
          }
        )
      })
  }

  return (
    <section className='quotes'>
      <div className='section-container'>
        <div className='display-container'>
          <div className='display'>
            {quote.display}
          </div>
          <Rating score={quote.rating} rated={quote.rated}/>
        </div>
        <div className='btn-container'>
          <button className='btn' onClick={() => handleClick('small')}>Small</button>
          <button className='btn' onClick={() => handleClick('medium')}>Medium</button>
          <button className='btn' onClick={() => handleClick('large')}>Large</button>
        </div>
      </div>
    </section>
  );
}

export default Quotes;