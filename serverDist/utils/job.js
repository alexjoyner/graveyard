'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Job = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _errors = require('./errors');

var _readFileData = require('./readFileData');

var _client = require('./elasticsearch/client');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Job = function () {
	function Job(_ref) {
		var clientName = _ref.clientName,
		    problemDesc = _ref.problemDesc;

		_classCallCheck(this, Job);

		this.clientName = clientName.toLowerCase();
		this.problemDesc = problemDesc;
		this.check_in = Date.now();
		return this;
	}

	_createClass(Job, [{
		key: 'checkIn',
		value: function checkIn(done) {
			var newClient = this.getNewClientData();
			_client.client.index({
				index: 'jobs',
				type: 'common',
				body: newClient
			}, function (err) {
				if (err) throw err;
				return done();
			});
		}
	}, {
		key: '_getAllClients',
		value: function _getAllClients() {
			return (0, _readFileData.readFileData)('jobs.txt');
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
			_fs2.default.writeFileSync('jobs.txt', JSON.stringify(allClients));
		}
	}, {
		key: 'getNewClientData',
		value: function getNewClientData() {
			return {
				clientName: this.clientName,
				problemDesc: this.problemDesc,
				checkIn: this.check_in
			};
		}
	}], [{
		key: 'checkOut',
		value: function checkOut(checkOutData, done) {
			var _this2 = this;

			var id = checkOutData.id,
			    techSolution = checkOutData.techSolution,
			    techName = checkOutData.techName;

			_async2.default.series([function (callback) {
				_this2.getClient(id, function (err, result) {
					if (err) return done(err);
					if (result._source.checkOut) {
						return done(_errors.ALREADY_CHECKED_OUT);
					}
					callback();
				});
			}, function (callback) {
				_this2._updateJob(id, {
					'checkOut': Date.now(),
					techSolution: techSolution,
					techName: techName
				}, callback);
			}], done);
		}
	}, {
		key: 'searchUnfinished',
		value: function searchUnfinished(term, done) {
			_client.client.search({
				index: 'jobs',
				type: 'common',
				body: {
					query: {
						bool: {
							must: {
								fuzzy: {
									_all: term
								}
							},
							must_not: {
								exists: {
									field: "checkOut"
								}
							}
						}
					}
				}
			}, function (err, data) {
				if (err) return done(err);
				var jobs = data.hits.hits;
				done(null, jobs);
			});
		}
	}, {
		key: 'getClient',
		value: function getClient(id, done) {
			_client.client.get({
				index: 'jobs',
				type: 'common',
				id: id
			}, function (err, body) {
				if (err) return done(_errors.JOB_DOESNT_EXIST);
				return done(null, body);
			});
		}
	}, {
		key: '_updateJob',
		value: function _updateJob(id, data, done) {
			_client.client.update({
				index: 'jobs',
				type: 'common',
				id: id,
				body: {
					"doc": data
				}
			}, function (err) {
				if (err) {
					done(_errors.COULDNT_UPDATE);
					throw err;
				}
				done();
			});
		}
	}]);

	return Job;
}();

exports.Job = Job;