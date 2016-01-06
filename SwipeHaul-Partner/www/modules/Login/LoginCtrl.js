'use strict';
angular.module('angular.controller.LoginCtrl', [])
.controller('LoginCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory, AuthService) {
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		$scope.LoginFormControl = {};
}]);