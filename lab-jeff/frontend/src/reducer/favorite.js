export const validateFavorite = favorite => {
  if (!favorite) throw new Error('favorite required');
};

export default (state = null, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'FAVORITE_SET':
      validateFavorite(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
