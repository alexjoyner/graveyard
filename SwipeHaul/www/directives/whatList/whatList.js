'use strict';
angular.module('angular.directive.whatList', [])
    .directive('whatList', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/whatList/whatList.html',
            controller: function($scope, $state, PostDataFac, CameraFac, $rootScope, QuickAlert, $ionicSlideBoxDelegate, $timeout) {
                // Declare directive functions
                // ------------------------
                function WhatList(postData) {
                    this.allPostData = postData;
                    this.currentImagePlace = 0;
                    this.photos = [];
                    this.photo = undefined;
                }
                WhatList.prototype.getPrestoredPhotos = function() {
                    var photos = PostDataFac.getImageData();
                    this.photos = photos;
                };
                WhatList.prototype.getPhoto = function() {
                    CameraFac.getPicture({}).then(
                        function(mediaData) {
                            $scope.info = {};
                            var template =
                                '<input type="text" placeholder="Description" ng-model="info.description"><input type="number" placeholder="Quantity" ng-model="info.quantity">';
                            QuickAlert.custom('<img width="75" height="auto" src="' + mediaData +
                                '" alt="item image">', template, $scope).then(
                                function(res) {
                                    var desc = 'No description';
                                    var quantity = 1;
                                    console.log('res: ', res);
                                    if (res.description) {
                                        desc = res.description;
                                    }
                                    if (res.quantity) {
                                        quantity = res.quantity;
                                    }
                                    var newData = PostDataFac.saveImageData({
                                        src: mediaData,
                                        desc: desc,
                                        quantity: quantity
                                    });
                                    main.photos = newData;
                                    init();
                                });
                            // $ionicSlideBoxDelegate.update();
                            // $timeout(function() {
                            //     $ionicSlideBoxDelegate.$getByHandle('ImagesSlideBox').slide($scope.photos.length - 1, 800);
                            // }, 800);
                        },
                        function(err) {
                            QuickAlert.alert('Error!!!', err);
                        });
                };
                WhatList.prototype.forwardCycle = function() {
                    if (this.photo === undefined) {
                        this.currentImagePlace = 0;
                    } else {
                        if ((this.photos.length - 1) === this.currentImagePlace)
                            this.currentImagePlace = 0;
                        else
                            this.currentImagePlace++;
                        console.log(this.currentImagePlace);
                    }
                    this.photo = this.photos[this.currentImagePlace];
                    init();
                };
                WhatList.prototype.reverseCycle = function() {
                    if (this.photo === undefined) {
                        this.currentImagePlace = 0;
                        return;
                    } else {
                        if (this.currentImagePlace === 0)
                            this.currentImagePlace = (this.photos.length - 1);
                        else
                            this.currentImagePlace--;
                        console.log(this.currentImagePlace);
                    }
                    this.photo = this.photos[this.currentImagePlace];
                    init();
                };
                WhatList.prototype.removeImage = function(src) {
                    var status = PostDataFac.removeImageData(src);
                    init();
                };
                WhatList.prototype.nextStep = function() {
                    $state.go('Obstacles');
                };
                WhatList.prototype.continue = function(items) {
                    if (this.photos.length > 0) {
                        $state.go('Review');
                    } else {
                        QuickAlert.alert('Alert!', 'At least 1 items needed');
                    }
                };
                var main = new WhatList(PostDataFac.getAllData());
                // API Scope variables
                // ----------------------------------
                // Whatch variable for when camera return
                $scope.$watch('photos', function(newVal, oldVal) {
                    main.getPrestoredPhotos();
                    init();
                }, true);

                function init() {
                    $scope.photos = main.photos;
                    console.log('Photos now: ', $scope.photos);
                    $scope.api.photo = main.photo;
                    $scope.api.continue = function() {
                        main.continue($scope.items);
                    };
                }
                $scope.api.forwardCycle = function() {
                    main.forwardCycle();
                };
                $scope.getPhoto = function() {
                    main.getPhoto();
                };
                $scope.api.reverseCycle = function() {
                    main.reverseCycle();
                };
                $scope.removeImage = function(src) {
                    main.removeImage(src);
                };
                $scope.api.nextStep = function() {
                    main.nextStep();
                };
                $scope.api.getSet = function() {
                    main.getPrestoredPhotos();
                };
                $scope.removeItem = function(indx) {
                    main.photos = PostDataFac.removeImageData(indx);
                    init();
                };
                $scope.viewImage = function(indx) {
                    console.log('Photos: ', main.photos);
                    QuickAlert.alert('<img width="200" height="auto" src="' + main.photos[indx].src +
                        '" alt="item image">', null);
                };
                init();
            }
        };
    });
/*'use strict';
angular.module('angular.directive.whatList', [])
    .directive('whatList', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/whatList/whatList.html',
            controller: function($scope, $state, QuickAlert, PostDataFac, CameraFac) {
                // Main Directive constructor
                // --------------------------
                function WhatList() {

                }
                WhatList.prototype.newItem = function() {
                    // CameraFac.getPicture().then(
                    //     function(res){
                    //         console.log('New image: url ', res);
                    //     },
                    //     function(err){
                    //         console.log('err');
                    //     });
                    $scope.info = {};
                    var template =
                        '<input type="text" placeholder="Description" ng-model="info.description">';
                    QuickAlert.custom('Test header', template, $scope).then(
                        function(res) {
                            if (res.description) {
                                $scope.items.push(res);
                            }
                        });
                };
                WhatList.prototype.continue = function(items) {
                    if (items.length > 0) {
                        if (PostDataFac.setData(2, items).length === items.length) {
                            $state.go('Review');
                        }
                    } else {
                        QuickAlert.alert('Alert!', 'At least 1 items needed');
                    }
                };
                // Declare directive main
                // --------------------------
                var main = new WhatList();

                function init() {
                    $scope.items = [];
                    $scope.newItem = function() {
                        main.newItem();
                    };
                    
                    $scope.api.continue = function() {
                        main.continue($scope.items);
                    };
                }
                init();
            }
        };
    });*/