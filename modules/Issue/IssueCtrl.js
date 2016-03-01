'use strict';
angular.module('angular.controller.IssueCtrl', [])
    .controller('IssueCtrl', [
        '$scope',
        '$state',
        'issuesService',
        function($scope, $state, issuesService) {
            // Get issues data
            issuesService.getIssue($state.params.id).then(
                function(res) {
                    // Declare issue data in scope
                    $scope.issueData = res;
                },
                function(err) {
                    console.log(err);
                });

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
                    var supportInfo = {
                        issueId: $scope.issueData._id,
                        pointIndx: pointIndx,
                        type: type,
                        newSupportInfo: $scope.issueTemplate.subSupport[0]
                    };
                    issuesService.addSupport(supportInfo);
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
            $scope.deleteMainPoint = function(id, type) {
                issuesService.deleteMainPoint($scope.issueData._id, id, type).then(
                    function(res) {
                        init();
                    });
            };
        }
    ]);