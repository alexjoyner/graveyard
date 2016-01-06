'use strict';
angular.module('angular.controller.BidViewCtrl', [])
    .controller('BidViewCtrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        function($scope, $state, $ionicHistory) {
            $scope.goBack = function() {
                $ionicHistory.goBack();
            };
            $scope.BidViewControl = {};
        }
    ]);