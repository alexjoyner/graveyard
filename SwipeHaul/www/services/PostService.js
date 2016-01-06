'use strict';
angular.module('angular.service.PostService', [])
    .service('PostService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            this.postHaul = function(postData, imageIdArray) {
                var defer = $q.defer();
                console.log('Post data: ', postData);
                console.log('imageIdArray: ', imageIdArray);
                var pickup = postData.pickup;
                var dropOff = postData.dropoff;
                var searchComponent = function(compArray, type) {
                    for (var i = 0; i < compArray.length; i++) {
                        if (compArray[i].types[0] === type) {
                            return compArray[i].short_name;
                        }
                    }
                    return 'didn\'t find ' + type;
                };
                $http.post($rootScope.endpoint + '/jobs/postHaul', {
                        who: $rootScope.currentUser._id,
                        type: postData.moveType,
                        what: imageIdArray,
                        where: {
                            pickup: {
                                formatted_address: pickup.formatted_address,
                                postal_code: searchComponent(pickup.address_components, 'postal_code'),
                                country: searchComponent(pickup.address_components, 'country'),
                                lat: pickup.geometry.location.lat(),
                                lng: pickup.geometry.location.lng()
                            },
                            dropOff: {
                                formatted_address: dropOff.formatted_address,
                                postal_code: searchComponent(dropOff.address_components, 'postal_code'),
                                country: searchComponent(dropOff.address_components, 'country'),
                                lat: dropOff.geometry.location.lat(),
                                lng: dropOff.geometry.location.lng()
                            }
                        },
                        obstacles: {
                            stairs: false
                        }
                    })
                    .success(function(res) {
                        console.log(res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.cancelHaul = function(haulId) {
                var defer = $q.defer();
                $http.delete($rootScope.endpoint + '/jobs/cancelHaul/' + haulId)
                    .success(function(res) {
                        console.log(res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.getCurrentHaul = function() {
                var defer = $q.defer();
                $http.get($rootScope.endpoint + '/jobs/currentHaul/' + $rootScope.currentUser._id)
                    .success(function(res) {
                        $rootScope.currentHaul = res;
                        console.log('getCurrentHaul Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('getCurrentHaul Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.acceptOffer = function(info) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/bids/hauls/acceptOffer', {
                        haulId: $rootScope.currentHaul._id,
                        bidAccepted: info.id
                    })
                    .success(function(res) {
                        console.log('acceptOffer Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('acceptOffer Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };

        }
    ]);