'use strict';
angular.module('angular.controller.ProsCtrl', []).controller('ProsCtrl', ['$scope', '$state', '$location', '$anchorScroll', 'prosService', 'supportsService',
    function($scope, $state, $location, $anchorScroll, prosService, supportsService) {
        // ********* !!PROS!! ***********
        function ProsCtrl(id) {
            this.pros = [];
            this.issueId = id;
        }
        ProsCtrl.prototype.getPros = function(showAllAfterIndx) {
            prosService.getPros(this.issueId).then(function(res) {
                console.log('PROS: ', res.pros);
                main.pros = res.pros;
                init();
                console.log('showAllAfterIndx: ', showAllAfterIndx);
                // Wait for pros ng-repeat to reinit
                setTimeout(function() {
                    if (showAllAfterIndx) {
                        $scope.prosCtrlApi.toggleMoreSupport(showAllAfterIndx);
                    }
                }, 100);
            });
        };
        ProsCtrl.prototype.deletePoint = function(id) {
            prosService.deletePro($state.params.id, id).then(function(res) {
                main.getPros();
            });
        };
        ProsCtrl.prototype.removeSupport = function(pointId, supportId, proIndx, supportIndx) {
            supportsService.removeProSupport($state.params.id, pointId, supportId).then(
                function(res) {
                    // Pop out the support data from the array...  We don't want to immediatly get the data because all the data will collapse & rearange which will look awkward.
                    main.pros[proIndx].support.splice(supportIndx, 1);
                    init();
                });
        };
        // Declare directive main
        // --------------------------
        var main = new ProsCtrl($state.params.id);
        main.getPros();

        function init() {
            console.log('Reinit pros');
            $scope.pros = main.pros;
        }
        $scope.deletePoint = function(id) {
            main.deletePoint(id, $state.params.id);
        };
        // Support Template api
        $scope.prosCtrlApi = {
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
            getPros: function(showAllAfterIndx) {
                /*
					showAllAfterIndx : created to make sure new data is shown after new support is submitted, because the data cant be pushed because the id does not come back.
            	*/
                main.getPros(showAllAfterIndx);
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
            removeSupport: function(pointId, supportId, proIndx, supportIndx) {
                main.removeSupport(pointId, supportId, proIndx, supportIndx);
            }
        };
    }
]);