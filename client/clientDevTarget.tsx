import 'react-hot-loader/patch';
import * as React from 'react';
import { render } from 'react-dom';
import App from './home/index';

const renderApp = Component => {
    render(
        <App>
            <Component />
        </App>,
        document.getElementById('ro-root')
    );
}
renderApp(App);

if (module.hot) {
    module.hot.accept('./home/index', () => {
        const Next = require('./home/index').default;
        renderApp(Next);
    })
}