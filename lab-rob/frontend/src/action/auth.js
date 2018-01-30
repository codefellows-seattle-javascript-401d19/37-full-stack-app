import superagent from 'superagent';

import {cookieDelete} from '../lib/cookie';
import {getProfileAction} from '../action/profile';
import {getPhotosActionRequest} from '../action/photos';

const COOKIE = 'X-Sluggram-Token';
const apiUrl = API_URL; // eslint-disable-line

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
  return superagent.post(`${apiUrl}/signup`)
    .send(user)
    .withCredentials()
    .then(({text}) => 
      store.dispatch(setTokenAction(text)))
    .catch(console.log); // TODO: add error checking
};

export const loginAction = (user) => (store) => {
  return superagent.get(`${apiUrl}/login`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(({text}) => 
      store.dispatch(setTokenAction(text)))
    .then(() => 
      store.dispatch(getProfileAction()) // could also perform this action in in landing handleLogin
    )
    .then(() => 
      store.dispatch(getPhotosActionRequest())
    )
    .catch(console.log); // TODO: add error checking
};