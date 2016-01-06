'use strict';
angular.module('angular.directive.jobProgress', [])
    .directive('jobProgress', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/jobProgress/jobProgress.html',
            controller: function($scope, $state, $rootScope) {
                // Main Directive constructor
                // --------------------------
                function JobProgress() {

                }

                // Declare directive main
                // --------------------------
                var main = new JobProgress();

                function init() {
                    $scope.jobInfo = $rootScope.currentHaul;
                }
                init();
            }
        };
    });