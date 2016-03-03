'use strict';
angular.module('angular.directive.homeIssue', [])
    .directive('homeIssue', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '=',
                issue: '=',
                index: '@'
            },
            templateUrl: './directives/templates/homeIssue/homeIssue.html',
            controller: function($scope, votesService) {
                $scope.voteIssue = function($event, voteType) {
                    $event.stopPropagation();
                    votesService.voteIssue({
                        voteType: voteType,
                        issueId: $scope.issue._id
                    }).then(function(res) {
                        if (voteType === 'upvote') {
                            $scope.issue.ups++;
                        }
                        if (voteType === 'downvote') {
                            $scope.issue.downs++;
                        }
                    });
                };
            }
        };
    });