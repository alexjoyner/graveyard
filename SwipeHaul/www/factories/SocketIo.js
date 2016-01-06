'use strict';
angular.module('angular.factory.SocketIo', [])
    .factory('SocketIo', [
        '$rootScope',
        function($rootScope) {
            console.log('Hello');
            var socket = io.connect($rootScope.endpoint);
            return {
                on: function(eventName, callback) {
                    socket.on(eventName, function() {
                        var args = arguments;
                        $rootScope.$apply(function() {
                            callback.apply(socket, args);
                        });
                    });
                },
                emit: function(eventName, data, callback) {
                    socket.emit(eventName, data, function() {
                        var args = arguments;
                        $rootScope.$apply(function() {
                            if (callback) {
                                callback.apply(socket, args);
                            }
                        });
                    });
                }
            };
        }
    ]);