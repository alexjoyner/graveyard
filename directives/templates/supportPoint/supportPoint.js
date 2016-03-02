'use strict';
angular.module('angular.directive.supportPoint', [])
    .directive('supportPoint', function() {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                api: '=',
                issue: '=',
                info: '=',
                pointId: '@',
                parentIndex: '@',
                index: '@',
                pointType: '@'
            },
            templateUrl: './directives/templates/supportPoint/supportPoint.html',
            controller: function($scope) {
            }
        };
    });