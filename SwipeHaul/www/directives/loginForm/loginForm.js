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
                                $rootScope.currentUser = res;
                                PostService.getCurrentHaul().then(
                                    function(res) {
                                        if(res.status.stage === 0){
                                            $state.go('BidView');
                                        }
                                        if(res.status.stage > 0 && res.status.stage < 5){
                                            $state.go('JobProgress');
                                        }
                                    },
                                    function(err) {
                                        $state.go('PickUp');
                                    });
                            } else
                            if (res.role === 'partner') {
                                QuickAlert.alert('Alert!', 'This is a partner account: please create a customer account to continue');
                            } else {
                                QuickAlert.alert('Alert!', 'Internal error: No account role');
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
                        username: 'test@testing.com',
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