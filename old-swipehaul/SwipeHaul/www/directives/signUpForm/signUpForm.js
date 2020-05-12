'use strict';
angular.module('angular.directive.signUpForm', [])
    .directive('signUpForm', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/signUpForm/signUpForm.html',
            controller: function($scope, $state, AuthService, QuickAlert) {
                // Main Directive constructor
                // --------------------------
                function SignUpForm() {

                }
                SignUpForm.prototype.signUp = function(creds) {
                    AuthService.signUp(creds).then(
                        function(res) {
                            $state.go('PayInfo');
                        },
                        function(err) {
                            QuickAlert.alert('Error: ', err);
                        });
                };

                // Declare directive main
                // --------------------------
                var main = new SignUpForm();

                function init() {
                    $scope.creds = {
                        username: '',
                        password: '',
                        mobileNum: '',
                        firstName: '',
                        lastName: '',
                        role: 'customer'
                    };
                    console.log('hey');
                    $scope.api.signUp = function() {
                        console.log('HEY');
                        main.signUp($scope.creds);
                    };
                }
                init();
            }
        };
    });