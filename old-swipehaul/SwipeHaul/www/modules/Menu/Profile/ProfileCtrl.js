'use strict';
angular.module('angular.controller.ProfileCtrl', [])
    .controller('ProfileCtrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        '$rootScope',
        function($scope, $state, $ionicHistory, $rootScope) {
            $scope.goBack = function() {
                $state.go('PickUp');
            };
            $scope.message = 'Testing from ProfileCtrl';
            $scope.me = $rootScope.currentUser;
        }
    ]);