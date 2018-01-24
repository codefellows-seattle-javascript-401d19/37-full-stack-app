import superagent from 'superagent';

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});

export const removeToken = () => ({
  type: 'REMOVE_TOKEN',
});

export const signup = (user) => (store) => {
  return superagent.post(`${API_URL}/signup`) //eslint-disable-line
    .send(user)
    .withCredentials()
    .then(response => {
      console.log(response, `signup response`);
      // return store.dispatch(setToken(response));
    });
};

export const login = (user) => (store) => {
  return superagent.get(`${API_URL}/login`) //eslint-disable-line
    .auth(user.username, user.password)
    .withCredentials()
    .then(response => {
      console.log(response, `login response`);
      // return store.dispatch(setToken(response));
    });
};
