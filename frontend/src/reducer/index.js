import {combineReducers} from 'redux';
import clients from './clients.js';

import tokens from './tokens';

export default combineReducers({
  tokens,
  clients,
});
