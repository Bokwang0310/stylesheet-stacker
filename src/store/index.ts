import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import { createStore } from 'redux';
import rootReducer from './modules';

export const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);
