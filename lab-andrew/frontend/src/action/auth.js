import superagent from 'superagent';
import * as routes from '../routes';
import * as cookie from '../lib/cookie';

export const setTokenAction = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeTokenAction = () => ({
  type: 'TOKEN_REMOVE',
});

export const logoutAction = () => {
  cookie.cookieDelete('X-scrambleVox-Token');
  return removeTokenAction();
};

export const signupAction = user => store => {
  return superagent.post(`${__API_URL__}${routes.SIGNUP_ROUTE}`) //eslint-disable-line
    .send(user)
    .withCredentials()
    .then(response => {
      console.log({response});
      return store.dispatch(setTokenAction(JSON.parse(response.text).token));
    })
    .catch(console.error);
};

export const loginAction = user => store => {
  return superagent.get(`${__API_URL__}${routes.LOGIN_ROUTE}`) //eslint-disable-line
    .auth(user.username, user.password)
    .withCredentials()
    .then(response => {

      console.log(response);
      return store.dispatch(setTokenAction(JSON.parse(response.text).token));
    });
};