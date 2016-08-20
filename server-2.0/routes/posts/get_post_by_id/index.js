'use strict';
var express = require('express'),
	router = express.Router();
var sql_query = require('../../../middleware/sql_query.js'),
	getDB_Client = sql_query.getDB_Client; // Gets db client roConClient and roDone;
var get_post_by_id = require('./_core_function');
router.get('/:id',
	getDB_Client,
	function (req, res) {
		get_post_by_id(req, function(err, post){
			if(err) {
				res.status(err.status).send(err.messages).end();
				return;
			}
			res.status(200).send(post).end();
		})
	});

module.exports = router;