'use strict';
angular.module('angular.directive.newIssueForm', [])
    .directive('newIssueForm', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '=',
                info: '='
            },
            templateUrl: './directives/templates/newIssueForm/newIssueForm.html'
        };
    });