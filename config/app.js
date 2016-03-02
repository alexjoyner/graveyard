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
    'angular.service.prosService',
    'angular.service.consService',
    'angular.service.supportsService',
    // Factories
    //---------------
    // Module Controllers
    //---------------
    'angular.controller.HomeCtrl',
    'angular.controller.IssueCtrl',
    'angular.controller.ProsCtrl',
    'angular.controller.ConsCtrl'
]);