'use strict';
angular.module('angular.controller.DashCtrl', [])
.controller('DashCtrl', [
	'$scope',
	'$state',
	'$ionicHistory',
	function($scope, $state, $ionicHistory) {
		$scope.goBack = function() {
			$ionicHistory.goBack();
		};
		$state.go('JobFeed')
		$scope.message = 'Testing from DashCtrl';
}]);