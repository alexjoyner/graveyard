'use strict';
angular.module('angular.directive.bidView', [])
    .directive('bidView', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/bidView/bidView.html',
            controller: function($scope, $state, $timeout, $rootScope, PostService, BidService, SocketIo, QuickAlert) {
                if ($rootScope.currentHaul.status.stage !== 0) {
                    $state.go('InProgress');
                }
                $timeout(function() {
                    console.log('Creating room');
                    SocketIo.emit('CreateRoom', 'room' + $rootScope.currentHaul._id);
                });
                // Define directive function
                // -----------------------------------
                function BidView(haulInfo) {
                    this.haulInfo = haulInfo;
                    this.bids = this.sortBids(haulInfo.bids);
                }
                BidView.prototype.sortBids = function(bids) {
                    var newBidSet = bids.sort(function(a, b) {
                        return parseFloat(a.bid) - parseFloat(b.bid);
                    });
                    return newBidSet;
                };
                BidView.prototype.updateHaul = function(dontShowError) {
                    PostService.getCurrentHaul().then(
                        function(res) {
                            main.haulInfo = res;
                        },
                        function(err) {
                            $rootScope.currentHaul = undefined;
                            if (!dontShowError)
                                QuickAlert.alert('Error!', err);
                            $state.go('Dash');
                        });
                };
                BidView.prototype.setStatus = function(StatusString) {
                    this.haulInfo.status.tag = StatusString;
                    init();
                };
                BidView.prototype.acceptOffer = function(selection) {
                    console.log('Are you sure???');
                    console.log('Bid: ', this.bids[selection]);
                    console.log(this.haulInfo);
                    var info = {
                        haulId: this.haulInfo._id,
                        bid: this.bids[selection]._id
                    };
                    console.log(info.bid);
                    if (info.bid && info.haulId) {
                        QuickAlert.confirm('Warning!!!', 'Are you sure you want to accept this $' + this.bids[selection].amount + ' bid?').then(
                            function() {
                                BidService.acceptBid(info).then(
                                    function(res) {
                                        $state.go('JobProgress');
                                    },
                                    function(err) {
                                        QuickAlert.alert('Error!!!', err);
                                    });
                            });
                    }else {
                        QuickAlert.alert('Error!', 'No bid selection found');
                    }
                };
                BidView.prototype.cancel = function() {
                    QuickAlert.confirm('Warning!!!', 'Are you sure you want to cancel your haul?').then(
                        function(res) {
                            PostService.cancelHaul(main.haulInfo._id).then(
                                function(res) {
                                    QuickAlert.alert('Success!', 'This post has been removed');
                                    main.updateHaul(true);
                                },
                                function(err) {
                                    QuickAlert.alert('Error!!!', err);
                                });
                        });
                };
                // Initialize directive main
                // -------------------------
                var main = new BidView($rootScope.currentHaul);
                main.updateHaul();
                // SocketIo listeners
                // -----------------------------
                SocketIo.on('NewBidSet', function(bids) {
                    main.bids = main.sortBids(bids);
                    init();
                });
                // Initializations
                function init() {
                    $scope.api.haulInfo = main.haulInfo;
                    $scope.api.bids = main.bids;
                    $scope.api.selection = undefined;
                    $scope.api.OfferAccepted = undefined;
                }
                init();
                $scope.api.acceptOffer = function() {
                    console.log('Accpting', $scope.api.selection);
                    main.acceptOffer($scope.api.selection);
                };
                $scope.api.cancel = function() {
                    main.cancel();
                };
            }
        };
    });
