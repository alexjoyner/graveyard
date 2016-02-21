'use strict';
var issues = [];
angular.module('angular.controller.HomeCtrl', [])
    .controller('HomeCtrl', [
        '$scope',
        '$state',
        'IssueFactory',
        'issuesService',
        function($scope, $state, IssueFactory, issuesService) {
            $scope.MainHeading = 'ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
            $scope.quickInstructions = 'ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
            $scope.startQuestion = false;

            var issues = [];
            issuesService.getIssues().then(
                function(res) {
                    issues = res;
                    init();
                },
                function(err) {
                    console.log('Err');
                });


            function init() {
                $scope.issues = issues;
                console.log($scope.issues);
            }
            $scope.questionTemplate = {
                _id: null,
                mainQuestion: '',
                questionDetail: '',
                pros: [],
                cons: []
            };
            $scope.newQuestionApi = {
                postQuestion: function() {
                    $scope.questionTemplate._id = $scope.issues.length;
                    issuesService.newIssue($scope.questionTemplate).then(
                        function(res) {
                            $state.go('Issue.Pros', {
                                id: $scope.questionTemplate._id
                            });
                        },
                        function(err) {
                            console.log(err);
                        });
                    init();
                }
            };
        }
    ]);