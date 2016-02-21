'use strict';
angular.module('config', [])
    .run([
        '$rootScope',
        function($rootScope) {
            $rootScope.endpoint = 'http://localhost:9000';
        }
    ])
    .config(['$compileProvider', function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|comgooglemaps|tel|content):/);
    }]);