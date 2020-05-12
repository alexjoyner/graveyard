'use strict';
var express = require('express'),
    router = express.Router();

var itemSets = require('../../questionSets/itemSets');
var roomSet = require('../../questionSets/roomSets');

router.get('/itemSet/:setName', function(req, res) {
	console.log(req.params.setName);
	var items = itemSets(req.params.setName);
    res.send(items);
    res.end();
});
router.get('/rooms', function(req, res) {
	var rooms = roomSet();
	console.log(rooms);
    res.send(rooms);
    res.end();
});
module.exports = router;