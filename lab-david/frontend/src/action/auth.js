import superagent from 'superagent';
import * as routes from '../routes';
import * as cookies from '../lib/cookie';

//-------------------------------------------------------------
// SYNC
//-------------------------------------------------------------
export const setTokenAction = (token) => ({
  type : 'TOKEN_SET',
  payload : token,
});

export const removeTokenAction = () => ({
  type : 'TOKEN_REMOVE',
});

export const logoutAction = () => {
  cookies.cookieDelete('SCRAMBLEVOX-Token'); // david - TODO figure out what should be deleted
  return removeTokenAction();
};

//-------------------------------------------------------------
// ASYNC
//-------------------------------------------------------------
export const signupAction = (user) => (store) => {
  return superagent.post(`${__API_URL__}${routes.SIGNUP_ROUTE}`)
    .send(user)
    .withCredentials()
    .then(response => {
      console.log({response});
      return store.dispatch(setTokenAction(response.text));
    });
};

export const loginAction = (user) => (store) => {
  return superagent.get(`${__API_URL__}${routes.LOGIN_ROUTE}`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(response => {
      console.log({response});
      // TODO : .text will change 
      return store.dispatch(setTokenAction(response.text));
    });
};