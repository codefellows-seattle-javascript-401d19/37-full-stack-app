const emptyState = null;

export default (state = emptyState, action) => {
  let {type, payload} = action;

  switch(type){
    case 'SET_PROFILE':
      console.log(payload);
      return payload;
    case 'REMOVE_TOKEN':
      return null;
    default:
      return state;
  }
};
