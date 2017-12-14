import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from "./components/App/App";
import {rootReducer} from "./components/App/setup-duck/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));