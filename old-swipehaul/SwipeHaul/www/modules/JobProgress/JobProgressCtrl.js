'use strict';
angular.module('angular.controller.JobProgressCtrl', [])
    .controller('JobProgressCtrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        function($scope, $state, $ionicHistory) {
            $scope.goBack = function() {
                $ionicHistory.goBack();
            };
            $scope.message = 'Testing from JobProgressCtrl';
            $scope.JobProgressControl = {};
        }
    ]);