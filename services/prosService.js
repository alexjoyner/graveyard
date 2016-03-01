'use strict';
angular.module('angular.service.prosService', [])
    .service('prosService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            this.getPros = function(issueId) {
                var defer = $q.defer();
                $http.get($rootScope.endpoint + '/pros/getPros/' + issueId)
                    .success(function(res) {
                        console.log('getPros Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('getPros Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.createPro = function(info) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/pros/createPro', info)
                    .success(function(res) {
                        console.log('createPro Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('createPro Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            
        }
    ]);