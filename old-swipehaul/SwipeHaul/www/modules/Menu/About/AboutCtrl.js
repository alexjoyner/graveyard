'use strict';
angular.module('angular.controller.AboutCtrl', [])
.controller('AboutCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$state.go('PickUp');
		};
		$scope.message = 'Testing from AboutCtrl';
}]);