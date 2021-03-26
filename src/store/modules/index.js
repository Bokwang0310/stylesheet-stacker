import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sheetList from './sheetList';
import mainAddform from './mainAddform';
import sheet from './sheet';
import sheetFab from './sheetFab';
import sheetAddform from './sheetAddform';
import mode from './mode';

const persistConfig = {
  key: 'root',
  // key: reducer 객체의 어느 지점에서 부터 데이터를 저장할 것인지 설정해 주는 것
  storage: storage,
  // 위에 import 한 성격의 storage를 지정해준다. 이 경우는 localstorage
  whitelist: ['sheet', 'sheetList'],
  // 유지하고 싶은 데이터를 배열안에 지정
  // string 타입이고 아래 combineReducers에 지정된 값들을 사용=
};

const rootReducer = combineReducers({
  sheetList,
  mainAddform,
  sheet,
  sheetFab,
  sheetAddform,
  mode,
});

export default persistReducer(persistConfig, rootReducer);
