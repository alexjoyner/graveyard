'use strict';
angular.module('angular.directive.finalizePayment', [])
    .directive('finalizePayment', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/finalizePayment/finalizePayment.html',
            controller: function($scope, $state, $rootScope, QuickAlert) {
                // Main Directive constructor
                // --------------------------
                function FinalizePayment(currentHaul) {
                    this.currentHaul = currentHaul;
                }
                FinalizePayment.prototype.pay = function() {
                    console.log('You paid');
                    QuickAlert.alert('Thank you', 'You have successfully paid for this haul. Feel from to begin another.');
                    $state.go('PickUp');
                };

                // Declare directive main
                // --------------------------
                var main = new FinalizePayment($rootScope.currentHaul);

                function init() {
                    $scope.pay = function() {
                        main.pay();
                    };
                }
                init();

                // Bid Console controls

                var centsPlace = 0;

                function initConsole() {
                    $scope.message = 'Testing from GiveCtrl';
                    $scope.total = main.currentHaul.bidAccepted.amount;
                    $scope.showCents = false;
                    $scope.cents = '00';
                    $scope.giveAmount = ($scope.total + '.' + $scope.cents);
                    centsPlace = 0;
                }
                initConsole();
                $scope.change2cents = function() {
                    $scope.showCents = true;
                };
                $scope.addChar = function(char) {
                    if (!$scope.showCents) {
                        var tempTot = $scope.total.split('');
                        if (char !== 'b') {
                            tempTot.push(char);
                        } else {
                            tempTot.splice(tempTot.length - 1, 1);

                        }
                        if (tempTot.length > 3) {
                            document.getElementById('giveAmount').style.fontSize = '6em';
                        } else {
                            document.getElementById('giveAmount').style.fontSize = '8em';
                        }
                        var checkNum = tempTot.join('');
                        if (parseInt(checkNum, 10) > 9999) {
                            console.log('To large');
                        } else {
                            $scope.total = tempTot.join('');
                        }
                    } else {
                        var cents = $scope.cents.split('');
                        if (char !== 'b') {
                            if (centsPlace < 2) {
                                cents[centsPlace] = char;
                                centsPlace++;
                            } else {
                                console.log('Completed');
                            }
                        } else {
                            if (parseInt(cents.join(''), 10) === 0) {
                                centsPlace = 0;
                            }
                            if (centsPlace !== 0) {
                                centsPlace--;
                                cents[centsPlace] = '0';
                            } else {
                                $scope.showCents = false;
                            }
                        }
                        $scope.cents = cents.join('');
                    }
                    $scope.giveAmount = ($scope.total + '.' + $scope.cents);
                };
                console.log($scope.total.length);
            }
        };
    });