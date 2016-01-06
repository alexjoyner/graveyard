'use strict';
angular.module('angular.directive.expectations', [])
    .directive('expectations', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/expectations/expectations.html',
            controller: function($scope, $state, $timeout, PostDataFac, $rootScope, PostService, QuickAlert, ImagesService) {
                //  Main directive function
                // ----------------------------------
                function Obstacles(data) {
                    this.allPostData = data;
                }
                Obstacles.prototype.setData = function(obstacles) {
                    PostDataFac.setData(6, obstacles);
                };
                Obstacles.prototype.postJob = function(imageIdArray) {
                    PostService.postHaul(this.allPostData, imageIdArray).then(
                        function(res) {
                            $rootScope.$broadcast('loading:hide');
                            PostService.getCurrentHaul($rootScope.currentUser._id).then(
                                function(resHaul) {
                                    $rootScope.currentHaul = resHaul;
                                    $state.go('BidView');
                                },
                                function(errHaul) {
                                    QuickAlert.alert('Error', 'You don\'t have any hauls posted');
                                });
                        },
                        function(err) {
                            QuickAlert.alert('Error!', err);
                        });
                };
                Obstacles.prototype.post = function() {
                    var length = this.allPostData.imageData.length;
                    $rootScope.$broadcast('loading:show');
                    var count = 0;
                    var imageData = this.allPostData.imageData;
                    var imageIdArray = [];
                    var uploadSuccess = function(res) {
                        imageIdArray.push({
                            src: res,
                            desc: imageData[count].desc,
                            quantity: imageData[count].quantity
                        });
                        count++;
                        if (count === length) {
                            console.log('Finished uploading');
                            console.log(imageIdArray);
                            main.postJob(imageIdArray);
                        }
                    };
                    var uploadErr = function(err) {
                        count++;
                        console.log('ERR: image ' + i);
                    };
                    if (imageData.length > 0) {
                        for (var i = 0; i < imageData.length; i++) {
                            ImagesService.uploadImage(imageData[i].src).then(
                                uploadSuccess,
                                uploadErr);
                        }
                    } else {
                        // !!!!!!!!!!!! Need images in final build
                        this.postJob(imageIdArray);
                    }
                };
                var main = new Obstacles(PostDataFac.getAllData());

                // Directive scope/api
                // -------------------
                function init() {
                    $scope.postJob = function() {
                        main.post();
                    };
                }
                init();
            }
        };
    });