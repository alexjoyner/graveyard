'use strict';
angular.module('angular.controller.ReviewCtrl', [])
.controller('ReviewCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		$scope.ReviewControl = {};
}]);