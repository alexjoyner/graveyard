'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _checkIn = require('./jobs/checkIn');

var _checkOut = require('./jobs/checkOut');

var _getClientById = require('./jobs/getClientById');

var _searchUnfinished = require('./jobs/searchUnfinished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/checkIn', _checkIn.checkIn);
router.post('/checkOut/:id', _checkOut.checkOut);
router.get('/client/:id', _getClientById.getClientById);
router.get('/searchUnfinished/:searchTerm', _searchUnfinished.searchUnfinished);
exports.router = router;