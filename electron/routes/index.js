'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _newClient = require('./clients/newClient');

var _checkOut = require('./clients/checkOut');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


router.post('/new/client', _newClient.newClient);
router.post('/checkout', _checkOut.checkOut);

exports.router = router;