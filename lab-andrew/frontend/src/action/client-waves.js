import superagent from 'superagent';
import * as routes from '../routes';

export const setAction = wave => ({
  type: 'CLIENT_WAVE_SET',
  payload: wave,
});

export const removeAction = wave => ({
  type: 'CLIENT_WAVE_REMOVE',
  payload: wave,
});

export const fetchActionRequest = () => store => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.WAVES_ROUTE}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      console.log(response);
      return store.dispatch(setAction(response.body.data));
    });
};

export const createActionRequest = wave => store => {
  let {token} = store.getState();
  console.log('wave on createActionRequest', wave);
  
  return superagent.post(`${__API_URL__}${routes.WAVES_ROUTE}/delay`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .field('wavename', wave.wavename)
    .attach('wave', wave.wave)
    .then(response => {
      console.log(response);
      return store.dispatch(setAction(response.body));
    });

};

export const removeActionRequest = wave => store => {

  let {token} = store.getState();

  return superagent.delete(`${__API_URL__}${routes.WAVES_ROUTE}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(() => {
      return store.dispatch(removeAction(wave));
    });
};