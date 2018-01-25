export const validateFavorites = (favs) => {
  if (!favs)
    throw new Error('favorites required');

  let {user, favorites, notes} = favs;

  if (!user || !favorites || !notes){
    throw new Error('invalid favorites');
  }
};

export default (state = null, action) => {
  let {type, payload} = action;
  switch (type) {
    case 'CLIENT_FAVORITES_SET':
      validateFavorites(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};