'use strict';
angular.module('angular.service.PostService', [])
    .service('PostService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            this.getJobs = function() {
                var defer = $q.defer();
                $http.get($rootScope.endpoint + '/jobs/getHauls')
                    .success(function(res) {
                        console.log('getJobs Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('getJobs Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.getCurrentJob = function() {
                var defer = $q.defer();
                $http.get($rootScope.endpoint + '/jobs/currentJob/' + $rootScope.currentUser._id)
                    .success(function(res) {
                        console.log(res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.finishCurrentStage = function(jobId) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/jobs/nextStage', {
                        partnerId: $rootScope.currentUser._id,
                        jobId: jobId
                    })
                    .success(function(res) {
                        console.log(res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        defer.reject(err);
                    });
                return defer.promise;
            };
        }
    ]);