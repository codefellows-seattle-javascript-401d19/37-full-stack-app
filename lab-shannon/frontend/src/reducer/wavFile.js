const defaultState = null;

export default (state = defaultState, action) => {
  let {type, payload} = action;
  switch(type){
    case 'SET_WAV':
      return payload;
    case 'UPDATE_WAV':
      return payload;
    case 'DESTROY_WAV':
      return null;
    case 'TOKEN_REMOVE':
      return defaultState;
    default:
      return state;
  }
};
