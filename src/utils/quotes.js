import {API_QUOTES_URL} from '../config';
import axios from 'axios';

// GET random quote by type
export const fetchQuote = async(type) => {
  return await axios({
    method: 'get',
    url: `${API_QUOTES_URL}/quotes/${type}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
