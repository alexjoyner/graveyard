'use strict';
angular.module('angular.directive.newDataForm', [])
    .directive('newDataForm', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '=',
                info: '=',
                index: '@',
                formType: '@',
                pointType: '@'
            },
            templateUrl: './directives/templates/newDataForm/newDataForm.html'
        };
    });