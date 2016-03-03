'use strict';
angular.module('MetaTruthDemo', [
    // Base
    //---------------
    // Config
    //---------------
    'config',
    'routes',
    //Cordova
    //---------------
    // Packages
    //---------------
    // Directives
    //---------------
    'angular.directive.newPointForm',
    'angular.directive.supportPoint',
    'angular.directive.mainPoint',
    'angular.directive.homeIssue',
    'angular.directive.customNavBar',
    'angular.directive.newIssueForm',
    // Modal Controllers
    //---------------
    // Services
    //---------------
    'angular.service.issuesService',
    'angular.service.pointsService',
    'angular.service.supportsService',
    'angular.service.votesService',
    // Factories
    //---------------
    // Module Controllers
    //---------------
    'angular.controller.HomeCtrl',
    'angular.controller.IssueCtrl',
    'angular.controller.PointsCtrl'
]);