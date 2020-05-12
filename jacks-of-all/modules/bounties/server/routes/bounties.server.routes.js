'use strict';

module.exports = function(app) {
	var bounties = require('../controllers/bounties.server.controller');
	var bountiesPolicy = require('../policies/bounties.server.policy');

	// Bounties Routes
	app.route('/api/bounties').all()
		.get(bounties.list).all(bountiesPolicy.isAllowed)
		.post(bounties.create);

	app.route('/api/bounties/:bountyId').all(bountiesPolicy.isAllowed)
		.get(bounties.read)
		.put(bounties.update)
		.delete(bounties.delete);

	app.route('/api/bounties/:userID').all()
		.get(bounties.list).all(bountiesPolicy.isAllowed);

	// Finish by binding the Bounty middleware
	app.param('bountyId', bounties.bountyByID);
	app.param('userID', bounties.findBountyByUserId);

};