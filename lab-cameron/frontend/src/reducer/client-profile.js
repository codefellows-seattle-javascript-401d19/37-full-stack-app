export const validateProfile = profile => {
  if (!profile) {
    throw new Error('profile required');
  }

  let { meetupMemberId, name, phoneNumber, account } = profile;

  if (!meetupMemberId || !name || !phoneNumber || !account) {
    throw new Error('invalid profile');
  }

};

export default (state = null, { type, payload }) => {

  switch (type) {
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
