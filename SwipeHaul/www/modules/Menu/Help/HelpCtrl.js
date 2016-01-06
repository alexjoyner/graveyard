'use strict';
angular.module('angular.controller.HelpCtrl', [])
    .controller('HelpCtrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        function($scope, $state, $ionicHistory) {
            $scope.goBack = function() {
                $state.go('PickUp');
            };
            $scope.message = 'Testing from HelpCtrl';
        }
    ]);