/*'use strict';
angular.module('angular.directive.bidView', [])
    .directive('bidView', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/bidView/bidView.html',
            controller: function($scope, $state, $rootScope, PostService, QuickAlert, SocketIo) {
                //Setup socket IO listeners
                SocketIo.on('NewBidSet', function(set){
                    console.log('New Bids', set);
                    main.bids = set;
                    init();
                });
                // Main Directive constructor
                // --------------------------
                function BidView(haulData) {
                    console.log('haulData', haulData);
                    this.haulData = haulData;
                    this.bids = haulData.bids;
                }
                BidView.prototype.acceptOffer = function(bidSelected) {
                    //Should make this a confirm
                    QuickAlert.alert('Alert!', 'Are you sure you want to accept this offer?').then(function(res) {
                            PostService.acceptOffer(bidSelected).then(
                                function(res) {
                                    QuickAlert.alert('SUCCESS!', 'The offer was accepted and your hauler has been notified').then(
                                        function(res){
                                            $state.go('JobProgress');
                                        });
                                },
                                function(err) {
                                    console.log('Error');
                                });
                        },
                        function(err) {
                            console.log('You are not sure');
                        });
                };

                // Declare directive main
                // --------------------------
                var main = new BidView($rootScope.currentHaul);

                function init() {
                    $scope.bids = main.bids;
                    $scope.bidSelected = {
                        id: 0
                    };
                    $scope.acceptOffer = function() {
                        main.acceptOffer($scope.bidSelected);
                    };
                }
                init();
            }
        };
    });*/
/*
if ($rootScope.currentHaul.status.stage !== 0) {
                    $state.go('InProgress');
                }
                $timeout(function() {
                    console.log('Creating room');
                    SocketIo.emit('CreateRoom', 'room' + $rootScope.currentHaul._id);
                });
                // Define directive function
                // -----------------------------------
                function BidView(haulInfo) {
                    this.haulInfo = haulInfo;
                    this.bids = this.sortBids(haulInfo.bids);
                }
                BidView.prototype.sortBids = function(bids) {
                    var newBidSet = bids.sort(function(a, b) {
                        return parseFloat(a.amount) - parseFloat(b.amount);
                    });
                    return newBidSet;
                };
                BidView.prototype.updateHaul = function(dontShowError) {
                    PostService.getCurrentHaul().then(
                        function(res) {
                            main.haulInfo = res;
                        },
                        function(err) {
                            $rootScope.currentHaul = undefined;
                            if (!dontShowError)
                                QuickAlert.alert('Error!', err);
                            $state.go('PickUp');
                        });
                };
                BidView.prototype.setStatus = function(StatusString) {
                    this.haulInfo.status.tag = StatusString;
                    init();
                };
                BidView.prototype.acceptOffer = function(bidIndex) {
                    console.log('Are you sure???');
                    console.log('Bids: ', this.bids[bidIndex].amount);
                    var info = {
                        haulId: this.haulInfo._id,
                        bid: this.bids[bidIndex]._id
                    };
                    if (info.bid && info.haulId) {
                        QuickAlert.confirm('Confirm', 'Are you sure you want to accept this $' + this.bids[bidIndex].amount + ' bid?').then(
                            function() {
                                BidService.acceptBid(info).then(
                                    function(res) {
                                        $state.go('InProgress');
                                    },
                                    function(err) {
                                        QuickAlert.alert('Error!!!', err);
                                    });
                            });
                    } else {
                        QuickAlert.alert('Error!', 'No bid selection found');
                    }
                };
                BidView.prototype.cancel = function() {
                    QuickAlert.confirm('Warning!!!', 'Are you sure you want to cancel your haul?').then(
                        function(res) {
                            PostService.cancelHaul(main.haulInfo._id).then(
                                function(res) {
                                    QuickAlert.alert('Success!', 'This post has been removed');
                                    main.updateHaul(true);
                                },
                                function(err) {
                                    QuickAlert.alert('Error!!!', err);
                                });
                        });
                };
                // Initialize directive main
                // -------------------------
                var main = new BidView($rootScope.currentHaul);
                main.updateHaul();
                // SocketIo listeners
                // -----------------------------
                SocketIo.on('NewBidSet', function(bids) {
                    main.bids = main.sortBids(bids);
                    init();
                });
                // Initializations
                function init() {
                    $scope.api.haulInfo = main.haulInfo;
                    $scope.api.bids = main.bids;
                    $scope.api.selection = undefined;
                    $scope.api.OfferAccepted = undefined;
                }
                init();
                $scope.api.acceptOffer = function(indx) {
                    console.log(main.bids[indx]);
                    main.acceptOffer(indx);
                };
                $scope.api.cancel = function() {
                    main.cancel();
                };*/