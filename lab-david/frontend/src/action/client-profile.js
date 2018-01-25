import superagent from 'superagent';
import * as routes from '../routes';


// david - think about the actions your profiles can do
//         create profile, update profile, get profile ? 

//-------------------------------------------------------------
// SYNC ACTIONS
//-------------------------------------------------------------
const setAction = (profile) => ({
  type : 'TOKEN_SET',
  payload : profile,
});

//-------------------------------------------------------------
// ASYNC ACTIONS
//-------------------------------------------------------------


export const createAction = (profile) => (store) => {
  let {token} = store.getState(); 

  return superagent.post(`${__API_URL__}${routes.PROFILES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json') // david - TODO check what content we are requiring on front end and change
    .send(profile)
    .then(response => {
      return store.dispatch(setAction(response)); // changed this to response from response.body based on snug docs
    });
};



export const updateAction = (profile) => (store) => {
  let {token} = store.getState(); 

  return superagent.put(`${__API_URL__}${routes.PROFILES_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json') // david - TODO check what content we are requiring on front end and change
    .send(profile)
    .then(
      console.log(profile)
    )
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

// david - function meant to get a users own profile
export const fetchAction = () => (store) => {
  let {token} = store.getState(); 

  return superagent.get(`${__API_URL__}${routes.PROFILES_ROUTE}/me`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};
