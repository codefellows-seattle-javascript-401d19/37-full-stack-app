export default store => next => action => {
  try{
    console.log('__ACTION__', action);
    console.log('__STATE__', store.getState());
    let result = next(action);
    return result;
  }catch(error){
    console.log('__ERROR__', error);
    action.error = error;
    return action;
  }
}