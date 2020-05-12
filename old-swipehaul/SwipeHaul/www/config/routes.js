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
    .state('PickUp', {
        url: '/PickUp',
        templateUrl: './modules/PickUp/PickUp.html',
        controller: 'PickUpCtrl'
    })
    .state('DropOff', {
        url: '/DropOff',
        templateUrl: './modules/DropOff/DropOff.html',
        controller: 'DropOffCtrl'
    })
    .state('What', {
        url: '/What',
        templateUrl: './modules/What/What.html',
        controller: 'WhatCtrl'
    })
    .state('Review', {
        url: '/Review',
        templateUrl: './modules/Review/Review.html',
        controller: 'ReviewCtrl'
    })
    .state('Expectations', {
        url: '/Expectations',
        templateUrl: './modules/Expectations/Expectations.html',
        controller: 'ExpectationsCtrl'
    })
    .state('BidView', {
        url: '/BidView',
        templateUrl: './modules/BidView/BidView.html',
        controller: 'BidViewCtrl'
    })
    .state('JobProgress', {
        url: '/JobProgress',
        templateUrl: './modules/JobProgress/JobProgress.html',
        controller: 'JobProgressCtrl'
    })
    .state('Profile', {
        url: '/Profile',
        templateUrl: './modules/Menu/Profile/Profile.html',
        controller: 'ProfileCtrl'
    })
    .state('Payment', {
        url: '/Payment',
        templateUrl: './modules/Menu/Payment/Payment.html',
        controller: 'PaymentCtrl'
    })
    .state('Coupon', {
        url: '/Coupon',
        templateUrl: './modules/Menu/Coupon/Coupon.html',
        controller: 'CouponCtrl'
    })
    .state('Earn$', {
        url: '/Earn$',
        templateUrl: './modules/Menu/Earn$/Earn$.html',
        controller: 'Earn$Ctrl'
    })
    .state('Help', {
        url: '/Help',
        templateUrl: './modules/Menu/Help/Help.html',
        controller: 'HelpCtrl'
    })
    .state('About', {
        url: '/About',
        templateUrl: './modules/Menu/About/About.html',
        controller: 'AboutCtrl'
    })
    .state('Haulers', {
        url: '/Haulers',
        templateUrl: './modules/Menu/Haulers/Haulers.html',
        controller: 'HaulersCtrl'
    })
    .state('PayInfo', {
        url: '/PayInfo',
        templateUrl: './modules/PayInfo/PayInfo.html',
        controller: 'PayInfoCtrl'
    })
    .state('FinalizePayment', {
        url: '/FinalizePayment',
        templateUrl: './modules/FinalizePayment/FinalizePayment.html',
        controller: 'FinalizePaymentCtrl'
    })
    ;
    $urlRouterProvider.otherwise('/Login');
    return;
}]);