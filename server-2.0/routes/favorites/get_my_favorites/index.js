'use strict';
var express = require('express'),
	router = express.Router();
var jwt_verify = require('../../../middleware/jwt_verify');
var sql_query = require('../../../middleware/sql_query.js'),
	getDB_Client = sql_query.getDB_Client; // Gets db client roConClient and roDone;
var get_my_profile = require('./_core_function');

router.get('/',
	jwt_verify,
	getDB_Client,
	function(req, res){
		req.roDone();
		get_my_profile(req, function (err, favorites) {
			if(err) {
				res.status(err.status).send(err.messages).end();
				return;
			}
			res.status(200).send(favorites).end();
		})
	});

module.exports = router;