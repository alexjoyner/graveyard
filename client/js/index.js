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

const renderAppWithReact = ReactDOM.render;
const baseProviderElement = (
	<Provider store={storeWithPromises}>
		<Router history={hashHistory} routes={routes}/>
	</Provider>);
const baseIndexHtmlAppComponent = document.querySelector('.xx-appContainer');


renderAppWithReact(baseProviderElement, baseIndexHtmlAppComponent);
