'use strict';
angular.module('angular.controller.ProsCtrl', []).controller('ProsCtrl', ['$scope', '$state', '$location', '$anchorScroll', 'prosService',
    function($scope, $state, $location, $anchorScroll, prosService) {
        // ********* !!PROS!! ***********
        function ProsCtrl(id) {
            this.pros = [];
            this.issueId = id;
        }
        ProsCtrl.prototype.getPros = function() {
            prosService.getPros(this.issueId).then(function(res) {
                console.log('PROS: ', res.pros);
                main.pros = res.pros;
                init();
            });
        };
        ProsCtrl.prototype.deletePoint = function(id) {
            prosService.deletePro($state.params.id, id).then(function(res) {
                main.getPros();
            });
        };
        // Declare directive main
        // --------------------------
        var main = new ProsCtrl($state.params.id);
        main.getPros();

        function init() {
            $scope.pros = main.pros;
            $scope.prosApi = {
                getPros: function() {
                    main.getPros();
                },
                closeNewDataForm: function() {
                    $scope.addPoint = false;
                }
            };
        }
        $scope.deletePoint = function(id) {
            main.deletePoint(id, $state.params.id);
        };
        // Support Template api
        $scope.supportApi = {
            toggleSupportForm: function(issueIndx) {
                var el = angular.element(document.querySelector('#supportForm' + issueIndx));
                el.toggleClass('no-show');
            },
            toggleMoreSupport: function(issueIndx) {
                var el = angular.element(document.querySelector('#moreSupport' + issueIndx));
                el.toggleClass('no-show');
            },
            goToTop: function(indx) {
                // set the location.hash to the id of
                // the element you wish to scroll to.
                $location.hash('issue' + indx);
                // call $anchorScroll()
                $anchorScroll.yOffset = 20;
                $anchorScroll();
            }
        };
    }
]);