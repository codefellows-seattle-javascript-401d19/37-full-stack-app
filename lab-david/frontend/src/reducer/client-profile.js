let defaultState = null;

const validateProfile = (profile) => {
  if(!profile)
    throw new Error('hey profile is required');

  let {username, email, bio, owner} = profile; // david - TODO these are properties on the profile model so change them

  if(!username || !email || !bio || !owner)
    throw new Error('invalid profile there');
};

export default (state = defaultState, action) => {
  let {type, payload} = action;

  switch(type){
    case 'CLIENT_PROFILE_SET' :  // david - payload equals profile
      validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE' :
      return defaultState;
    default : 
      return state;
  }
};