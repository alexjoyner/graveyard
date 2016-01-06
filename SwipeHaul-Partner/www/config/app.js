'use strict';
angular.module('SwipeHaulPartner', [
    // Base
    //---------------
    'ionic',
    // Config
    //---------------
    'configurations',
    'routes',
    //Cordova
    'ngCordova',
    // Packages
    //---------------
    // Directives
    //---------------
    'angular.directive.loginForm',
    'angular.directive.signUpForm',
    'angular.directive.jobFeed',
    'angular.directive.jobDetails',
    // Modal Controllers
    //---------------
    // Factories
    //---------------
    'angular.factory.QuickAlert',
    'angular.factory.SocketIo',
    // Services
    //---------------
    'angular.service.AuthService',
    'angular.service.PostService',
    'angular.service.BidService',
    // Module Controllers
    //---------------
    'angular.controller.StartCtrl',
    'angular.controller.LoginCtrl',
    'angular.controller.SignUpCtrl',
    'angular.controller.DashCtrl',
    'angular.controller.JobFeedCtrl',
    'angular.controller.JobDetailsCtrl',
    'angular.controller.BidConsoleCtrl',
]);