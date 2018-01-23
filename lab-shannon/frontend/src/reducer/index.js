const emptyState = [];

export default (state = emptyState, action) => {
  let {type, payload} = action;
  switch(type){
    default:
      console.log(`reducing groot`);
      return state;
  }
};
