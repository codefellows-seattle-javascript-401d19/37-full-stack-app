const emptyState = null;

export default (state = emptyState, {type, payload}) => {
  switch(type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_REMOVE':
      return emptyState;
    default:
      return state;
  }
};