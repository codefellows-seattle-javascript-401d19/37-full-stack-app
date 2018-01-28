import superagent from 'superagent';

//------------- Sync actions -------------//

export const setAction = (wav) => ({
  type: 'SET_WAV',
  payload: wav,
});

export const destroyAction = () => ({
  type: 'DESTROY_WAV',
});

//------------- Async actions -------------//

export const getActionRequest = () => store => {
  let {token} = store.getState();
  return superagent.get(`${__API_URL__}/waves`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      console.log(response.body, `is the response body in the get request`);
      return store.dispatch(setAction(response.body));
    });
};
export const setActionRequest = (wav) => store => {
  let {token} = store.getState();
  return superagent.post(`${__API_URL__}/waves/${wav.transform}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .field('wavename', wav.wavename)
    .attach('wave', wav.wave)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};
export const updateActionRequest = (wav) => store => {
  let {token} = store.getState();
  return superagent.put(`${__API_URL__}/waves/${wav.transform}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .field('wavename', wav.wavename)
    .attach('wave', wav.wave)
    .then(response => {
      console.log(response.body, `is the response body in the update request`);
      return store.dispatch(setAction(response.body));
    });
};
export const destroyActionRequest = () => store => {
  let {token} = store.getState();
  return superagent.delete(`${__API_URL__}/waves`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(destroyAction());
    });
};
