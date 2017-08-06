"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var React = require("react");
var server_1 = require("react-dom/server");
var index_1 = require("./client/home/index");
var template_1 = require("./server/template");
var server = express();
server.use('/assets', express.static('assets'));
server.get('/', function (req, res) {
    var appString = server_1.renderToString(React.createElement(index_1.default));
    res.send(template_1.default({
        body: appString,
        title: 'Hello World from the server'
    }));
});
server.listen(8080);
//# sourceMappingURL=server.js.map