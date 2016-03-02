'use strict';
angular.module('angular.service.supportsService', [])
    .service('supportsService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            this.createProSupport = function(info) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/support/createProSupport', info)
                    .success(function(res) {
                        console.log('createProSupport Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('createProSupport Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.createConSupport = function(info) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/support/createConSupport', info)
                    .success(function(res) {
                        console.log('createConSupport Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('createConSupport Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.removeProSupport = function(issueId, pointId, supportId) {
                var defer = $q.defer();
                $http.delete(
                        $rootScope.endpoint +
                        '/support/removeProSupport/' +
                        issueId + '/' +
                        pointId + '/' +
                        supportId)
                    .success(function(res) {
                        console.log('removeProSupport Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('removeProSupport Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.removeConSupport = function(issueId, pointId, supportId) {
                var defer = $q.defer();
                $http.delete(
                        $rootScope.endpoint +
                        '/support/removeConSupport/' +
                        issueId + '/' +
                        pointId + '/' +
                        supportId)
                    .success(function(res) {
                        console.log('removeConSupport Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('removeConSupport Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };

        }
    ]);