export default store => next => action => 
  typeof action === 'function' ? action(store) : next(action);

//This middleware intercepts actions:
//  - if they are a function then execute the function, give the function access to the store, store.dispatch
//  - if they are NOT a function, continue the middleware chain for the action