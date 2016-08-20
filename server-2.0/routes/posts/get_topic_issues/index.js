'use strict';
var express = require('express'),
	router = express.Router();
var jwt_verify = require('../../../middleware/jwt_verify');
var sql_query = require('../../../middleware/sql_query.js'),
	getDB_Client = sql_query.getDB_Client; // Gets db client roConClient and roDone;
var core = require('./_core_function');
router.get('/:tag_id/:page_num',
	getDB_Client,
	function (req, res) {
		core(req, function (err, issues) {
			if(err) {
				res.status(err.status).send(err.messages).end();
				return;
			}
			res.status(200).send(issues).end();
		})
	}
);

module.exports = router;