'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setAccessHeaderMiddleware = setAccessHeaderMiddleware;
var ALLOWED_METHODS = 'GET, POST, OPTIONS, DELETE';
var ALLOWED_HEADERS = 'X-Requested-With,content-type,x-access-token';
// TODO: It's dangerous to leave this '*'
var ALLOWED_WEBSITE_CONNECTIONS = '*';
function setAccessHeaderMiddleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_WEBSITE_CONNECTIONS);
    res.setHeader('Access-Control-Allow-Methods', ALLOWED_METHODS);
    res.setHeader('Access-Control-Allow-Headers', ALLOWED_HEADERS);
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
}