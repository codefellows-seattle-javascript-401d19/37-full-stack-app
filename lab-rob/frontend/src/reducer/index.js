import {combineReducers} from 'redux';

import token from './token';
import profile from './profile';
import photo from './photo';

export default combineReducers({
  token,
  profile,
  photo,
});