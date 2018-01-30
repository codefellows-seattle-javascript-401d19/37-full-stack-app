import superagent from 'superagent';

const apiUrl = API_URL; // eslint-disable-line

const setPhotoAction = photos => ({
  type: 'PHOTOS_SET',
  payload: photos,
});

const createPhotoAction = photo => ({
  type: 'PHOTO_CREATE',
  payload: photo,
});

const removePhotoAction = photo => ({
  type: 'PHOTO_REMOVE',
  payload: photo,
});

export const getPhotosActionRequest = () => (store) => {
  let {token} = store.getState();

  return superagent.get(`${apiUrl}/photos`)
    .set('Authorization', `Bearer ${token}`)
    .then(({body}) => 
      store.dispatch(setPhotoAction(body.data))
    )
    .catch(console.log);
};

export const createPhotoActionRequest = (photo) => (store) => {
  let {token} = store.getState();

  return superagent.post(`${apiUrl}/photos`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .then(({body}) => 
      store.dispatch(createPhotoAction(body))
    )
    .catch(console.log);
};

export const removePhotoActionRequest = (photo) => (store) => {
  let {token} = store.getState();

  return superagent.delete(`${apiUrl}/photos/${photo._id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(response => {
      if(response.status === 204)
        return store.dispatch(removePhotoAction(photo));
      console.log('Remove Photo failed in server');
    })
    .catch(console.log);
};