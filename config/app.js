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
    'angular.directive.newDataForm',
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
    // Factories
    //---------------
    'angular.factory.IssueFactory',
    // Module Controllers
    //---------------
    'angular.controller.HomeCtrl',
    'angular.controller.IssueCtrl'
]);