import superagent from 'superagent';
import {deleteCookie} from '../lib/cookie';

//------------- Synchronous actions -------------//

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});

export const removeToken = () => ({
  type: 'REMOVE_TOKEN',
});


//------------- Async actions -------------//

export const signup = (user) => (store) => {
  return superagent.post(`${__API_URL__}/signup`) //eslint-disable-line
    .send(user)
    .withCredentials()
    .then(response => {
      return store.dispatch(setToken(response.body.token));
    });
};

export const login = (user) => (store) => {
  return superagent.get(`${__API_URL__}/login`) //eslint-disable-line
    .auth(user.username, user.password)
    .withCredentials()
    .then(response => {
      return store.dispatch(setToken(response.body.token));
    });
};

export const logout = () => store => {
  deleteCookie('X-Scramblevox-Token');
  return store.dispatch(removeToken());
};
