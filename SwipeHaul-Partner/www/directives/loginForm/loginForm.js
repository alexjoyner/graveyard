'use strict';
angular.module('angular.directive.loginForm', [])
    .directive('loginForm', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/loginForm/loginForm.html',
            controller: function($scope, $state, AuthService, $rootScope, QuickAlert, PostService) {
                // Main Directive constructor
                // --------------------------
                function LoginForm() {

                }
                LoginForm.prototype.attemptLogin = function(creds) {
                    $rootScope.$broadcast('loading:show');
                    AuthService.attemptLogin(creds).then(
                        function(res) {
                            $rootScope.$broadcast('loading:hide');
                            if (res.role === 'customer') {
                                QuickAlert.alert('Alert!', 'This is a customer account: please create a partner account to continue');
                            } else
                            if (res.role === 'partner') {
                                $rootScope.currentUser = res;
                                PostService.getCurrentJob(res._id).then(
                                    function(resHaul) {
                                        $rootScope.currentJob = resHaul;
                                        $state.go('CurrentJob');
                                    },
                                    function(errHaul) {
                                        console.log('Err getCurrentHaul: ', errHaul);
                                        $state.go('Dash');
                                    });
                            } else {
                                QuickAlert.alert('Alert!', 'Internal error: No account role, please try again or contact support. Thank you');
                            }
                        },
                        function(err) {
                            $rootScope.$broadcast('loading:hide');
                            QuickAlert.alert('Error: ', err);
                        });
                };

                // Declare directive main
                // --------------------------
                var main = new LoginForm();

                function init() {
                    $scope.creds = {
                        username: 'tim@tom.com',
                        password: 'testing'
                    };
                    $scope.attemptLogin = function() {
                        main.attemptLogin($scope.creds);
                    };
                    setTimeout(function() {
                        $scope.attemptLogin();
                    });
                }
                init();
            }
        };
    });