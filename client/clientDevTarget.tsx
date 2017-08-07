import * as React from 'react';
import { render } from 'react-dom';
import App from './home/index';

render(<App/>, document.getElementById('ro-app'));

if (module.hot) {
    module.hot.accept('./home/index', () => {
        const Next = require('./home/index').default;
        render(<Next />, document.getElementById('ro-root'));
    })
}