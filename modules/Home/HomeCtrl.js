'use strict';
var issues = [];
angular.module('angular.controller.HomeCtrl', [])
    .controller('HomeCtrl', [
        '$scope',
        '$state',
        'issuesService',
        function($scope, $state, issuesService) {
            $scope.MainHeading = 'ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
            $scope.quickInstructions = 'ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
            $scope.startQuestion = false;

            var issues = [];


            function init() {
                issuesService.getIssues().then(
                    function(res) {
                        issues = res;
                        $scope.issues = issues;
                    },
                    function(err) {
                        console.log('Err');
                    });
            }
            init();
            $scope.questionTemplate = {
                mainQuestion: '',
                questionDetail: ''
            };
            $scope.issueApi = {
                deleteIssue: function(id, $event) {
                    $event.stopPropagation();
                    issuesService.deleteIssue(id).then(
                        function(res) {
                            console.log('Success deleting');
                            init();
                        },
                        function(err) {
                            console.log(err);
                        });

                }
            };
            $scope.newQuestionApi = {
                postQuestion: function() {
                    issuesService.newIssue($scope.questionTemplate).then(
                        function(res) {
                            // $state.go('Issue.Pros', {
                            //     id: res._id
                            // });
                            init();
                        },
                        function(err) {
                            console.log(err);
                        });
                    init();
                }
            };
        }
    ]);