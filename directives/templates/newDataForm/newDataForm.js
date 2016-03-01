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
            templateUrl: './directives/templates/newDataForm/newDataForm.html',
            controller: function($scope, $state) {
                // Main Directive constructor
                // --------------------------
                function NewDataForm() {

                }
                NewDataForm.prototype.createPoint = function() {

                };

                // Declare directive main
                // --------------------------
                var main = new NewDataForm();

                function init() {

                }
                init();
            }
        };
    });