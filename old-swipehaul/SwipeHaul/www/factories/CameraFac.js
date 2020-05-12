'use strict';
angular.module('angular.factory.CameraFac', [])
    .factory('CameraFac', [
        '$q',
        'PostDataFac',
        function($q, PostDataFac) {
            return {
                getPicture: function(options) {
                    var q;
                    q = void 0;
                    q = $q.defer();
                    var height = (window.innerHeight);
                    var width = (window.innerWidth);
                    console.log('Height: ' + height);
                    console.log('Width: ' + width);
                    var options = {
                        saveToPhotoAlbum: false
                    };
                    navigator.camera.getPicture((function(result) {
                        q.resolve(result);
                    }), (function(err) {
                        q.reject(err);
                    }), options);
                    return q.promise;
                }
            };
        }
    ]);