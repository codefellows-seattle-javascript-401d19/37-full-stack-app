import superagent from 'superagent';


//------------- Synchronous actions -------------//

export const setAction = (user) => ({
  type: 'SET_PROFILE',
  payload: user,
});

//------------- Async actions -------------//

export const createAction = profile => store => {
  let {token} = store.getState();


  return superagent.post(`${__API_URL__}/profile`) //eslint-disable-line
    .set('Authorization',`Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(profile)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const updateAction = profile => store => {
  let {token} = store.getState();

  return superagent.put(`${__API_URL__}/profile/${profile._id}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const getProfile = () => store => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}/profile/myProfile`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};
