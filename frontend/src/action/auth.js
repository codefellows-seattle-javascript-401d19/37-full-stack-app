import superagent from 'superagent';
import * as routes from '../routes';
import * as cookies from '../lib/cookie';

export const setTokenAction = (token) => ({
  type : 'TOKEN_SET',
  payload : token,
});

export const removeTokenAction = () => ({
  type : 'TOKEN_REMOVE',
});

export const logoutAction = () => {
  cookies.cookieDelete('X-Noncents-Token');
  return removeTokenAction();
};



export const signupAction = (user) => (store) => {
  // console.log('signupaction to :', __API_URL__, routes.SIGNUP_ROUTE);
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
      return store.dispatch(setTokenAction(response.text));
    });
};
