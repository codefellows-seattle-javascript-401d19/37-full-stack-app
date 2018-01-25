import superagent from 'superagent';

const apiUrl = API_URL; //eslint-disable-line

const setProfileAction = user => ({
  type: 'PROFILE_SET',
  payload: user,
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

export const updateProfileAction = (user) => (store) => {
  let {token} = store.getState();

  return superagent.put(`${apiUrl}/profiles/${user._id}`)
    .set('Authorization', `Bearer ${token}`) // TODO: look into changing user variable
    .send(user)
    .then(({body}) =>
      store.dispatch(setProfileAction(body))
    )
    .catch(console.log); // TODO: add error checking
};

export const fetchAction = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${apiUrl}/profiles/me`)
    .set('Authorization', `Bearer ${token}`)
    .then(({body}) => 
      store.dispatch(setProfileAction(body))
    )
    .catch(console.log); // TODO: add error checking
};