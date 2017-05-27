import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import reducers from './combine_reducers';
import routes from './routes';
require('./globalStyles.sass');
const CREATE_STORE_WITH_PROMISES = applyMiddleware(promise)(createStore);
const STORE_WITH_PROMISES = CREATE_STORE_WITH_PROMISES(reducers);

const BASE_PROVIDER_ELEMENT = (
	<Provider store={STORE_WITH_PROMISES}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>);

const BASE_INDEX_HTML_APP_ELEMENT = document.querySelector('.cet-appContainer');


ReactDOM.render(BASE_PROVIDER_ELEMENT, BASE_INDEX_HTML_APP_ELEMENT);
