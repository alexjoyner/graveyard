'use strict';
angular.module('routes', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('Home', {
        url: '/Home',
        abstract: true,
        templateUrl: './modules/Home/Home.html',
        controller: 'HomeCtrl'
    })
    .state('Home.All', {
        url: '/All',
        templateUrl: './modules/Home/All/All.html',
        controller: 'HomeCtrl'
    })
    .state('Issue', {
        url: '/Issue/:id',
        abstract: true,
        templateUrl: './modules/Issue/Issue.html',
        controller: 'IssueCtrl'
    })
    .state('Issue.Pros', {
        url: '/Pros',
        templateUrl: './modules/Issue/Pros/Pros.html',
        controller: 'ProsCtrl'
    })
    .state('Issue.Cons', {
        url: '/Cons',
        templateUrl: './modules/Issue/Cons/Cons.html',
        controller: 'ConsCtrl'
    })
    ;
    $urlRouterProvider.otherwise('/Home/All');
    return;
}]);