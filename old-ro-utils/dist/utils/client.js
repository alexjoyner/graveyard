'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Client = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _error = require('../config/error');

var _readFileData = require('./readFileData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function () {
	function Client(_ref) {
		var firstName = _ref.firstName,
		    lastName = _ref.lastName,
		    description = _ref.description;

		_classCallCheck(this, Client);

		this.firstName = firstName.toLowerCase();
		this.lastName = lastName.toLowerCase();
		this.description = description;
		this.check_in = new Date();
		return this;
	}

	_createClass(Client, [{
		key: 'saveClient',
		value: function saveClient(callback) {
			var clients = this.getAllClients();
			var newClient = this.getNewClientData();
			if (this.clientAlreadyExists(clients)) {
				return callback(_error.CLIENT_EXISTS);
			}
			this.writeNewClientToDisk(clients, newClient);
			callback();
			return this;
		}
	}, {
		key: 'getAllClients',
		value: function getAllClients() {
			return (0, _readFileData.readFileData)('clients.txt');
		}
	}, {
		key: 'clientAlreadyExists',
		value: function clientAlreadyExists(clients) {
			var _this = this;

			var filtered = clients.filter(function (client) {
				return client.firstName === _this.firstName && client.lastName === _this.lastName;
			});
			return filtered.length !== 0;
		}
	}, {
		key: 'writeNewClientToDisk',
		value: function writeNewClientToDisk(allClients, newClient) {
			allClients.push(newClient);
			_fs2.default.writeFileSync('clients.txt', JSON.stringify(allClients));
		}
	}, {
		key: 'getNewClientData',
		value: function getNewClientData() {
			return {
				firstName: this.firstName,
				lastName: this.lastName,
				description: this.description,
				checkIn: this.check_in
			};
		}
	}]);

	return Client;
}();

exports.Client = Client;