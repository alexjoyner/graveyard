import {expect} from 'chai';
import {webpack_dev_config} from './webpack-dev';

describe('Webpack dev', () => {
	it('Should return a configuration object', () => {
		expect(webpack_dev_config('.')).to.be.instanceOf(Object);
	});
});
