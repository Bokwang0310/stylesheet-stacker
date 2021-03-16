import { combineReducers } from 'redux';

import sheets from './sheets';
import addform from './addform';
import sheet from './sheet';

export default combineReducers({ sheets, addform, sheet });
