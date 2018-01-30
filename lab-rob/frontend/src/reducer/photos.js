const emptyState = [];

const validatePhoto = photo => {
  if(!photo)
    throw new Error('A photo is required!');

  let {_id, url, description, owner} = photo;
  
  if(!_id || !url || !description || !owner) {
    let errorMessage = null;

    if(!_id)
      errorMessage = '_id is required';
    else if(!url)
      errorMessage = 'url is required';
    else if(!description)
      errorMessage = 'description is required';
    else if(!owner)
      errorMessage = 'owner is required';

    throw new Error(errorMessage);
  }
};

export default (state = emptyState, {type, payload}) => {
  switch(type) {
    case 'PHOTOS_SET':
      if(!Array.isArray(payload))
        throw new Error('photos must be an array!');

      payload.forEach(validatePhoto);

      return payload;
    case 'PHOTO_CREATE':
      validatePhoto(payload);
      return [payload, ...state];
    case 'PHOTO_REMOVE':
      validatePhoto(payload);
      return state.filter(photo => photo._id !== payload._id);
    case 'TOKEN_REMOVE':
      return emptyState;
    default:
      return state;
  }
};