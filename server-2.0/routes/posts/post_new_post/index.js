'use strict';
var express = require('express'),
	router = express.Router();
var jwt_verify = require('../../../middleware/jwt_verify');
var sql_query = require('../../../middleware/sql_query.js'),
	getDB_Client = sql_query.getDB_Client; // Gets db client roConClient and roDone;
var create_new_post = require('./_core_function');
router.post('/',
	jwt_verify,
	getDB_Client,
	function (req, res) {
		create_new_post(req, function(err, post_created){
			if (err) throw err;
			req.roDone();
			res.status(200).send(post_created).end();
		})
	});
module.exports = router;