'use strict';
angular.module('angular.service.pointsService', []).service('pointsService', ['$http', '$q', '$rootScope',
    function($http, $q, $rootScope) {
        this.getPoints = function(issueId, type) {
            var defer = $q.defer();
            $http.get($rootScope.endpoint + '/points/getPoints/' +
                type +
                '/' +
                issueId
            ).success(function(res) {
                console.log('getPoints Success: ', res);
                defer.resolve(res);
            }).error(function(err) {
                console.log('getPoints Error: ', err);
                defer.reject(err);
            });
            return defer.promise;
        };
        this.createPoint = function(info) {
            var defer = $q.defer();
            $http.post(
                $rootScope.endpoint +
                '/points/createPoint',
                info
            ).success(function(res) {
                console.log('createPoint Success: ', res);
                defer.resolve(res);
            }).error(function(err) {
                console.log('createPoint Error: ', err);
                defer.reject(err);
            });
            return defer.promise;
        };

        this.deletePoint = function(info) {
            var defer = $q.defer();
            $http.delete(
                $rootScope.endpoint +
                '/points/deletePoint/' +
                info.type +
                '/' +
                info.issueId +
                '/' +
                info.pointId
            ).success(function(res) {
                console.log('deletePoint Success: ', res);
                defer.resolve(res);
            }).error(function(err) {
                console.log('deletePoint Error: ', err);
                defer.reject(err);
            });
            return defer.promise;
        };
    }
]);