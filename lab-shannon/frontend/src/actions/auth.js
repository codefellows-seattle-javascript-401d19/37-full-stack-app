import superagent from 'superagent';

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});

export const removeToken = () => ({
  type: 'REMOVE_TOKEN',
});

export const signup = (user) => (store) => {
  return superagent.post(`http://localhost:3000/signup`)
    .send(user)
    .withCredentials()
    .then(response => {
      console.log(response);
      // return store.dispatch(setToken(response));
    });
};
