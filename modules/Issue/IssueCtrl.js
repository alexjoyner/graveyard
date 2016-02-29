'use strict';
angular.module('angular.controller.IssueCtrl', [])
    .controller('IssueCtrl', [
        '$scope',
        '$state',
        '$location',
        '$anchorScroll',
        'IssueFactory',
        'issuesService',
        function($scope, $state, $location, $anchorScroll, IssueFactory, issuesService) {

            // New Point Data Format
            function init() {
                // Get issues data
                issuesService.getIssue($state.params.id).then(
                    function(res) {
                        // Declare issue data in scope
                        $scope.issueData = res;
                    },
                    function(err) {
                        console.log(err);
                    });
                // Variables
                $scope.addPoint = false;
                $scope.addSupport = true;
                $scope.issueTemplate = {
                    problem: '',
                    ups: 0,
                    downs: 0,
                    showMore: false,
                    addSupport: false,
                    subSupport: [{
                        evidence: '',
                        sources: '', //Arrayfi this
                        tags: {
                            metaData: false,
                            credible: false,
                            media: false,
                            opinion: false
                        },
                        ups: 0,
                        downs: 0
                    }]
                };
            }
            init();

            // New Data Api
            $scope.newDataApi = {
                addMainProPoint: function() {
                    $scope.issueTemplate.subSupport[0].sources = $scope.issueTemplate.subSupport[0].sources.split(',');
                    issuesService.addPro($scope.issueData._id, $scope.issueTemplate).then(
                        function() {
                            init();
                        });
                },
                addMainConPoint: function() {
                    $scope.issueTemplate.subSupport[0].sources = $scope.issueTemplate.subSupport[0].sources.split(',');
                    issuesService.addCon($scope.issueData._id, $scope.issueTemplate).then(
                        function(res) {
                            init();
                        });
                },
                addSupport: function(pointIndx, type) {
                    $scope.issueTemplate.subSupport[0].sources = $scope.issueTemplate.subSupport[0].sources.split(',');
                    console.log('Type: ', type);
                    issuesService.addSupport($scope.issueData._id, pointIndx, type, $scope.issueTemplate.subSupport[0]);
                    init();
                }
            };

            // Support Template api
            $scope.supportApi = {
                goToTop: function(indx) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash('issue' + indx);

                    // call $anchorScroll()
                    $anchorScroll.yOffset = 20;
                    $anchorScroll();
                }
            };

            // Remove a support point
            $scope.deleteMainPoint = function(id, type){
                issuesService.deleteMainPoint($scope.issueData._id, id, type).then(
                    function(res){
                        init();
                    });
            };
        }
    ]);