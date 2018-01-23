import superagent from 'superagent';

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token,
});
