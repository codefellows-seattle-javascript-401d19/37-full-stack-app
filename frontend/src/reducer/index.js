import {combineReducers} from 'redux';

import categorys from './categorys';
import expenses from './expenses';

export default combineReducers({
  categorys,
  expenses,
});
