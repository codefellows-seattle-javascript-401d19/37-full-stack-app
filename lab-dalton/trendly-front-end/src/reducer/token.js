import * as cookie from '../lib/cookie';

let token = cookie.cookieFetch('X-Trendly-Token');

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
};