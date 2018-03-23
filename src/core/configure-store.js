import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './reducers';

const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
  }
  const persistedReducer = persistReducer(persistConfig, appReducer);

  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  const persistor = persistStore(store);

  window.store = store;

  return { store, persistor };
}

export default configureStore;