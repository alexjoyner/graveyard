'use strict';
angular.module('SwipeHaul', [
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
    'ion-google-place',
    // Directives
    //---------------
    'angular.directive.loginForm',
    'angular.directive.signUpForm',
    'angular.directive.pickUp',
    'angular.directive.dropOff',
    'angular.directive.whatList',
    'angular.directive.review',
    'angular.directive.expectations',
    'angular.directive.bidView',
    'angular.directive.jobProgress',
    'angular.directive.payInfo',
    // Modal Controllers
    //---------------
    // Factories
    //---------------
    'angular.factory.QuickAlert',
    'angular.factory.PostDataFac',
    'angular.factory.SocketIo',
    'angular.factory.CameraFac',
    // Services
    //---------------
    'angular.service.AuthService',
    'angular.service.PostService',
    'angular.service.BidService',
    'angular.service.ImagesService',
    // Module Controllers
    //---------------
    'angular.controller.StartCtrl',
    'angular.controller.LoginCtrl',
    'angular.controller.SignUpCtrl',
    'angular.controller.PickUpCtrl',
    'angular.controller.DropOffCtrl',
    'angular.controller.WhatCtrl',
    'angular.controller.ReviewCtrl',
    'angular.controller.ExpectationsCtrl',
    'angular.controller.BidViewCtrl',
    'angular.controller.JobProgressCtrl',
    'angular.controller.ProfileCtrl',
    'angular.controller.PaymentCtrl',
    'angular.controller.CouponCtrl',
    'angular.controller.Earn$Ctrl',
    'angular.controller.HelpCtrl',
    'angular.controller.AboutCtrl',
    'angular.controller.HaulersCtrl',
    'angular.controller.PayInfoCtrl',
]);