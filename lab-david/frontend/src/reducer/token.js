import * as cookie from '../lib/cookie';

const LINDAHLGRAM_COOKIE = 'Lindahlgram-Token'; 
let token = cookie.cookieFetch(LINDAHLGRAM_COOKIE);

let initialState = token ? token : null;

export default (state=initialState, {type, payload}) => {
  switch(type){
    case 'TOKEN_SALT' :
      return payload;
    case 'TOKEN_REMOVE' :
      return null;
    default :
      return state;
  }
};