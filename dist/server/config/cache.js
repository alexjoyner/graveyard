'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
// Node Cache
var node_cache = require('node-cache');

var DELETE_CACHED_ITEM_AFTER_X_SECONDS = 86400; /*A full day*/
var CHECK_FOR_OLD_CACHE_ITEMS_AFTER_X_SECONDS = 3600 * 4; /*Four hours*/

var PRIMARY_CACHE = exports.PRIMARY_CACHE = new node_cache({
	stdTTL: DELETE_CACHED_ITEM_AFTER_X_SECONDS,
	checkperiod: CHECK_FOR_OLD_CACHE_ITEMS_AFTER_X_SECONDS
});