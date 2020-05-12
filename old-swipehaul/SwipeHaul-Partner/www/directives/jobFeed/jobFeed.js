'use strict';
angular.module('angular.directive.jobFeed', [])
    .directive('jobFeed', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '=',
                openModal: '&',
                jobDetails: '='
            },
            templateUrl: './directives/jobFeed/jobFeed.html',
            controller: function($scope, $state, PostService, QuickAlert, SocketIo) {
                SocketIo.on('NewHaul', function(jobData) {
                    $scope.api.jobs = $scope.jobs || [];
                    $scope.api.jobs.push(jobData);
                });
                SocketIo.on('JobDeleted', function(jobData) {
                    main.getJobs();
                });
                // Setup bid modal
                // Main Directive constructor
                // --------------------------
                function JobFeed() {
                    this.jobs = [];
                }
                JobFeed.prototype.getJobs = function() {
                    PostService.getJobs().then(
                        function(res) {
                            main.jobs = res;
                            init();
                        },
                        function(err) {
                            return [];
                        });
                };

                // Declare directive main
                // --------------------------
                var main = new JobFeed();
                main.getJobs();

                function init() {
                    $scope.api.jobs = main.jobs;
                    $scope.openDetails = function(indx) {
                        console.log(indx);
                        $state.go('JobDetails', {
                            indx: indx
                        });
                    };
                    // setTimeout(function() {
                    //     $scope.openDetails(0);
                    // }, 10);
                }
            }
        };
    });