const emptyState = null;

const validateProfile = profile => {
  if(!profile)
    throw new Error('Profile is required');
  
  let {username, email, bio, owner} = profile;

  if(!username || !email || !bio || !owner) {
    let errorMessage = null;

    if(!username)
      errorMessage = 'username is required';
    else if(!email)
      errorMessage = 'email is required';
    else if(!bio)
      errorMessage = 'bio is required';
    else if(!owner)
      errorMessage = 'owner is required';

    throw new Error(errorMessage);
  }

  return profile;
};

export default (state = emptyState, {type, payload}) => {
  switch(type) {
    case 'PROFILE_SET':
      return validateProfile(payload);
    case 'TOKEN_REMOVE':
      return emptyState;
    default:
      return state;
  }
};