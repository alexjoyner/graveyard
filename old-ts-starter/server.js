"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const React = require("react");
const server_1 = require("react-dom/server");
const index_1 = require("./client/home/index");
const template_1 = require("./server/template");
const server = express();
server.use('/assets', express.static('assets'));
server.get('/', (req, res) => {
    const appString = server_1.renderToString(React.createElement(index_1.default));
    res.send(template_1.default({
        body: appString,
        title: 'Hello World from the server'
    }));
});
server.listen(8080, () => {
    console.log('App started on port 8080');
});
//# sourceMappingURL=server.js.map