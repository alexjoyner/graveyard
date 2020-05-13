'use strict';
var express = require('express'),
	router = express.Router();
var coreFunction = require('./_core_function');
var finalize = require('../../../middleware/finalize');

router.get('/:tag_id/:page_num',
	function (req, res, next) {
		req.roCoreFunc = coreFunction;
		next();
	},
	finalize
);

module.exports = router;