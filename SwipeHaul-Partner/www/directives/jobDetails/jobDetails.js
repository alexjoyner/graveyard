'use strict';
angular.module('angular.directive.jobDetails', [])
    .directive('jobDetails', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/jobDetails/jobDetails.html',
            controller: function($scope, $state, PostService, $rootScope, QuickAlert, $ionicModal, BidService) {
                console.log($rootScope.currentUser);
                // Main Directive constructor
                // --------------------------
                function JobDetails() {
                    this.paramIndx = $state.params.indx;
                    this.jobs = [];
                    this.details = {};
                }
                JobDetails.prototype.setup = function() {
                    main.details = main.jobs[main.paramIndx];
                    console.log(main.details);
                    init();
                };
                JobDetails.prototype.getJobs = function() {
                    PostService.getJobs().then(
                        function(res) {
                            main.jobs = res;
                            main.setup();
                        },
                        function(err) {
                            return [];
                        });
                };

                // Declare directive main
                // --------------------------
                var main = new JobDetails();
                main.getJobs();

                function init() {
                    $scope.root = $rootScope.endpoint;
                    $scope.job = main.details;
                }
                $scope.bid = function(amount) {
                    var bid = parseInt(amount, 10);
                    QuickAlert.confirm('Confirm', 'Are you sure you would like to submit a bid of $' + bid + ' for this job?').then(
                        function(res) {
                            BidService.newBid({
                                bid: bid,
                                partner: $rootScope.currentUser,
                                partnerId: $rootScope.currentUser._id,
                                eta: '15-45 mins'
                            }).then(
                                function(res) {
                                    console.log('Bid successful: ', res);
                                    $scope.closeModal();
                                },
                                function(err) {
                                    QuickAlert.alert('Error!', 'Bid unsuccessful ' + err);
                                });
                        });
                };
                $scope.viewImage = function(indx) {
                    console.log('Photos: ', main.details.what);
                    QuickAlert.alert('<img width="200" height="auto" src="' + $scope.root + '/images/' + main.details.what[indx].src +
                        '" alt="item image">', null);
                };

                //  Setup modal 
                // ----------------------------------
                $ionicModal.fromTemplateUrl('modules/BidConsole/BidConsole.html', {
                    scope: $scope,
                    animation: 'slide-in-up'
                }).then(function(modal) {
                    $scope.modal = modal;
                });
                $scope.api.openModal = function() {
                    initConsole();
                    $scope.modal.show();
                };
                $scope.closeModal = function() {
                    $scope.modal.hide();
                };
                //Cleanup the modal when we're done with it!
                $scope.$on('$destroy', function() {
                    $scope.modal.remove();
                });
                // Execute action on hide modal
                $scope.$on('modal.hidden', function() {
                    // Execute action
                });
                // Execute action on remove modal
                $scope.$on('modal.removed', function() {
                    // Execute action
                });

                // Bid Console controls
                $scope.goBack = function() {
                    $ionicHistory.goBack();
                };

                var centsPlace = 0;
                function initConsole() {
                    $scope.message = 'Testing from GiveCtrl';
                    $scope.total = '0';
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