'use strict';
angular.module('angular.controller.StartCtrl', [])
.controller('StartCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		$scope.message = 'Testing from StartCtrl';
}]);