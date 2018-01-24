import * as cookie from './lib/cookie';

const SCRAMBLEVOX_COOKIE = 'X-Budget-Token'; // TODO set up x-budget-token in backend - attach in backend when it sets up token
let token = cookie.cookieFetch(SCRAMBLEVOX_COOKIE);

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