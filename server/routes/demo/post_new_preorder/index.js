'use strict';
var express = require('express'),
	router = express.Router();
//var jwt_verify = require('../../../middleware/jwt_verify');
var coreFunction = require('./_core_function');
import {finalize} from '../../../../utils/server/finalize';

router.post('/',
	/*jwt_verify, <-- for user authentication, must be installed*/
	/*getDB_Client, <-- get client connection to db*/
	function (req, res, next) {
		//req.roCoreFunc = coreFunction;
		req.roCoreFunc = function(req, callback){
			callback(null, 'Hello There!');
		};
		next();
	},
	finalize
);

module.exports = router;
