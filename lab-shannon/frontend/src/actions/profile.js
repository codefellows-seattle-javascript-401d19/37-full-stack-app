import superagent from 'superagent';

export const setProfile = (user) => ({
  type: 'SET_PROFILE',
  payload: user,
});

export const createProfile = user => store => {
  let {token} = store.getState();
  return superagent.post(`${__API_URL__}/profile`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(user)
    .then(response => {
      return store.dispatch(setProfile(response));
    });
};
