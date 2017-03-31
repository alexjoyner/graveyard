import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

/* This is the root of our app where everything starts.
* ReactDOM calls the render function to start our app*/
ReactDOM.render(
    /* This provider is the app that will be injected as our
    * application into the root div*/
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={hashHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.xx-appContainer')); // It attaches to the root div in INDEX.html
