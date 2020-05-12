'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./server/config');

Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _config[key];
    }
  });
});

var _routes = require('./server/routes');

Object.keys(_routes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _routes[key];
    }
  });
});