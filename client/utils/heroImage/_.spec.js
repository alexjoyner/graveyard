import {expect, renderComponent} from '../../_startup/test_helper';
import sinion from 'sinon';
import {HeroImage} from './';

describe('hero image component', () => {
	let component, preOrderApp;
	beforeEach(() => {
		preOrderApp = sinion.stub().returns(1);
		component = renderComponent(HeroImage, {
			props: {}
		});
	});
});
