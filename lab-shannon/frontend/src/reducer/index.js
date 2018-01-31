import { combineReducers } from 'redux';
import token from './token';
import profile from './profile';
import wavFile from './wavFile';

export default combineReducers({token, profile}, wavFile);
