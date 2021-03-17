import { combineReducers } from 'redux';

import sheetList from './sheetList';
import mainAddform from './mainAddform';
import sheet from './sheet';
import sheetFab from './sheetFab';
import sheetAddform from './sheetAddform';

export default combineReducers({
  sheetList,
  mainAddform,
  sheet,
  sheetFab,
  sheetAddform,
});
