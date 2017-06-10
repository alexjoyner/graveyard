import { request, sinon } from 'ro-dev-utils';
import {app, server} from './server';
request.agent(server);

describe('loading node express', () => {
	afterEach((done) => {
		server.close();
		done();
	});
	it('responds to /', (done) => {
		request(app)
			.get('/')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=UTF-8')
			.end(done);
	});
	it('should send everything else to /', function testPath(done) {
		request(app)
			.get('/foo/bar')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=UTF-8')
			.end(done);
	});
});
// Don't call the stopHandler when exiting the test.
after(() => {
	process.removeAllListeners('SIGINT');
	process.removeAllListeners('SIGTERM');
});

describe('Signal handling', () => {
	[ 'SIGTERM' /*, 'SIGINT' */  ].forEach(SIGNAL => {

		describe(`${ SIGNAL }`, () => {
			let exitStub, sandbox;

			beforeEach(() => {
				sandbox = sinon.sandbox.create({});
				exitStub  = sandbox.stub(process, 'exit');
			});

			afterEach(() => {
				sandbox.restore();
			});

			it(`should call 'process.exit()' after receiving ${ SIGNAL }`, done => {
				process.once(SIGNAL, () => {
					// At this point, the timeout handler should have triggered, and
					// `process.exit()` should have been called.
					sinon.assert.calledOnce(exitStub);

					// Done.
					done();
				});
				process.kill(process.pid, SIGNAL);
			});
		})

	})

})
