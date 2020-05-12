'use strict';
angular.module('angular.controller.JobFeedCtrl', [])
    .controller('JobFeedCtrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        function($scope, $state, $ionicHistory) {
            $scope.goBack = function() {
                $state.go('Dash');
            };
            $scope.JobFeedControl = {};
        }
    ]);