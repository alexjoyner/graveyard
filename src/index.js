import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'ro-component-library/src/styles/normalize.css';
import 'ro-component-library/src/styles/typography.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducers } from './reducers';

const store = createStore(reducers);

export const Base = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Base />, document.getElementById('root'));
registerServiceWorker();
