'use strict';
angular.module('angular.controller.PickUpCtrl', [])
    .controller('PickUpCtrl', [
        '$scope',
        '$state',
        '$ionicHistory',
        '$rootScope',
        function($scope, $state, $ionicHistory, $rootScope) {
            $scope.PickUpControl = {};
            $scope.me = $rootScope.currentUser.local;
        }
    ])
    .directive('menuCloseKeepHistory', ['$ionicHistory', function($ionicHistory) {
        return {
            restrict: 'AC',
            link: function($scope, $element) {
                $element.bind('click', function() {
                    var sideMenuCtrl = $element.inheritedData('$ionSideMenusController');
                    if (sideMenuCtrl) {
                        $ionicHistory.nextViewOptions({
                            historyRoot: false,
                            disableAnimate: true,
                            expire: 300
                        });
                        sideMenuCtrl.close();
                    }
                });
            }
        };
    }]);