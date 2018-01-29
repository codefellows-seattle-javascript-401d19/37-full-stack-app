import superagent from 'superagent';
import * as routes from '../routes';

//--------------------------------------------------------
// SYNC
//--------------------------------------------------------

export const setAction = wave => ({
  type: 'WAVE_SET',
  payload: wave,
});

export const createAction = wave => ({
  type: 'WAVE_CREATE',
  payload: wave,
});

//--------------------------------------------------------
// ASYNC
//--------------------------------------------------------

export const updateAction = wave => store => {
  let { token } = store.getState();

  return superagent
    .put(`${__API_URL__}${routes.WAVE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(wave)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const fetchAction = () => store => {
  let { token } = store.getState();

  return superagent
    .get(`${__API_URL__}${routes.WAVE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const createActionRequest = wave => store => {
  let { token } = store.getState();

  return superagent
    .post(`${__API_URL__}${routes.WAVE_ROUTE}/${wave.transform}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', wave.wavename)
    .attach('wave', wave.wave)
    .then(response => {
      return store.dispatch(createAction(response.body));
    });
};
