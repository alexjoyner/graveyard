'use strict';
angular.module('angular.controller.BidConsoleCtrl', [])
.controller('BidConsoleCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		$scope.message = 'Testing from BidConsoleCtrl';
		$scope.potAmount = 1234.56;
}]);