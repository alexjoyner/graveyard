'use strict';
angular.module('angular.directive.homeIssue', [])
    .directive('homeIssue', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                issue: '=',
				index: '@'
            },
            templateUrl: './directives/templates/homeIssue/homeIssue.html'
        };
    });