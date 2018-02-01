import superagent from 'superagent';
import * as routes from '../routes';
import {cookieDelete} from '../lib/util.js';

// Sync

export const setTokenAction = (token) => ({
  type : 'TOKEN_SET',
  payload : token,
});

export const removeTokenAction = () => ({
  type : 'TOKEN_REMOVE',
});

export const logoutAction = () => {
  cookieDelete('X-Sluggram-Token');
  return removeTokenAction();
};

// Async

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
  console.log('__user__', user);
  return superagent.get(`${__API_URL__}${routes.LOGIN_ROUTE}`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(response => {
      console.log({response});
      return store.dispatch(setTokenAction(response.text));
    });
};
