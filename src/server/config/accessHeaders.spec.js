import {expect} from 'chai';
import sinon from 'sinon';
import {setAccessHeaderMiddleware} from './accessHeaders';


describe('Access Headers Config', () => {
	let callback, fakeResponse;
	beforeEach(() => {
		callback =  sinon.spy();
		fakeResponse = {
			setHeader: callback
		}
	});
	it('should set Access-Control-Allow-Origin', (done) => {
		setAccessHeaderMiddleware({}, fakeResponse, () => {
			expect(fakeResponse.setHeader.calledWith(
				'Access-Control-Allow-Origin', '*'
			)).to.equal(true);
			done();
		});
	});
	it('should set Access-Control-Allow-Methods', (done) => {
		setAccessHeaderMiddleware({}, fakeResponse, () => {
			expect(fakeResponse.setHeader.calledWith(
				'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE'
			)).to.equal(true);
			done();
		});
	});
	it('should set Access-Control-Allow-Headers', (done) => {
		setAccessHeaderMiddleware({}, fakeResponse, () => {
			expect(fakeResponse.setHeader.calledWith(
				'Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token'
			)).to.equal(true);
			done();
		});
	});
	it('should set Access-Control-Allow-Credentials', (done) => {
		setAccessHeaderMiddleware({}, fakeResponse, () => {
			expect(fakeResponse.setHeader.calledWith(
				'Access-Control-Allow-Credentials', true
			)).to.equal(true);
			done();
		});
	});
});
