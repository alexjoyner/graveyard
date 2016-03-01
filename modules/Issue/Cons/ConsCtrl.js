'use strict';
angular.module('angular.controller.ConsCtrl', [])
    .controller('ConsCtrl', [
        '$scope',
        '$state',
        '$location',
        '$anchorScroll',
        'issuesService',
        function($scope, $state, $location, $anchorScroll, issuesService) {
            // ********* !!CONS!! ***********
            var issueId = $state.params.id;

            var conTemp = {
                point: ''
            };

            function init() {
                issuesService.getCons(issueId).then(
                    function(res) {
                        $scope.pros = res;
                    });
            }


        }
    ]);