'use strict';
angular.module('angular.controller.PayInfoCtrl', [])
    .controller('PayInfoCtrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        function($scope, $state, $ionicHistory) {
            $scope.goBack = function() {
                $ionicHistory.goBack();
            };
            $scope.PayInfoControl = {};
        }
    ]);