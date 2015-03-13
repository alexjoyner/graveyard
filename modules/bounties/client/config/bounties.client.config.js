'use strict';

// Configuring the Bounties module
angular.module('bounties').run(['Menus',
	function(Menus) {
		// Add the Bounties dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Bounties',
			state: 'bounties',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'bounties', {
			title: 'List Bounties',
			state: 'bounties.list'
		});
	}
]);