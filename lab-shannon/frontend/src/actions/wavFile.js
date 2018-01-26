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

export const getActionRequest = (wav) => store => {
  let {token} = store.getState();
  superagent.get(`${__API_URL__}/waves`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};
export const setActionRequest = (wav) => store => {
  let {token} = store.getState();
  superagent.post(`${__API_URL__}/waves`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type','application/json')
    .send(wav)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};
export const updateActionRequest = (wav) => store => {
  let {token} = store.getState();
  superagent.put(`${__API_URL__}/waves`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .send(wav)
    .then(response => {
      return store.dispatch(updateAction(response.body)); //if things won't update correctly later, look back here; profiles are handled differently and that might be important
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
