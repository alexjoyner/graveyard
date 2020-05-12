'use strict';
angular.module('angular.directive.jobProgress', [])
    .directive('jobProgress', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/jobProgress/jobProgress.html',
            controller: function($scope, $state, $rootScope, SocketIo, QuickAlert, PostService) {
                // SocketIO listeners
                SocketIo.on('Status changed', function(data) {
                    QuickAlert.alert('New Status', 'Job Status: ' + data);
                    $scope.api.currentStatus = data;
                });
                //  Declare main directive functions
                // ----------------------------------
                function InProgress(job) {
                    this.myJob = job;
                }
                InProgress.prototype.updateCurrentHaul = function() {
                    PostService.getCurrentHaul().then(
                        function(res) {
                            main.myJob = res;
                            init();
                        },
                        function(err) {
                            QuickAlert.alert('Error!', err, 'Inbox');
                        });
                };
                // main directive control progress functions
                var main = new InProgress($rootScope.currentHaul);
                main.updateCurrentHaul();
                var init = function() {
                    // Api variables
                    $scope.api.currentStatus = main.myJob.status.tag;
                };
            }
        };
    });