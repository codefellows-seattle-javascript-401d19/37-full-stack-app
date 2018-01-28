const emptyState = null;

export default (state = emptyState, action) => {
  let {type, payload} = action;

  switch(type){
    case 'SET_WAV':
      return payload;
    case 'DESTROY_WAV':
      return null;
    case 'TOKEN_REMOVE':
      return emptyState;
    default:
      return state;
  }
};
