'use strict';
angular.module('angular.directive.supportPoint', [])
    .directive('supportPoint', function() {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                api: '=',
                issue: '=',
                support: '=',
                pointId: '@',
                supportId: '@',
                parentIndex: '@',
                index: '@',
                pointType: '@'
            },
            templateUrl: './directives/templates/supportPoint/supportPoint.html',
            controller: function($state, $scope, votesService) {
                $scope.voteSupport = function(voteType) {
                    votesService.voteSupport({
                        voteType: voteType,
                        issueId: $state.params.id,
                        pointType: $scope.pointType,
                        pointId: $scope.pointId,
                        supportId: $scope.support._id
                    }).then(function(res) {
                        if (voteType === 'ups') {
                            $scope.info.ups++;
                        }
                        if (voteType === 'downs') {
                            $scope.info.downs++;
                        }
                    });
                };
            }
        };
    });