// Startup point for client side app
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';

ReactDOM.hydrate(<Home />, document.querySelector('#root'));