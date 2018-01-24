import superagent from 'superagent';

import {LOGIN_ROUTE, SIGNUP_ROUTE, ROOT_ROUTE, DASHBOARD_ROUTE} from '../../routes';

export const setTokenAction = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeToken = () => ({
  type: 'TOKEN_REMOVE',
});

export const signupAction = (user) => (store) => { // TODO: refactor to work for either model
  return superagent.post(`${__API_URL__}/company${SIGNUP_ROUTE}`) //eslint-disable-line
    .send(user)
    .withCredentials()
    .then(response => store.dispatch(setTokenAction(response.body.token)))
    .catch(console.log); // TODO: add error checking
};

export const loginAction = (user) => (store) => { // TODO: refactor to work for either model
  return superagent.get(`${__API_URL__}/company${LOGIN_ROUTE}`) //eslint-disable-line
    .auth(user.companyName, user.password) // TODO: refactor to work for either model
    .withCredentials()
    .then(response => store.dispatch(setTokenAction(response.body.token)))
    .catch(console.log); // TODO: add error checking
};