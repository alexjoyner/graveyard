'use strict';
angular.module('angular.controller.ConsCtrl', []).controller('ConsCtrl', ['$scope', '$state', '$location', '$anchorScroll', 'consService', 'supportsService',
    function($scope, $state, $location, $anchorScroll, consService, supportsService) {
        // ********* !!CONS!! ***********
        function ConsCtrl(id) {
            this.cons = [];
            this.issueId = id;
        }
        ConsCtrl.prototype.getCons = function() {
            consService.getCons(this.issueId).then(function(res) {
                console.log('Cons: ', res.cons);
                main.cons = res.cons;
                init();
            });
        };
        ConsCtrl.prototype.deletePoint = function(id) {
            consService.deleteCon($state.params.id, id).then(function(res) {
                main.getCons();
            });
        };
        ConsCtrl.prototype.removeSupport = function(pointId, supportId, conIndx, supportIndx) {
            supportsService.removeConSupport($state.params.id, pointId, supportId).then(
                function(res) {
                    // Pop out the support data from the array...  We don't want to immediatly get the data because all the data will collapse & rearange which will look awkward.
                    main.cons[conIndx].support.splice(supportIndx, 1);
                    init();
                });
        };
        // Declare directive main
        // --------------------------
        var main = new ConsCtrl($state.params.id);
        main.getCons();

        function init() {
            $scope.cons = main.cons;
        }
        $scope.deletePoint = function(id) {
            main.deletePoint(id, $state.params.id);
        };
        // Support Template api
        $scope.consCtrlApi = {
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
            },
            getCons: function() {
                main.getCons();
            },
            closeNewDataForm: function() {
                $scope.addPoint = false;
            },
            goToTop: function(indx) {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('issue' + indx);
                // call $anchorScroll()
                $anchorScroll.yOffset = 20;
                $anchorScroll();
            },
            pushNewSupportPoint: function(pointIndx, supportInfo) {
                main.cons[pointIndx].support.push(supportInfo);
                $scope.consCtrlApi.toggleMoreSupport(pointIndx);
            },
            removeSupport: function(pointId, supportId, conIndx, supportIndx) {
                main.removeSupport(pointId, supportId, conIndx, supportIndx);
            }
        };
    }
]);