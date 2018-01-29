export const validateWave = wave => {
  if (!wave){
    throw new Error('a wave was required');
  }

  const {_id, url, user} = wave;
  if (!_id || !url || !user){
    throw new Error('The wave is not valid');
  }
};

export default (state = [], {type, payload}) => {
  switch (type) {
    case 'CLIENT_WAVES_SET':
      validateWave(payload);
      return payload;
    case 'CLIENT_WAVE_CREATE':
      validateWave(payload);
      return payload;
    case 'CLIENT_WAVE_REMOVE':
      validateWave(payload);
      return state.filter(item => item._id !== payload._id);
    case 'TOKEN_REMOVE':
      return [];
    default:
      return state;
  }
};