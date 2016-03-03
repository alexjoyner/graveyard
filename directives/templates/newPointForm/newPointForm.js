'use strict';
angular.module('angular.directive.newPointForm', []).directive('newPointForm', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            api: '=',
            info: '=',
            index: '@',
            formType: '@',
            pointType: '@',
            pointId: '@'
        },
        templateUrl: './directives/templates/newPointForm/newPointForm.html',
        controller: function($scope, $state, pointsService, supportsService) {
            // Main Directive constructor
            // --------------------------
            function NewDataForm() {}
            NewDataForm.prototype.createPoint = function(pointType, info) {
                var postInfo = {
                    type: pointType,
                    issueId: $state.params.id,
                    newPoint: info
                };
                console.log(postInfo);
                pointsService.createPoint(postInfo).then(function(res) {
                    $scope.api.getPoints();
                    $scope.api.closeNewDataForm();
                });
            };
            NewDataForm.prototype.createSupport = function(pointId, pointType, newSupportData) {
                var supportInfo = {
                    type: pointType,
                    issueId: $state.params.id,
                    pointId: pointId,
                    newSupportData: newSupportData
                };
                supportsService.createSupportPoint(supportInfo).then(function(res) {
                    $scope.api.getPoints($scope.index);
                });
            };
            // Declare directive main
            // --------------------------
            var main = new NewDataForm();

            function init() {
                $scope.newPoint = {
                    problem: '',
                    support: {
                        evidence: '',
                        sources: '', //Arrayfi this
                        tags: {
                            metaData: false,
                            credible: false,
                            media: false,
                            opinion: false
                        }
                    }
                };
            }
            $scope.createPoint = function() {
                $scope.newPoint.support.sources = $scope.newPoint.support.sources.split(',');
                main.createPoint($scope.pointType, $scope.newPoint);
                init();
            };
            $scope.createSupport = function(pointId) {
                $scope.newPoint.support.sources = $scope.newPoint.support.sources.split(',');
                main.createSupport($scope.pointId, $scope.pointType, $scope.newPoint.support);
            };
            init();
        }
    };
});