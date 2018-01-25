const emptyState = null;

export default (state = emptyState, action) => {
  let {type, payload} = action;

  switch(type){
    case 'SET_PROFILE':
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
