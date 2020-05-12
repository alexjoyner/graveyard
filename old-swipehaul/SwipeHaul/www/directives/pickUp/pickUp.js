'use strict';
angular.module('angular.directive.pickUp', ['ngMap'])
    .directive('pickUp', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/pickUp/pickUp.html',
            controller: function($scope, $state, PostDataFac, QuickAlert, NgMap) {
                // Main Directive constructor
                // --------------------------
                function PickUp() {

                }
                PickUp.prototype.setPickUp = function(info) {
                    // if (info === undefined) {
                    //     QuickAlert.alert('Alert', 'No location info sent');
                    // } else
                    if (PostDataFac.setData(0, info).formatted_address !== undefined) {
                        console.log('Confirm PickUp');
                    } else {
                        console.log(PostDataFac.getAllData());
                        QuickAlert.alert('Error: ', 'Could not save location data');
                    }
                };
                PickUp.prototype.setDropOff = function(info) {
                    if (info === undefined) {
                        QuickAlert.alert('Alert', 'No location info sent');
                    } else
                    if (PostDataFac.setData(1, info).formatted_address !== undefined) {
                        console.log('Confirm DropOff');
                        $state.go('What');
                    } else {
                        console.log(PostDataFac.getAllData());
                        QuickAlert.alert('Error: ', 'Could not save location data');
                    }
                };
                PickUp.prototype.reRender = function() {
                    if(!firstRender){
                        document.getElementById('locMap').setAttribute('center', '{{pickUp.formatted_address}}');
                        document.getElementById('locDirect').setAttribute('origin', '{{pickUp.formatted_address}}');
                    }
                    firstRender = true;
                };
                // Declare directive main
                // --------------------------
                var main = new PickUp();
                var firstRender = false;
                function init() {
                    $scope.pickUp = PostDataFac.getAllData().pickup || undefined;
                    $scope.dropOff = PostDataFac.getAllData().dropoff || undefined;
                    $scope.reRender = function(){
                        main.reRender();
                    };
                    $scope.setLocation = function() {
                        // main.setPickUp($scope.pickUp);
                        // main.setDropOff($scope.dropOff);
                        console.log($scope.pickUp);
                    };
                    NgMap.getMap().then(function(map) {
                        console.log(map.getCenter());
                        console.log('markers', map.markers);
                        console.log('shapes', map.shapes);
                    });
                    
                }
                init();
            }
        };
    });