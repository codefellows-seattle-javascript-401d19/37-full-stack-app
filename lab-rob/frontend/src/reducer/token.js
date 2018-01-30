import {cookieFetch} from '../lib/cookie';

const COOKIE = 'X-Sluggram-Token';

const emptyState = null;

let initialState = cookieFetch(COOKIE) || emptyState;

export default (state = initialState, {type, payload}) => {
  switch(type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_REMOVE':
      return emptyState;
    default:
      return state;
  }
};