import superagent from 'superagent';
import * as routes from '../routes';

export const setAction = waves => ({
  type: 'CLIENT_WAVES_SET',
  payload: waves,
});

export const createAction = wave => ({
  type: 'CLIENT_WAVE_CREATE',
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
      return store.dispatch(setAction(response.body.data));
    });
};

export const createActionRequest = wave => store => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.WAVES_ROUTE}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .field('description', wave.description)
    .attach('wave', wave.wave)
    .then(response => {
      return store.dispatch(createAction(response.body));
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