import superagent from 'superagent';
import * as routes from '../routes';

export const setAction = (favorite) => ({
  type: 'CLIENT_FAVORITES_SET',
  payload: favorite,
});

export const updateAction = (favorite) => (store) => {
  let {token, userID} = store.getState();

  return superagent.put(`${__API_URL__}${routes.PROFILE_ROUTE}/${userID}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(favorite)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const fetchAction = (user) => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.PROFILE_ROUTE}/${user._id}`) //eslint-disable-line
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};