export const validateWave = wave => {
  if (!wave) throw new Error('wave required');

  let { url, user, wavename } = wave;

  // if (!description) throw new Error('invalid favorite');
};

export default (state = null, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'WAVE_SET':
      validateWave(payload);
      return payload;
    case 'WAVE_CREATE':
      validateWave(payload);
      return payload;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};
