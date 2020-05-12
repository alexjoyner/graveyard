'use strict';
angular.module('angular.directive.payInfo', [])
    .directive('payInfo', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/payInfo/payInfo.html',
            controller: function($scope, $state) {
                // Main Directive constructor
                // --------------------------
                function PayInfo() {

                }
                PayInfo.prototype.submitInfo = function() {
                    $state.go('PickUp');
                };

                // Declare directive main
                // --------------------------
                var main = new PayInfo();

                function init() {
                    $scope.cardInfo = {
                        cardNumber: '',
                        month: '',
                        year: '',
                        cvv: '',
                        country: '',
                        zip: ''
                    }
                    $scope.submitInfo = function() {
                        main.submitInfo();
                    }
                }
                init();
            }
        };
    });