'use strict';

//Setting up route
angular.module('bounties').config(['$stateProvider',
	function($stateProvider) {
		// Bounties state routing
		$stateProvider.
		state('bounties', {
			abstract: true,
			url: '/bounties',
			template: '<ui-view/>'
		}).
		state('bounties.list', {
			url: '',
			templateUrl: 'modules/bounties/views/list-bounties.client.view.html'
		}).
		state('bounties.create', {
			url: '/create',
			templateUrl: 'modules/bounties/views/create-bounty.client.view.html'
		}).
		state('bounties.view', {
			url: '/:bountyId',
			templateUrl: 'modules/bounties/views/view-bounty.client.view.html'
		}).
		state('bounties.edit', {
			url: '/:bountyId/edit',
			templateUrl: 'modules/bounties/views/edit-bounty.client.view.html'
		});
	}
]);