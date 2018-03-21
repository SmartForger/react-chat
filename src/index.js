import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes';
import './assets/index.css';
import configureStore from './core/configure-store';
import registerServiceWorker from './registerServiceWorker';

const Store = configureStore();

const App = (
  <Provider store={Store}>
    <AppRoutes />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
