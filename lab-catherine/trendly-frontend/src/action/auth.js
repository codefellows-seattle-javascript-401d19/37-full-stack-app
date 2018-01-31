import superagent from 'superagent';
import * as routes from '../routes';
import * as cookie from '../lib/cookie';

// Sync

export const setTokenAction = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeTokenAction = () => ({
  type: 'TOKEN_REMOVE',
});

export const logoutAction = () => {
  cookie.cookieDelete('X-Trendly-Token');
  return removeTokenAction();
};

// Async

export const signupAction = (user) => (store) => {
  return superagent.post(`${__API_URL__}${routes.SIGNUP_ROUTE}`)
    .send(user)
    .withCredentials()
    .then(response => {
      return store.dispatch(setTokenAction(response.text));
    });

};

export const loginAction = (user) => (store) => {
  return superagent.get(`${__API_URL__}${routes.LOGIN_ROUTE}`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(response => {
      return store.dispatch(setTokenAction(response.text));
    });
};