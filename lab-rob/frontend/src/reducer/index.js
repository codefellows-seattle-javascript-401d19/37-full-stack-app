import {combineReducers} from 'redux';

import token from './token';
import profile from './profile';
import photos from './photos';

export default combineReducers({
  token,
  profile,
  photos,
});