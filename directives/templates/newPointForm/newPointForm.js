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
                    $scope.api.getSupport(pointId, $scope.index);
                    $scope.api.toggleMoreSupport($scope.index);
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
                        source: '', //Arrayfi this
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
                main.createPoint($scope.pointType, $scope.newPoint);
                init();
            };
            $scope.createSupport = function(pointId) {
                main.createSupport($scope.pointId, $scope.pointType, $scope.newPoint.support);
            };
            init();
        }
    };
});