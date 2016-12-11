'use strict';
var express = require('express'),
	router = express.Router();
var jwt_verify = require('../../../middleware/jwt_verify');
var coreFunction = require('./_core_function');
var finalize = require('../../../middleware/finalize');

router.get('/:search_term',
	/*jwt_verify,*/
	function (req, res, next) {
		req.roCoreFunc = coreFunction;
		next();
	},
	finalize
);

module.exports = router;