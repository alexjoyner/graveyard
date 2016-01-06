'use strict';
angular.module('angular.controller.DropOffCtrl', [])
    .controller('DropOffCtrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        function($scope, $state, $ionicHistory) {
            $scope.goBack = function() {
                $state.go('PickUp');
            };
            $scope.DropOffControl = {};
        }
    ]);