import superagent from 'superagent';
import * as routes from '../routes';

export const setAction = (photos) => ({
  type: 'CLIENT_PHOTOS_SET',
  payload: photos,
});

export const createAction = (photo) => ({
  type: 'CLIENT_PHOTO_CREATE',
  payload: photo,
});

export const removeAction = (photo) => ({
  type: 'CLIENT_PHOTO_REMOVE',
  payload: photo,
});

export const fetchActionRequest = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`http://localhost:3000${routes.PHOTOS_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then(reponse => {
      return store.dispatch(createAction(response.body));
    });
};

export const createActionRequest = (photo) => (store) => {
  let {token} = store.getState();

  return superagent.post(`http://localhost:3000${routes.PHOTOS_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .then(response => {
      return store.dispatch(createAction(response.body));
    });
};

export const removeActionRequest = (photo) => (store) => {
  return superagent.delete(`http://localhost:3000${routes.PHOTOS_ROUTE}/${photo._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(() => {
      return store.dispatch(removeAction(photo));
    });
};