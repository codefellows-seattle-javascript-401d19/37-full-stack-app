import * as cookie from '../lib/cookie';

let token = cookie.fetchCookie('X-Scramblevox-Token');
let initialState = token ? token : null;

export default (state = initialState, action) => {
  let {type, payload} = action;
  switch(type){
    case 'SET_TOKEN':
      return payload;
    case 'REMOVE_TOKEN':
      return null;
    default:
      return state;
  }
};
