import {expect} from 'chai';
import rewire from 'rewire';

describe('DB Config', () => {
	let dbConfig = rewire('./db');

	it('should return a correct instance of production cache', () => {
		let ENVIRONMENT = 'production';
		dbConfig.__set__('ENVIRONMENT', ENVIRONMENT);

		expect(dbConfig.getConfig()).to.deep.equal({
			jwt_secret: 'inputYourTokenSecretKeyHERE',
			env: 'production',
			primaryDB: 'yourProjectProductionDbLink',
			searchDB: 'yourProjectProductionSearchDbLink'
		});
	});
	it('should return a correct instance of development cache', () => {
		let ENVIRONMENT = 'development';
		dbConfig.__set__('ENVIRONMENT', ENVIRONMENT);

		expect(dbConfig.getConfig()).to.deep.equal({
			jwt_secret: 'inputYourTokenSecretKeyHERE',
			env: 'development',
			primaryDB: 'yourProjectDevDbLink',
			searchDB: 'yourProjectDevSearchDbLink'
		});
	});
});
