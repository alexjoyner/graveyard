'use strict';
angular.module('angular.controller.HaulersCtrl', [])
.controller('HaulersCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$state.go('PickUp');
		};
		$scope.message = 'Testing from HaulersCtrl';
}]);