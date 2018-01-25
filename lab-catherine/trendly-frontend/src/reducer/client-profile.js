export const validateProfile = (profile) => {
  if(!profile)
    throw new Error('profile is required !');

  let {meetupMemberId, name, phoneNumber} = profile;

  if(!meetupMemberId || !name || !phoneNumber)
    throw new Error('invalid profile!');
};

export default (state = null, action) => {
  let {type, payload} = action;
  switch(type) {
    case 'CLIENT_PROFILE_SET':
      validatProfile(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default: 
      return state;
  }
};