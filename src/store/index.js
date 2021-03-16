import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore } from 'redux';
import reducers from './modules';

export default createStore(reducers, composeWithDevTools());
