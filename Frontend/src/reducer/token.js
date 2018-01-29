import * as cookie from '../lib/cookie';

const SLUGGRAM_COOKIE = 'X-Sluggram-Token';
let token = cookie.cookieFetch(SLUGGRAM_COOKIE);

let initialState = token ? token : null;

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default: 
      return state;
  }
}