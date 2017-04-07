import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers';
import routes from './routes';

const createStoreWithPromises = applyMiddleware(promise)(createStore);
const storeWithPromises = createStoreWithPromises(reducers);

/* This is the root of our app where everything starts.
* ReactDOM calls the render function to start our app*/
ReactDOM.render(
	/* The Provider element makes our store available to all of our
	* containers.  It becomes our root component of the app.*/
  <Provider store={storeWithPromises}>
      <Router history={hashHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.xx-appContainer'));
