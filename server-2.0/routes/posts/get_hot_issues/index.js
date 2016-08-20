'use strict';
var express = require('express'),
	router = express.Router();
var getPageContents = require('../../../utils/getPageContents');
var sql_query = require('../../../middleware/sql_query.js'),
	getDB_Client = sql_query.getDB_Client; // Gets db client roConClient and roDone;
var get_hot_issues = require('./_core_function');
const ITEMS_PER_PAGE = 25;


router.get('/:page_num',
	getDB_Client,
	function (req, res) {
		var page_num = req.params.page_num;
		get_hot_issues(req, function(err, page_items){
			if (err) throw err;
			req.roDone();
			res.status(200).send(getPageContents(page_num, page_items, ITEMS_PER_PAGE)).end();
		})
	});

module.exports = router;