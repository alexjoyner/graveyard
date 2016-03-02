'use strict';
angular.module('angular.service.consService', []).service('consService', ['$http', '$q', '$rootScope',
    function($http, $q, $rootScope) {
        this.getCons = function(issueId) {
            var defer = $q.defer();
            $http.get($rootScope.endpoint + '/cons/getCons/' + issueId).success(function(res) {
                console.log('getCons Success: ', res);
                defer.resolve(res);
            }).error(function(err) {
                console.log('getCons Error: ', err);
                defer.reject(err);
            });
            return defer.promise;
        };
        this.createCon = function(info) {
            var defer = $q.defer();
            $http.post(
                $rootScope.endpoint +
                '/cons/createCon',
                info
            ).success(function(res) {
                console.log('createCon Success: ', res);
                defer.resolve(res);
            }).error(function(err) {
                console.log('createCon Error: ', err);
                defer.reject(err);
            });
            return defer.promise;
        };
        
        this.deleteCon = function(issueId, id) {
            var defer = $q.defer();
            $http.delete(
                $rootScope.endpoint +
                '/cons/deleteCon/' +
                issueId +
                '/' +
                id
            ).success(function(res) {
                console.log('deleteCon Success: ', res);
                defer.resolve(res);
            }).error(function(err) {
                console.log('deleteCon Error: ', err);
                defer.reject(err);
            });
            return defer.promise;
        };
    }
]);