import superagent from 'superagent';
import * as routes from '../routes';

const setAction = (profile) => ({
  type: 'CLIENT_PROFILE_SET',
  payload: profile,
});

export const createAction = (profile) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.PROFILE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', `application/json`)
    .send(profile)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const updateAction = (profile) => (store) => {
  let {token} = store.getState();
  
  return superagent.put(`${__API_URL__}${routes.PROFILE_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', `application/json`)
    .send(profile)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const fetchAction = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.PROFILE_ROUTE}/me`)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};
