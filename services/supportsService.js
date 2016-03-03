'use strict';
angular.module('angular.service.supportsService', [])
    .service('supportsService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            this.createSupportPoint = function(info) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/support/createSupportPoint', info)
                    .success(function(res) {
                        console.log('createSupportPoint Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('createSupportPoint Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.removeSupportPoint = function(info) {
                var defer = $q.defer();
                $http.delete(
                        $rootScope.endpoint +
                        '/support/removeSupportPoint/' +
                        info.type + '/' +
                        info.issueId + '/' +
                        info.pointId + '/' +
                        info.supportId)
                    .success(function(res) {
                        console.log('removeSupportPoint Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('removeSupportPoint Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
        }
    ]);