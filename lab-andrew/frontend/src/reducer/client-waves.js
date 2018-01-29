export const validateWave = wave => {
  if (!wave){
    throw new Error('a wave was required');
  }

  const {_id, url, user} = wave;
  if (!_id || !url || !user){
    throw new Error('The wave is not valid');
  }
};

export default (state = null, {type, payload}) => {
  switch (type) {
    case 'CLIENT_WAVE_SET':
      validateWave(payload);
      return payload;
    case 'CLIENT_WAVE_REMOVE':
      return null;
    case 'TOKEN_REMOVE':
      return null;
    default:
      return state;
  }
};