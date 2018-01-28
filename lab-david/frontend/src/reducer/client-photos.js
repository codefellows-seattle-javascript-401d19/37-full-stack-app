const validatePhoto = (photo) => {
  if(!photo)
    throw new Error('a photo is required');

  // david - optional TODO refactor into IFs so user knows what failed exactly
  if(!photo._id || !photo.url || !photo.description || !photo.owner) 
    throw new Error('the photo is invalid and requires id, url, description and owner');
};

// setting state to default array b/c backend returns empty array
export default(state = [], {type, payload}) => { // david - default  : (state, action)
  switch(type){
    case 'CLIENT_PHOTOS_SET' : 
      if(!Array.isArray(payload))
        throw new Error('client photos must be an array');

      payload.forEach(validatePhoto);
      return payload;

    case 'CLIENT_PHOTO_CREATE' : 
      validatePhoto(payload);
      return [payload, ...state];

    case 'CLIENT_PHOTO_REMOVE' : 
      validatePhoto(payload);
      return state.filter( item => item._id !== payload._id);

    // david - always include this to remove things from store when user logs out
    case 'TOKEN_REMOVE' : 
      return [];

    default :
      return state;

  }
};