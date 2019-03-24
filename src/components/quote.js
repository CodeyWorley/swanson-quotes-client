import React from 'react';

const Quote = props => {
    let quote = props.quote;
    let rating = 0;
    let btnsContainer;
    let author;
    let ratingNumber;

    for (let i in quote.ratings) {
      rating = rating + quote.ratings[i]
    }
    if(rating && quote._id) {
      rating = `${Math.round((rating/quote.ratings.length) * 10) / 10} / 5`;
      ratingNumber = `from ${quote.ratings.length} voters`;
    }
    else if(!rating) {
      rating = '';
    }

    if(quote._id) {
      author = '-Ron Swanson'
      btnsContainer = (
        <div className='rating-btn-container'>
          <button className='btn-rating' onClick={() => props.onClick(1)}><i className="fa fa-star"></i></button>
          <button className='btn-rating' onClick={() => props.onClick(2)}><i className="fa fa-star"></i></button>
          <button className='btn-rating' onClick={() => props.onClick(3)}><i className="fa fa-star"></i></button>
          <button className='btn-rating' onClick={() => props.onClick(4)}><i className="fa fa-star"></i></button>
          <button className='btn-rating' onClick={() => props.onClick(5)}><i className="fa fa-star"></i></button>
        </div>
      );
    }

    return (
      <div className='quote-container'>
        <div className='content-container'>
            <div className='content'>
              {quote.content}
            </div>
            <div className='content-author'>
              {author}
            </div>
        </div>
        <div className='rating-container'>
          {btnsContainer}
          <div className='rating'>
            <div>{rating}</div>
            <span className='voters'>{ratingNumber}</span>
          </div>
        </div>
      </div>
    );
}
export default Quote;