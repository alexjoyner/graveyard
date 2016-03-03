'use strict';
angular.module('angular.service.votesService', [])
    .service('votesService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            // Vote issue
            this.voteIssue = function(info) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/votes/issue', info)
                    .success(function(res) {
                        console.log('voteIssue Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('voteIssue Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };

            // Vote point
            this.votePoint = function(info) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/votes/point', info)
                    .success(function(res) {
                        console.log('votePoint Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('votePoint Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            // Vote support
            this.voteSupport = function(info) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/votes/support', info)
                    .success(function(res) {
                        console.log('voteSupport Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('voteSupport Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
        }
    ]);