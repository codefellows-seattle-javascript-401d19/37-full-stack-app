import * as cookie from '../lib/cookie';

const SCRAMBLEVOX_COOKIE = 'X-scrambleVox-Token';

let token = cookie.cookieFetch(SCRAMBLEVOX_COOKIE);

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