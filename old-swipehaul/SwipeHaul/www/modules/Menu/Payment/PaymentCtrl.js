'use strict';
angular.module('angular.controller.PaymentCtrl', [])
.controller('PaymentCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$state.go('PickUp');
		};
		$scope.message = 'Testing from PaymentCtrl';
}]);