import superagent from 'superagent';

export const setProfile = (user) => ({
  type: 'SET_PROFILE',
  payload: user,
});

export const createProfile = profile => store => {
  let {token} = store.getState();
  console.log(profile);
  return superagent.post(`${__API_URL__}/profile`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(profile)
    .then(response => {
      return store.dispatch(setProfile(response.body));
    })
    .catch(error => console.log(error));
};

export const updateProfile = profile => store => {
  let {token} = store.getState();
  return superagent.put(`${__API_URL__}/profile/${profile._id}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then(response => {
      return store.dispatch(setProfile(response.body));
    });
};

export const getProfile = user => store => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}/profile/myProfile`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setProfile(response.body));
    });
};
