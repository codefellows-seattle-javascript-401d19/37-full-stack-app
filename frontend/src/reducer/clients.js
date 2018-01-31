let initialState = null;

const validateProfile = (profile) => {
  if(!profile)
    throw new Error('profile required');

  let {username, email, bio, owner} = profile;

  if(!username || !email || !bio || !owner)
    throw new Error('invald profile');
};


export default (state = initialState, {type, payload}) => {
  switch(type){
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return initialState;
    default :
      return state;
  }
};
