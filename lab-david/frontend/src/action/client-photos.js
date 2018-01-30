import superagent from 'superagent';
import * as routes from '../reducer';


//-------------------------------------------------------------
// SYNC ACTIONS
// david - reducer listens for these
//-------------------------------------------------------------
export const setAction = (photos) => ({
  type : 'CLIENT_PHOTOS_SET',
  payload : photos,
});
  
export const createAction = (photo) => ({
  type : 'CLIENT_PHOTO_CREATE',
  payload : photo,
});

export const removeAction = (photo) => ({
  type : 'CLIENT_PHOTO_REMOVE',
  payload : photo,
});



//-------------------------------------------------------------
// ASYNC ACTIONS
// david - reducer doesnt listen to these
//-------------------------------------------------------------


// this is what sets tha actions on the back-end
export const fetchActionRequest = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.PHOTOS_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(setAction(response.body.data));
    });

};


export const createActionRequest = (photo) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.PHOTOS_ROUTE}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      return store.dispatch(createAction(response.body));
    });

};


export const removeActionRequest = (photo) => (store) => {
  let {token} = store.getState();

  return superagent.delete(`${__API_URL__}${routes.PHOTOS_ROUTE}/${photo._id}`)

    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      // david - TODO check response code is 200 to avoid store in corrupt state
      return store.dispatch(removeAction(photo));
    });

};