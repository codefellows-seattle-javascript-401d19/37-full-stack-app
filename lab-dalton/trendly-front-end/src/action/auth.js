import superagent from 'superagent';
import * as routes from '../routes';

// Sync

export const setTokenAction = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeTokenAction = () => ({
  type: 'TOKEN_REMOVE',
});

// Async

export const signupAction = (user) => (store) => {
  return superagent.post(`${__API_URL__}${routes.SIGNUP_ROUTE}`)
    .send(user)
    .then(response => {
      return store.dispatch(setTokenAction(response.text));
    });

};

export const loginAction = (user) => (store) => {
  return superagent.get(`${__API_URL__}${routes.LOGIN_ROUTE}`)
    .auth(user.username, user.password)
    .then(response => {
      return store.dispatch(setTokenAction(response.text));
    });
};