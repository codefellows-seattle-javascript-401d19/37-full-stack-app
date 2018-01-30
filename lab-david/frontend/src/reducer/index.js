import {combineReducers} from 'redux';
import token from './token.js';

import clientProfile from './client-profile';
import clientPhotos from './client-photos';

export default combineReducers({token, clientProfile, clientPhotos});