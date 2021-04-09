import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { RecoilRoot } from 'recoil';

import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RecoilRoot>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
