'use strict';
angular.module('angular.service.ImagesService', [])
    .service('ImagesService', ['$http', '$q', '$rootScope', '$cordovaFileTransfer', function($http, $q, $rootScope, $cordovaFileTransfer) {
        this.uploadImage = function(filePath) {
            var defer = $q.defer();
            $cordovaFileTransfer.upload($rootScope.endpoint + '/images/uploadImage', filePath, {})
                .then(function(res) {
                    // Success!
                    defer.resolve(res.response);
                }, function(err) {
                    // Error
                    defer.reject(err);
                });
            return defer.promise;
        };
    }]);