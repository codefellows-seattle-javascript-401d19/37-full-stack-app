import superagent from 'superagent';

import {cookieDelete} from '../lib/cookie';

const COOKIE = 'X-Sluggram-Token';

export const setTokenAction = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeTokenAction = () => ({
  type: 'TOKEN_REMOVE',
});

export const logoutAction = () => {
  cookieDelete(COOKIE);
  return removeTokenAction();
};

export const signupAction = (user) => (store) => {
  return superagent.post(`${API_URL}/signup`) //eslint-disable-line
    .send(user)
    .withCredentials()
    .then(({text}) => 
      store.dispatch(setTokenAction(text)))
    .catch(console.log); // TODO: add error checking
};

export const loginAction = (user) => (store) => {
  return superagent.get(`${API_URL}/login`) //eslint-disable-line
    .auth(user.username, user.password)
    .withCredentials()
    .then(({text}) => 
      store.dispatch(setTokenAction(text)))
    .catch(console.log); // TODO: add error checking
};