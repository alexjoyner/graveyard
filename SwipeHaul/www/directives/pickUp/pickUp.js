'use strict';
angular.module('angular.directive.pickUp', [])
    .directive('pickUp', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/pickUp/pickUp.html',
            controller: function($scope, $state, PostDataFac, QuickAlert) {
                // Main Directive constructor
                // --------------------------
                function PickUp() {

                }
                PickUp.prototype.setPickUp = function(info) {
                    if (info === undefined) {
                        QuickAlert.alert('Alert', 'No location info sent');
                    } else
                    if (PostDataFac.setData(0, info).formatted_address !== undefined) {
                        $state.go('DropOff');
                    } else {
                        console.log(PostDataFac.getAllData());
                        QuickAlert.alert('Error: ', 'Could not save location data');
                    }
                };

                // Declare directive main
                // --------------------------
                var main = new PickUp();

                function init() {
                    $scope.pickUp = PostDataFac.getAllData().pickup || undefined;
                    $scope.setPickUp = function() {
                        main.setPickUp($scope.pickUp);
                    };
                }
                init();
            }
        };
    });