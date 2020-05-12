'use strict';

var _chai = require('chai');

var _rewire = require('rewire');

var _rewire2 = _interopRequireDefault(_rewire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DB Config', function () {
	var dbConfig = (0, _rewire2.default)('./db');

	it('should return a correct instance of development cache', function () {
		/*  No need to set production environment,
   * that is the Environment we set with NODE_ENV
   * at the test script.
   * */
		// let ENVIRONMENT = 'development';
		// dbConfig.__set__('ENVIRONMENT', ENVIRONMENT);

		(0, _chai.expect)(dbConfig.getConfig()).to.deep.equal({
			jwt_secret: 'inputYourTokenSecretKeyHERE',
			env: 'development',
			primaryDB: 'yourProjectDevDbLink',
			searchDB: 'yourProjectDevSearchDbLink'
		});
	});
	it('should return a correct instance of production cache', function () {
		var ENVIRONMENT = 'production';
		dbConfig.__set__('ENVIRONMENT', ENVIRONMENT);

		(0, _chai.expect)(dbConfig.getConfig()).to.deep.equal({
			jwt_secret: 'inputYourTokenSecretKeyHERE',
			env: 'production',
			primaryDB: 'yourProjectProductionDbLink',
			searchDB: 'yourProjectProductionSearchDbLink'
		});
	});
});