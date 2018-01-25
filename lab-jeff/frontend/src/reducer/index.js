import { combineReducers } from 'redux';
import token from './token.js';
import favorite from './favorite';
export default combineReducers({ token, favorite });
