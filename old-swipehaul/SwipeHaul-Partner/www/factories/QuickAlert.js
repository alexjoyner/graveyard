'use strict';
angular.module('angular.factory.QuickAlert', [])
    .factory('QuickAlert', [
        '$q',
        '$ionicPopup',
        function($q, $ionicPopup) {
            return {
                alert: function(head, body) {
                    var defer = $q.defer();
                    $ionicPopup.alert({
                        title: head,
                        template: body
                    }).then(function(res) {
                        defer.resolve(res);
                    });
                    return defer.promise;
                },
                confirm: function(header, message) {
                    var defer = $q.defer();
                    $ionicPopup.confirm({
                        title: header,
                        template: message
                    }).then(function(res) {
                        if (res) {
                            defer.resolve();
                        } else {
                            defer.reject();
                        }
                    });
                    return defer.promise;
                },
                custom: function(head, template, scope) {
                    var defer = $q.defer();
                    $ionicPopup.show({
                        template: template,
                        title: head,
                        scope: scope,
                        buttons: [{
                            text: 'Cancel'
                        }, {
                            text: '<b>Save</b>',
                            type: 'button-positive',
                            onTap: function(e) {
                                return scope.info;
                            }
                        }]
                    }).then(function(res) {
                        defer.resolve(res);
                    });
                    return defer.promise;
                }
            };
        }
    ]);