'use strict';
angular.module('angular.service.BidService', [])
    .service('BidService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            this.newBid = function(info) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/bids/hauls/newBid', info)
                    .success(function(res) {
                        console.log('newBid Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('newBid Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };

        }
    ]);