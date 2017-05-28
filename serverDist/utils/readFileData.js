'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.readFileData = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readFileData(fileName) {
	var file = _fs2.default.readFileSync(fileName);
	return JSON.parse(file);
}

exports.readFileData = readFileData;