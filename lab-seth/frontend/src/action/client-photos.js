import superagent from 'superagent'
import * as routes from '../routes'


//++++++++++++++++++++++++++++  SYNC  ++++++++++++++++++++++++++++
export const fetchAction = (photos) => ({
  type: 'CLIENT_PHOTOS_FETCH',
  payload: photos,
})

export const createAction = (photo) => ({
  type: 'CLIENT_PHOTO_CREATE',
  payload: photo,
})

export const removeAction = (photo) => ({
  type: 'CLIENT_PHOTO_REMOVE',
  payload: photo,
})

//++++++++++++++++++++++++++++  A SYNC  ++++++++++++++++++++++++++++

export const fetchActionRequest = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${__API_URL__}${routes.PHOTOS_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .then((response) => {
      return store.dispatch(fetchAction(response.body.data))
    })
}

export const createActionRequest = (photo) => (store) => {
  let {token} = store.getState();
  console.log('PHOTO Being Sent to SLUGGRAM BACKEND----', photo)

  return superagent.post(`${__API_URL__}${routes.PHOTOS_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .then(response => {
      console.log('body response after upload', response.body)
      return store.dispatch(createAction(response.body))
    })
}

export const removeActionRequest = (photo) => (store) => {
  let {token} = store.getState();

  return superagent.delete(`${__API_URL__}${routes.PHOTOS_ROUTE}/${photo._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(() => {
      return store.dispatch(removeAction(photo))
    })
}

