import superagent from 'superagent';
import * as routes from '../routes';


// david - think about the actions your profiles can do
//         create profile, update profile, get profile ? 

//-------------------------------------------------------------
// SYNC ACTIONS
//-------------------------------------------------------------
const setAction = (profile) => ({
  type : 'CLIENT_PROFILE_SET',
  payload : profile,
});

//-------------------------------------------------------------
// ASYNC ACTIONS
//-------------------------------------------------------------


export const createAction = (profile) => (store) => {
  let token = store.getState(); // TODO : maybe need .token

  return superagent.post(`${__API_URL__}${routes.PROFILES_ROUTE}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json') // david - TODO check what content we are requiring on front end and change
    .send(profile)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};



export const updateAction = (user) => (store) => {
  return superagent.put(`${__API_URL__}${routes.PROFILES_ROUTE}/${user._id}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json') // david - TODO check what content we are requiring on front end and change
    .send(user)
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};

// david - function meant to get a users own profile
export const fetchAction = () => (store) => {
  return superagent.get(`${__API_URL__}${routes.PROFILES_ROUTE}/me`)
    .set('Authorization', `Bearer ${token}`)
    .send()
    .then(response => {
      return store.dispatch(setAction(response.body));
    });
};
