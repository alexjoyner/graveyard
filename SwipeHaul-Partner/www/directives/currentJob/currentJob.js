'use strict';
angular.module('angular.directive.currentJob', [])
    .directive('currentJob', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/currentJob/currentJob.html',
            controller: function($scope, $state, $rootScope, SocketIo, PostService, QuickAlert, $timeout) {
                SocketIo.on('Status changed', function(data) {
                    QuickAlert.alert('Customer notified', 'New Status: ' + data);
                });
                //  Declare main directive functions
                // ----------------------------------
                function CurrentJob(job) {
                    this.myJob = job;
                }
                CurrentJob.prototype.updateCurrentJob = function() {
                    PostService.getCurrentJob().then(
                        function(res) {
                            $rootScope.currentJob = res;
                            init();
                        },
                        function(err) {
                            QuickAlert.alert('Error!', err, 'Inbox');
                        });
                };
                CurrentJob.prototype.finishCurrentStage = function() {
                    PostService.finishCurrentStage(this.myJob._id).then(
                        function(res) {
                            main.myJob = res;
                            init();
                        },
                        function(err) {
                            QuickAlert.alert('Error!!!', err);
                        });
                };
                CurrentJob.prototype.getNextStatus = function() {
                    var toReturn = '';
                    switch (this.myJob.status.stage) {
                        case 2:
                            toReturn = 'Arriving';
                            break;
                        case 3:
                            toReturn = 'Start Job';
                            break;
                        case 4:
                            toReturn = 'Mission Accomplished';
                            break;
                    }
                    return toReturn;
                };
                // main directive control progress functions
                var main = new CurrentJob($rootScope.currentJob);
                main.updateCurrentJob();
                var init = function() {
                    if (main.myJob.status.stage < 2)
                        main.finishCurrentStage();
                    // Api variables
                    $scope.api.currentStatus = main.myJob.status.tag;
                    $scope.api.nextStatus = main.getNextStatus();
                };
                // Api functions
                $scope.api.goOn = function() {
                    if ($scope.api.nextStatus !== '') {
                        QuickAlert.confirm('Please confirm', 'Should we update the status of this job to ' + $scope.api.nextStatus + '?')
                            .then(function() {
                                main.finishCurrentStage();
                            });
                    }else{
                        QuickAlert.alert('Error','There is no next status');
                    }
                };
            }
        };
    });