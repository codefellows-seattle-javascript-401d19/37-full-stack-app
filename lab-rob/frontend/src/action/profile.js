import superagent from 'superagent';

const apiUrl = API_URL; //eslint-disable-line

const setProfileAction = profile => ({
  type: 'PROFILE_SET',
  payload: profile,
});

export const createProfileAction = (profile) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${apiUrl}/profiles`)
    .set('Authorization', `Bearer ${token}`)
    .send(profile)
    .then(({body}) => 
      store.dispatch(setProfileAction(body))
    )
    .catch(console.log); // TODO: add error checking
};

export const updateProfileAction = (profile) => (store) => {
  let {token} = store.getState();

  return superagent.put(`${apiUrl}/profiles/${profile._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(profile)
    .then(({body}) =>
      store.dispatch(setProfileAction(body))
    )
    .catch(console.log); // TODO: add error checking
};

export const getProfileAction = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${apiUrl}/profiles/me`)
    .set('Authorization', `Bearer ${token}`)
    .then(({body}) =>
      store.dispatch(setProfileAction(body))
    )
    .catch(response => console.log(response)); // TODO: add error checking
};