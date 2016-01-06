'use strict';
angular.module('angular.controller.SignUpCtrl', [])
.controller('SignUpCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		$scope.SignUpFormControl = {};
}]);