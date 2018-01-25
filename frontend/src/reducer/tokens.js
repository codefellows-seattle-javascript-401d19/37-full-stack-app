import * as cookie from '../lib/cookie';

const NONCENTS_COOKIE = 'X-Noncents-Token'; //TODO: find this in doc

// let token = cookie.cookieFetch(NONCENTS_COOKIE);

// let initialState = token ? token : null;
let initialState = null;

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'TOKEN_SET' :
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default :
      return state;
  }
};
