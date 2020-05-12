'use strict';
angular.module('angular.service.BidService', [])
    .service('BidService', ['$http', '$q', '$rootScope',  function($http, $q, $rootScope) {
        this.acceptBid = function(info) {
            var defer = $q.defer();
            console.log('Hey from accept bid in BidService');
            $http.post($rootScope.endpoint + '/bids/hauls/acceptOffer', {
                    haulId: info.haulId,
                    bidAccepted: info.bid
                })
                .success(function(res) {
                    defer.resolve(res);
                })
                .error(function(err) {
                    defer.reject(err);
                });
            return defer.promise;
        };
    }]);