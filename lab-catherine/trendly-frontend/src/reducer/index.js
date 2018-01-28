import {combineReducers} from 'redux';
import token from './token';
import clientProfile from './client-profile';
import clientPhoto from './client-photo';
export default combineReducers({
  token,
  clientProfile,
  clientPhoto,
});