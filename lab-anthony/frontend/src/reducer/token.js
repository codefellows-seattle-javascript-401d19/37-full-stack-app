let initiatState = null;

export default (state=initiatState, {type, payload}) => {
  switch(type){
  case 'TOKEN_SET':
    return payload;
  case 'TOKEN_REMOVE':
    return null;
  default:
    return state;
  }
};
