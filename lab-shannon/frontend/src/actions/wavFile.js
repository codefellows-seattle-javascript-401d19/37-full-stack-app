import superagent from 'superagent';

//------------- Sync actions -------------//

export const setAction = (wav) => ({
  type: 'SET_WAV',
  payload: wav,
});

export const updateAction = (wav) => ({
  type: 'UPDATE_WAV',
  payload: wav,
});

export const destroyAction = () => ({
  type: 'DESTROY_WAV',
});

//------------- Async actions -------------//

export const getActionRequest = () => store => {
  let {token} = store.getState();
  superagent.get(`${__API_URL__}/waves`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};
export const setActionRequest = (wav) => store => {
  let {token} = store.getState();
  superagent.post(`${__API_URL__}/waves/${wav.transform}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .field('wavename', wav.wavename)
    .attach('wave', wav.wave)
    .then(response => {
      console.log(response.body, `response body`);
      return store.dispatch(setAction(response.body));
    });
};
export const updateActionRequest = (wav) => store => {
  let {token} = store.getState();
  superagent.put(`${__API_URL__}/waves`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .field('wavename', 'testname')
    .attach('wave', wav.wave)
    .then(response => {
      return store.dispatch(updateAction(response.body)); //if things won't update correctly later, look back here; profile updates are handled differently and that might be important
    });
};
export const destroyActionRequest = () => store => {
  let {token} = store.getState();
  superagent.delete(`${__API_URL__}/waves`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(destroyAction());
    });
};
