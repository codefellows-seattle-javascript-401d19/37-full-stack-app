const emptyState = null;

export default (state = emptyState, action) => {
  let {type, payload} = action;

  switch(type){
    case 'SET_PROFILE':
      return payload;
    case 'REMOVE_TOKEN':
      return null;
    default:
      return state;
  }
};
