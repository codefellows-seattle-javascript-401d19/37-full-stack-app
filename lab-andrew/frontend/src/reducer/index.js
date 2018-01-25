import {combineReducers} from 'redux';
import clientFavorites from './client-favorites';
import token from './token.js';
export default combineReducers({token, clientFavorites});