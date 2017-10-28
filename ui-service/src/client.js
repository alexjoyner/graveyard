// Startup point for client side app
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import ContextProvider from './helpers/ContextProvider';

const css = new Set(); // CSS for all rendered React components
const context = { insertCss: (...styles) => styles.forEach(style => css.add(style._getCss()))};
ReactDOM.hydrate(
    <ContextProvider context={context}>
        <Home />
    </ContextProvider>
    , document.querySelector('#root'));