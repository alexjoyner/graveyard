'use strict';
angular.module('angular.controller.ExpectationsCtrl', [])
    .controller('ExpectationsCtrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        function($scope, $state, $ionicHistory) {
            $scope.goBack = function() {
                $ionicHistory.goBack();
            };
            $scope.ExpectationsControl = {};
        }
    ]);