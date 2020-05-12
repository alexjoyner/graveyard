'use strict';
angular.module('angular.controller.Earn$Ctrl', [])
    .controller('Earn$Ctrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        function($scope, $state, $ionicHistory) {
            $scope.goBack = function() {
                $state.go('PickUp');
            };
            $scope.message = 'Testing from Earn$Ctrl';
        }
    ]);