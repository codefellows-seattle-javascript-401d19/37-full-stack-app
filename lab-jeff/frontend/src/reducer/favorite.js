export const validateFavorite = favorite => {
  if (!favorite) throw new Error('favorite required');

  let { description } = favorite;

  if (!description) throw new Error('invalid favorite');
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
