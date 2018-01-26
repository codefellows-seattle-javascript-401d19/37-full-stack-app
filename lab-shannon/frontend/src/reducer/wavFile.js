const defaultState = [];

export default (state = defaultState, action) => {
  let {type, payload} = action;
  switch(type){
    case 'SET_WAV':
      return [...state, payload];
    case 'UPDATE_WAV':
      return state.map(wav => {
        wav.id === payload.id ? payload : wav;
      });
    case 'DESTROY_WAV':
      return state.filter(wav => {
        if (wav.id !== payload.id){
          return wav;
        }
      });
    default:
      return state;
  }
};
