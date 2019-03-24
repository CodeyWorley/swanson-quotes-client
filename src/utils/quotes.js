import {API_QUOTES_URL} from '../config';
import axios from 'axios';

// GET random quote by type
export const fetchQuote = async(type) => {
  return await axios({
    method: 'get',
    url: `${API_QUOTES_URL}/v1/quotes/${type}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// UPDATE quote rating
export const rateQuote = async(id, rating, address) => {
  return await axios({
    method: 'put',
    url: `${API_QUOTES_URL}/v1/quotes/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      rating,
      address
    }
  })
}
