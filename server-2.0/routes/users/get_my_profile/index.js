'use strict';
var express = require('express'),
	router = express.Router();
var jwt_verify = require('../../../middleware/jwt_verify');
var check_cache = require('./_check-cache');
var sql_query = require('../../../middleware/sql_query.js'),
	getDB_Client = sql_query.getDB_Client; // Gets db client roConClient and roDone;
var get_my_profile = require('./_core_function');

router.get('/',
	jwt_verify,
	check_cache,
	getDB_Client,
	function(req, res){
		get_my_profile(req.roConClient,req.decoded, function (err, profile) {
			if(err) {
				res.status(err.status).send(err.messages).end();
				return
			}
			req.mtCache.set('profile_'+ profile._id, profile);
			res.status(200).send(profile).end();
		})
	});

module.exports = router;