export const validatePhoto = photo => {
  if(!photo)
    throw new Error('a photo was required');

  let { _id, url, description, owner } = photo;
  if(!_id || !url || !description || !owner)
    throw new Error('Photo is missing <_id> or <url> or <description> or <owner> property');
};

let emptyState = [];
export default (state = emptyState, {type, payload}) => {
  switch (type) {
    case 'TOKEN_REMOVE':
      return emptyState;     

    case 'CLIENT_PHOTO_SET':
      if(!Array.isArray(payload))
        throw new Error('clientPhotos must be an array');
      
      payload.forEach(validatePhoto);
      return payload;

    case 'CLIENT_PHOTO_CREATE':
      validatePhoto(payload);
      return [payload,...state];

    case 'CLIENT_PHOTO_REMOVE':
      validatePhoto(payload);
      return state.filter(item => item._id !== payload._id);
      
    default:
      return state;
  }
};