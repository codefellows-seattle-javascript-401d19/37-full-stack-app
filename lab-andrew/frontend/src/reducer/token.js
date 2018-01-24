import * as cookie from '../lib/cookie';

const SCRAMBLEVOX_COOKIE = 'scrambleVox-Token';

let token = cookie.cookieFetch('');

let initialState = token ? token : null;

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};