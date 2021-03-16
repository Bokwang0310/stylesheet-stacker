import { combineReducers } from 'redux';

import sheets from './sheets';
import addform from './addform';
import sheet from './sheet';
import sheetFab from './sheetFab';

export default combineReducers({ sheets, addform, sheet, sheetFab });
