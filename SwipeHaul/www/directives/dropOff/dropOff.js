'use strict';
angular.module('angular.directive.dropOff', [])
    .directive('dropOff', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/dropOff/dropOff.html',
            controller: function($scope, $state, PostDataFac, QuickAlert) {
                // Main Directive constructor
                // --------------------------
                function DropOff() {

                }
                DropOff.prototype.setDropOff = function(info) {
                    if (info === undefined) {
                        QuickAlert.alert('Alert', 'No location info sent');
                    } else
                    if (PostDataFac.setData(1, info).formatted_address !== undefined) {
                        $state.go('What');
                    } else {
                        console.log(PostDataFac.getAllData());
                        QuickAlert.alert('Error: ', 'Could not save location data');
                    }
                };

                // Declare directive main
                // --------------------------
                var main = new DropOff();

                function init() {
                    $scope.postData = PostDataFac.getAllData();
                    $scope.dropOff = {};
                    if($scope.postData.dropoff !== undefined){
                        $scope.dropOff = $scope.postData.dropoff;
                    }
                    $scope.setDropOff = function() {
                        main.setDropOff($scope.dropOff);
                    }
                }
                init();
            }
        };
    });