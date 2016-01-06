'use strict';
angular.module('angular.controller.WhatCtrl', [])
.controller('WhatCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		$scope.WhatListControl = {};
}]);