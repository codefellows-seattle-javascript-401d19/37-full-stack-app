import superagent from 'superagent'
import * as routes from '../routes'


//++++++++++++++++++++++++++++  SYNC  ++++++++++++++++++++++++++++
export const fetchAction = (photos) => ({
  type: 'CLIENT_PHOTOS_FETCH',
  payload: photos,
})

export const createAction = (photo) => ({
  type: 'CLIENT_PHOTO_CREATE',
  paylod: photo,
})

export const removeAction = (photo) => ({
  type: 'CLIENT_PHOTO_REMOVE',
  paylod: photo,
})

//++++++++++++++++++++++++++++  A SYNC  ++++++++++++++++++++++++++++

export const fetchActionRequest = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.PHOTO_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then(() => {
      return store.dispatch(fetchAction(response.body.data))
    })
}

export const createActionRequest = (photo) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${__API_URL__}${routes.PHOTO_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .then(response => {
      return store.dispatch(createAction(response.body))
    })
}

export const removeActionRequest = (photo) => (store) => {
  let {token} = store.getState();

  return superagent.delete(`${__API_URL__}${routes.PHOTO_ROUTE}/${photo._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(() => {
      return store.dispatch(removeAction(photo))
    })
}

