'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Client = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _errors = require('./errors');

var _readFileData = require('./readFileData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function () {
	function Client(_ref) {
		var clientName = _ref.clientName,
		    problemDesc = _ref.problemDesc;

		_classCallCheck(this, Client);

		this.clientName = clientName.toLowerCase();
		this.description = problemDesc;
		this.check_in = new Date();
		return this;
	}

	_createClass(Client, [{
		key: 'saveClient',
		value: function saveClient(callback) {
			var clients = this._getAllClients();
			var newClient = this.getNewClientData();
			if (this._clientAlreadyExists(clients)) {
				return callback(_errors.CLIENT_EXISTS);
			}
			this._writeClientsToDisk(clients, newClient);
			callback();
			return this;
		}
	}, {
		key: 'checkOut',
		value: function checkOut(callback) {
			var clients = this._getAllClients();
			if (!this._clientAlreadyExists(clients)) {
				return callback(_errors.CLIENT_DOESNT_EXIST);
			}
			var existingClientIndex = this._getExistingClientIndex(clients);
			if (clients[existingClientIndex].checkOut) {
				return callback(_errors.ALREADY_CHECKED_OUT);
			}
			clients[existingClientIndex]['checkOut'] = new Date();
			this._writeClientsToDisk(clients);
			callback();
			return this;
		}
	}, {
		key: '_getAllClients',
		value: function _getAllClients() {
			return (0, _readFileData.readFileData)('clients.txt');
		}
	}, {
		key: '_getExistingClient',
		value: function _getExistingClient(clients) {
			var _this = this;

			return clients.filter(function (client) {
				return client.clientName === _this.clientName;
			});
		}
	}, {
		key: '_getExistingClientIndex',
		value: function _getExistingClientIndex(clients) {
			for (var i = 0; i < clients.length; i++) {
				if (clients[i].clientName === this.clientName) {
					return i;
				}
			}
		}
	}, {
		key: '_clientAlreadyExists',
		value: function _clientAlreadyExists(clients) {
			return this._getExistingClient(clients).length !== 0;
		}
	}, {
		key: '_writeClientsToDisk',
		value: function _writeClientsToDisk(allClients, newClient) {
			if (newClient) {
				allClients.push(newClient);
			}
			_fs2.default.writeFileSync('clients.txt', JSON.stringify(allClients));
		}
	}, {
		key: 'getNewClientData',
		value: function getNewClientData() {
			return {
				clientName: this.clientName,
				description: this.description,
				checkIn: this.check_in
			};
		}
	}]);

	return Client;
}();

exports.Client = Client;