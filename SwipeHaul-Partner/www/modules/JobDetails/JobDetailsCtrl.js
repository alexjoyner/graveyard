'use strict';
angular.module('angular.controller.JobDetailsCtrl', [])
.controller('JobDetailsCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		$scope.message = 'Testing from JobDetailsCtrl';
		$scope.JobDetailControl = {};
}]);