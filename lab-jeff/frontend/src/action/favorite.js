import superagent from 'superagent';
import * as routes from '../routes';

//--------------------------------------------------------
// SYNC
//--------------------------------------------------------

export const setAction = favorite => ({
  type: 'FAVORITE_SET',
  payload: favorite,
});

//--------------------------------------------------------
// ASYNC
//--------------------------------------------------------

export const updateAction = favorite => store => {
  let { token } = store.getState();

  return superagent
    .put(`${__API__URL__}${routes.FAVORITE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(favorite)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

export const fetchAction = () => store => {
  let { token } = store.getState();

  return superagent
    .get(`${__API__URL__}${routes.FAVORITE_ROUTE}/me`)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};
