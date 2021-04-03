import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import { createStore } from 'redux';
import reducers from './modules';

export const store = createStore(reducers, composeWithDevTools());
export const persistor = persistStore(store);
