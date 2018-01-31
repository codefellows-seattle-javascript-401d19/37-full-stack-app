import superagent from 'superagent';
import * as routes from '../routes';

export const setAction = wave => ({
  type: 'CLIENT_WAVE_SET',
  payload: wave,
});

export const removeAction = () => ({
  type: 'CLIENT_WAVE_REMOVE',
});

export const fetchActionRequest = () => store => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.WAVES_ROUTE}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    })
    .catch(response => {
      if (response.message === 'Not Found') {
        return;
      } else {
        console.error(response);
      }
    });
};

export const createActionRequest = wave => store => {
  let {token} = store.getState();
  
  return superagent.post(`${__API_URL__}${routes.WAVES_ROUTE}/${wave.transform}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .field('wavename', wave.wavename)
    .attach('wave', wave.wave)
    .then(response => {
      return store.dispatch(setAction(response.body));
    })
    .catch(console.error);

};

export const removeActionRequest = () => store => {

  let {token} = store.getState();

  return superagent.delete(`${__API_URL__}${routes.WAVES_ROUTE}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(() => {
      return store.dispatch(removeAction());
    });
};