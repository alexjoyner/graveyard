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
                templateUrl: './modules/Issue/Points/Points.html',
                controller: 'PointsCtrl',
                data: {
                    type: 'pros'
                }
            })
            .state('Issue.Cons', {
                url: '/Cons',
                templateUrl: './modules/Issue/Points/Points.html',
                controller: 'PointsCtrl',
                data: {
                    type: 'cons'
                }
            });
        $urlRouterProvider.otherwise('/Home/All');
        return;
    }]);