'use strict';
angular.module('routes', [])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('Start', {
                url: '/Start',
                templateUrl: './modules/Start/Start.html',
                controller: 'StartCtrl'
            })
            .state('Login', {
                url: '/Login',
                templateUrl: './modules/Login/Login.html',
                controller: 'LoginCtrl'
            })
            .state('SignUp', {
                url: '/SignUp',
                templateUrl: './modules/SignUp/SignUp.html',
                controller: 'SignUpCtrl'
            })
            .state('Dash', {
                url: '/Dash',
                templateUrl: './modules/Dash/Dash.html',
                controller: 'DashCtrl'
            })
            .state('JobFeed', {
                url: '/JobFeed',
                templateUrl: './modules/JobFeed/JobFeed.html',
                controller: 'JobFeedCtrl'
            })
            .state('JobDetails', {
                url: '/JobDetails/:indx',
                templateUrl: './modules/JobDetails/JobDetails.html',
                controller: 'JobDetailsCtrl'
            })
            ;
        $urlRouterProvider.otherwise('/Login');
        return;
    }]);