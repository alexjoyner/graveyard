'use strict';
angular.module('angular.directive.mainPoint', [])
    .directive('mainPoint', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '=',
                info: '=',
                pointType: '@'
            },
            templateUrl: './directives/templates/mainPoint/mainPoint.html',
            controller: function($state, $scope, votesService) {
                $scope.votePoint = function(voteType) {
                    votesService.votePoint({
                        voteType: voteType,
                        issueId: $state.params.id,
                        pointType: $scope.pointType,
                        pointId: $scope.info._id
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