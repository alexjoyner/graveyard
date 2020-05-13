'use strict';
var express = require('express'),
	router = express.Router();
var sql_query = require('../../../middleware/sql_query.js'),
	getDB_Client = sql_query.getDB_Client; // Gets db client roConClient and roDone;
var coreFunction = require('./_core_function');
var finalize = require('../../../middleware/finalize');

router.get('/:id',
	getDB_Client,
	function (req, res, next) {
		req.roCoreFunc = coreFunction;
		next();
	},
	finalize
);

module.exports = router;