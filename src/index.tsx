import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import 'ro-component-library/styles/normalize.css';
import 'ro-component-library/styles/fonts.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
