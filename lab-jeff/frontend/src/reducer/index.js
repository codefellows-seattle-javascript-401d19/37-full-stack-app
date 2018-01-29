import { combineReducers } from 'redux';
import token from './token.js';
import favorite from './favorite';
import wave from './wave';
export default combineReducers({ token, favorite, wave });
