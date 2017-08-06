import * as express from 'express';
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import App from './client/home/index';
import template from './server/template';

const server = express();
server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
    const appString = renderToString(React.createElement(App));

    res.send(template({
        body: appString,
        title: 'Hello World from the server'
    }));
});

server.listen(8080);