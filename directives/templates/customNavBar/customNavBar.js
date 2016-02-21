'use strict';
angular.module('angular.directive.customNavBar', [])
    .directive('customNavBar', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/templates/customNavBar/customNavBar.html'
        };
    });