'use strict';
angular.module('angular.service.consService', [])
    .service('consService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            this.getCons = function(id) {
                var defer = $q.defer();
                $http.get($rootScope.endpoint + '/cons/getCons/' + id)
                    .success(function(res) {
                        console.log('getCons Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('getCons Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };

        }
    ]);