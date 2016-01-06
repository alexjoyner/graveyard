'use strict';
angular.module('configurations', [])
    .run(['$ionicPlatform', '$rootScope', '$ionicLoading', function($ionicPlatform, $rootScope, $ionicLoading) {
        $rootScope.endpoint = /*'http://192.168.0.8:9000';*/ 'https://swipehaul-server-init.herokuapp.com';
        //Loading functions
        $rootScope.$on('loading:show', function() {
            $ionicLoading.show({
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200
            });
        });
        $rootScope.$on('loading:hide', function() {
            $ionicLoading.hide();
        });
        $rootScope.$on('$stateChangeSuccess', function() {
            $rootScope.$broadcast('loading:hide');
        });
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }])
    .config(['$compileProvider', '$ionicConfigProvider', function($compileProvider, $ionicConfigProvider) {
        $ionicConfigProvider.views.transition('none');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|comgooglemaps|tel|content):/);
    }]);