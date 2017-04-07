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
* and as far as our regular development is concerned, we are just doing
* const store = createstore(reducers);*/
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

/* This is the root of our app where everything starts.
* ReactDOM calls the render function to start our app*/
ReactDOM.render(
	/* The Provider element makes our store available to all of our
	* containers.  It becomes our root component of the app.*/
  <Provider store={store}>
      <Router history={hashHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.xx-appContainer'));
