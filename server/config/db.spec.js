import {expect} from 'chai';
import {APP_CONFIG_SETTINGS} from './db';


describe('DB Config', () => {
	it('should return a new instance of node cache', () => {
		expect(APP_CONFIG_SETTINGS).to.deep.equal({
			jwt_secret: 'inputYourTokenSecretKeyHERE',
			env: 'production',
			primaryDB: 'yourProjectProductionDbLink',
			searchDB: 'yourProjectProductionSearchDbLink'
		});
	});
});
