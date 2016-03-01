'use strict';
angular.module('angular.controller.ProsCtrl', [])
    .controller('ProsCtrl', [
        '$scope',
        '$state',
        '$location',
        '$anchorScroll',
        'prosService',
        function($scope, $state, $location, $anchorScroll, prosService) {
            // ********* !!PROS!! ***********
            function ProsCtrl(id) {
                this.pros = [];
                this.issueId = id;
            }
            ProsCtrl.prototype.getPros = function() {
                prosService.getPros(this.issueId).then(
                    function(res) {
                        main.pros = res;
                        init();
                    });
            };
            ProsCtrl.prototype.createPro = function(info) {
                prosService.createPro(info).then(
                    function(res) {
                        main.getPros();
                    });
            };

            // Declare directive main
            // --------------------------
            var main = new ProsCtrl($state.params.id);
            main.getPros();

            function init() {
                $scope.proTemplate = {
                    point: ''
                };
                $scope.pros = main.pros;
                $scope.createPro = function() {
                    main.createPro($scope.proTemplate);
                };
            }

        }
    ]);