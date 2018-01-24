import superagent from 'superagent';

// ----------------- SYNCHRONOUS ACTIONS -----------------
export const setTokenAction = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeTokenAction = () => ({
  type: 'TOKEN_REMOVE',
});

// ----------------- ASYNCHRONOUS ACTIONS -----------------
export const signupAction = (user) => (store) => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    // .withCredentials()
    .then(response => {
      console.log('__SIGNUP_RESPONSE__', { response });
      return store.dispatch(setTokenAction(response.body.token));
    });
};

export const loginAction = (user) => (store) => {
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    // .withCredentials()
    .then(response => {
      console.log('__SIGNUP_RESPONSE__', { response });
      return store.dispatch(setTokenAction(response.body.token));
    });
};