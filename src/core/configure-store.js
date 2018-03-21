import { createStore } from 'redux';

import reducers from './reducers';

const configureStore = () => {
  const store = createStore(reducers);

  window.store = store;

  return store;
}

export default configureStore;