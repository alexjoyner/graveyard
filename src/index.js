import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducers } from './reducers';

const store = createStore(reducers);

const Base = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Base />, document.getElementById('root'));
registerServiceWorker();
