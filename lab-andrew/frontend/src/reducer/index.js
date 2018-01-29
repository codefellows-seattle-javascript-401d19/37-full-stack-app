import {combineReducers} from 'redux';
import clientFavorites from './client-favorites';
import clientWaves from './client-waves';
import token from './token.js';
export default combineReducers({token, clientFavorites, clientWaves});