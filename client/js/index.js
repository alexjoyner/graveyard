import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers';
import routes from './routes';

/* Creating our store with a promise middleware injected so that
* we can Mock Up data for our test environments.  This is for testing purposes
* and as far as our regular development is concerned, we are just foing
* const store = createstore(reducers);*/
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

/* This is the root of our app where everything starts.
* ReactDOM calls the render function to start our app*/
ReactDOM.render(
    /* This provider is the app that will be injected as our
    * application into the root div*/
  <Provider store={store}>
      <Router history={hashHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.xx-appContainer')); // It attaches to the root div in INDEX.html
