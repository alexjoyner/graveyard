'use strict';
angular.module('angular.controller.CouponCtrl', [])
.controller('CouponCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$state.go('PickUp');
		};
		$scope.message = 'Testing from CouponCtrl';
}]);