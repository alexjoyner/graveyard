'use strict';

var should = require('should'),
	request = require('supertest'),
	path = require('path'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Bounty = mongoose.model('Bounty'),
	express = require(path.resolve('./config/lib/express'));

/**
 * Globals
 */
var app, agent, credentials, user, bounty;

/**
 * Bounty routes tests
 */
describe('Bounty CRUD tests', function() {
	before(function(done) {
		// Get application
		app = express.init(mongoose);
		agent = request.agent(app);

		done();
	});

	beforeEach(function(done) {
		// Create user credentials
		credentials = {
			username: 'username',
			password: 'password'
		};

		// Create a new user
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: credentials.username,
			password: credentials.password,
			provider: 'local'
		});

		// Save a user to the test db and create new Bounty
		user.save(function() {
			bounty = {
				name: 'Bounty Name'
			};

			done();
		});
	});

	it('should be able to save Bounty instance if logged in', function(done) {
		agent.post('/api/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Bounty
				agent.post('/api/bounties')
					.send(bounty)
					.expect(200)
					.end(function(bountySaveErr, bountySaveRes) {
						// Handle Bounty save error
						if (bountySaveErr) done(bountySaveErr);

						// Get a list of Bounties
						agent.get('/api/bounties')
							.end(function(bountiesGetErr, bountiesGetRes) {
								// Handle Bounty save error
								if (bountiesGetErr) done(bountiesGetErr);

								// Get Bounties list
								var bounties = bountiesGetRes.body;

								// Set assertions
								(bounties[0].user._id).should.equal(userId);
								(bounties[0].name).should.match('Bounty Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save Bounty instance if not logged in', function(done) {
		agent.post('/api/bounties')
			.send(bounty)
			.expect(403)
			.end(function(bountySaveErr, bountySaveRes) {
				// Call the assertion callback
				done(bountySaveErr);
			});
	});

	it('should not be able to save Bounty instance if no name is provided', function(done) {
		// Invalidate name field
		bounty.name = '';

		agent.post('/api/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Bounty
				agent.post('/api/bounties')
					.send(bounty)
					.expect(400)
					.end(function(bountySaveErr, bountySaveRes) {
						// Set message assertion
						(bountySaveRes.body.message).should.match('Please fill Bounty name');
						
						// Handle Bounty save error
						done(bountySaveErr);
					});
			});
	});

	it('should be able to update Bounty instance if signed in', function(done) {
		agent.post('/api/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Bounty
				agent.post('/api/bounties')
					.send(bounty)
					.expect(200)
					.end(function(bountySaveErr, bountySaveRes) {
						// Handle Bounty save error
						if (bountySaveErr) done(bountySaveErr);

						// Update Bounty name
						bounty.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing Bounty
						agent.put('/api/bounties/' + bountySaveRes.body._id)
							.send(bounty)
							.expect(200)
							.end(function(bountyUpdateErr, bountyUpdateRes) {
								// Handle Bounty update error
								if (bountyUpdateErr) done(bountyUpdateErr);

								// Set assertions
								(bountyUpdateRes.body._id).should.equal(bountySaveRes.body._id);
								(bountyUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of Bounties if not signed in', function(done) {
		// Create new Bounty model instance
		var bountyObj = new Bounty(bounty);

		// Save the Bounty
		bountyObj.save(function() {
			// Request Bounties
			request(app).get('/api/bounties')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single Bounty if not signed in', function(done) {
		// Create new Bounty model instance
		var bountyObj = new Bounty(bounty);

		// Save the Bounty
		bountyObj.save(function() {
			request(app).get('/api/bounties/' + bountyObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', bounty.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete Bounty instance if signed in', function(done) {
		agent.post('/api/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Bounty
				agent.post('/api/bounties')
					.send(bounty)
					.expect(200)
					.end(function(bountySaveErr, bountySaveRes) {
						// Handle Bounty save error
						if (bountySaveErr) done(bountySaveErr);

						// Delete existing Bounty
						agent.delete('/api/bounties/' + bountySaveRes.body._id)
							.send(bounty)
							.expect(200)
							.end(function(bountyDeleteErr, bountyDeleteRes) {
								// Handle Bounty error error
								if (bountyDeleteErr) done(bountyDeleteErr);

								// Set assertions
								(bountyDeleteRes.body._id).should.equal(bountySaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete Bounty instance if not signed in', function(done) {
		// Set Bounty user 
		bounty.user = user;

		// Create new Bounty model instance
		var bountyObj = new Bounty(bounty);

		// Save the Bounty
		bountyObj.save(function() {
			// Try deleting Bounty
			request(app).delete('/api/bounties/' + bountyObj._id)
			.expect(403)
			.end(function(bountyDeleteErr, bountyDeleteRes) {
				// Set message assertion
				(bountyDeleteRes.body.message).should.match('User is not authorized');

				// Handle Bounty error error
				done(bountyDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec(function(){
			Bounty.remove().exec(function(){
				done();
			});
		});
	});
});
