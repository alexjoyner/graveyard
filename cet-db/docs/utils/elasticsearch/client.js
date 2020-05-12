'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.client = undefined;

var _elasticsearch = require('elasticsearch');

var _elasticsearch2 = _interopRequireDefault(_elasticsearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bonsai_url = process.env.NODE_ENV === 'production' ? process.env.BONSAI_URL : 'localhost:9200';


var client = new _elasticsearch2.default.Client({
	host: bonsai_url
});

exports.client = client;