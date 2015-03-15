'use strict';

// Configuring the Bounties module
angular.module('bounties').run(['Menus',
	function(Menus) {
		// Add the Bounties dropdown item
		Menus.addMenuItem('topbar', {
			title: 'My Bounties',
			state: 'bounties.list'
		});
	}
]);