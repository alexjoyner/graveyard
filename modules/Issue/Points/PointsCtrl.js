'use strict';
angular.module('angular.controller.PointsCtrl', []).controller('PointsCtrl', ['$scope', '$state', '$location', '$anchorScroll', 'pointsService', 'supportsService',
    function($scope, $state, $location, $anchorScroll, pointsService, supportsService) {
        // ********* !!PROS!! ***********
        function PointsCtrl(id, pointsType) {
            this.points = [];
            this.issueId = id;
            this.pointsType = pointsType;
        }
        PointsCtrl.prototype.getPoints = function(showAllAfterIndx) {
            pointsService.getPoints(this.issueId, this.pointsType).then(function(res) {
                main.points = res.pros || res.cons;
                init();
                console.log('showAllAfterIndx: ', showAllAfterIndx);
                // Wait for points ng-repeat to reinit
                setTimeout(function() {
                    if (showAllAfterIndx) {
                        $scope.pointsCtrlApi.toggleMoreSupport(showAllAfterIndx);
                    }
                }, 100);
            });
        };
        PointsCtrl.prototype.deletePoint = function(id) {
            pointsService.deletePoint(this.pointsType, $state.params.id, id).then(function(res) {
                main.getPoints();
            });
        };
        PointsCtrl.prototype.removeSupport = function(pointId, supportId, pointIndx, supportIndx) {
            supportsService.removeSupportPoint($state.params.id, pointId, supportId).then(
                function(res) {
                    // Pop out the support data from the array...  We don't want to immediatly get the data because all the data will collapse & rearange which will look awkward.
                    main.points[pointIndx].support.splice(supportIndx, 1);
                    init();
                });
        };
        // Declare type of points in state
        // ----------------------------
        $scope.pointsType = $state.current.data.type;
        // Declare directive main
        // --------------------------
        var main = new PointsCtrl($state.params.id, $state.current.data.type);
        main.getPoints();
        function init() {
            $scope.points = main.points;
        }
        // Controller api
        $scope.pointsCtrlApi = {
            getPoints: function(showAllAfterIndx) {
                /*
					showAllAfterIndx : created to make sure new data is shown after new support is submitted, because the data cant be pushed because the id does not come back
				*/
                main.getPoints(showAllAfterIndx);
            },
            closeNewDataForm: function() {
                $scope.addPoint = false;
            },
            goToPoint: function(indx) {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('issue' + indx);
                // call $anchorScroll()
                $anchorScroll.yOffset = 20;
                $anchorScroll();
            },
            removeSupport: function(pointId, supportId, pointIndx, supportIndx) {
                main.removeSupport(pointId, supportId, pointIndx, supportIndx);
            },
            deletePoint: function(id) {
                main.deletePoint(id, $state.params.id);
            },
            toggleSupportForm: function(issueIndx) {
                var el = angular.element(document.querySelector('#supportForm' + issueIndx));
                var other = angular.element(document.querySelector('#moreSupport' + issueIndx));
                other.addClass('no-show');
                el.toggleClass('no-show');
            },
            toggleMoreSupport: function(issueIndx) {
                console.log('toggleClass: ', issueIndx);
                var el = angular.element(document.querySelector('#moreSupport' + issueIndx));
                var other = angular.element(document.querySelector('#supportForm' + issueIndx));
                other.addClass('no-show');
                el.toggleClass('no-show');
            }
        };
    }
]);