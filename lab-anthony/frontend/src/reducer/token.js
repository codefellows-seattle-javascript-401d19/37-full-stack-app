// import * as cookie from '../lib/cookie';
//
// const VOLLY_COOKIE = 'X-Volly-Token';
// let token = cookie.cookieFetch('');

let initiatState = null;

// token ? token :

export default (state=initiatState, {type, payload}) => {
  switch(type){
  case 'TOKEN_SET':
    return payload;
  case 'TOKEN_REMOVE':
    return null;
  default:
    return state;
  }
};
