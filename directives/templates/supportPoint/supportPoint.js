'use strict';
angular.module('angular.directive.supportPoint', [])
    .directive('supportPoint', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '=',
                issue: '=',
                info: '=',
                parentIndex: '@',
                index: '@'
            },
            templateUrl: './directives/templates/supportPoint/supportPoint.html'
        };
    });