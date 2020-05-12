'use strict';
angular.module('angular.service.AuthService', [])
    .service('AuthService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            this.attemptLogin = function(creds) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/auth/login', creds)
                    .success(function(res) {
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.signUp = function(creds) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/auth/signup', creds)
                    .success(function(res) {
                        console.log('signUp Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('signUp Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            

        }
    ]);