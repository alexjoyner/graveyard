'use strict';
angular.module('angular.controller.CurrentJobCtrl', [])
    .controller('CurrentJobCtrl', [
        '$scope',
        '$state',
        function($scope, $state) {
            $scope.CurrentJobControl = {};
        }
    ]);