const emptystate = null;

export default (state = emptystate, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'TOKEN_SET':
      return payload;
  
    case 'TOKEN_REMOVE':
    return null;

    default:
      return state;
  }
}