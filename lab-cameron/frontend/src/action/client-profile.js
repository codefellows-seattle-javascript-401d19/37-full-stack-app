import superagent from 'superagent';
import * as routes from '../routes';

export const setAction = profile => ({
  type: 'CLIENT_PROFILE_SET',
  payload: profile,
});

export const createAction = profile => store => {
  let { token } = store.getState();

  return superagent.post(`${__API_URL__}${routes.PROFILES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const updateAction = profile => store => {
  let { clientProfile, token } = store.getState();

  return superagent.put(`${__API_URL__}${routes.PROFILES_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(profile)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const fetchAction = () => store => {
  let { clientProfile, token } = store.getState();

  if (clientProfile) {
    return superagent.get(`${__API_URL__}${routes.PROFILES_ROUTE}/${clientProfile.account}`)
      .set('Authorization', `Bearer ${token}`)
      .then(response => {
        return store.dispatch(setAction(response.body));
      });
  }

};
