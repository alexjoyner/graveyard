'use strict';
angular.module('angular.directive.mainPoint', [])
    .directive('mainPoint', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                info: '='
            },
            templateUrl: './directives/templates/mainPoint/mainPoint.html'
        };
    });