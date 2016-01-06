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

        }
    ]);