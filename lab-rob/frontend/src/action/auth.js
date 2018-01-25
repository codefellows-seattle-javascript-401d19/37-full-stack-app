import superagent from 'superagent';

export const setTokenAction = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const removeToken = () => ({
  type: 'TOKEN_REMOVE',
});

export const signupAction = (user) => (store) => {
  return superagent.post(`${API_URL}/signup`) //eslint-disable-line
    // .set('Content-Type', 'application/json')
    .send(user)
    .withCredentials()
    .then(response => store.dispatch(setTokenAction(response.text)))
    .catch(console.log); // TODO: add error checking
};

export const loginAction = (user) => (store) => {
  return superagent.get(`${API_URL}/login`) //eslint-disable-line
    .auth(user.username, user.password)
    .withCredentials()
    .then(response => store.dispatch(setTokenAction(response.text)))
    .catch(console.log); // TODO: add error checking
};