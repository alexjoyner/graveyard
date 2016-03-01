'use strict';
angular.module('angular.directive.newDataForm', []).directive('newDataForm', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            api: '=',
            info: '=',
            index: '@',
            formType: '@',
            pointType: '@'
        },
        templateUrl: './directives/templates/newDataForm/newDataForm.html',
        controller: function($scope, $state, prosService, consService) {
            // Main Directive constructor
            // --------------------------
            function NewDataForm() {}
            NewDataForm.prototype.createPoint = function(info, pointType) {
                var postInfo = {
                    issueId: $state.params.id,
                    newPointData: info
                };
                if (pointType === 'pro') {
                    prosService.createPro(postInfo).then(function(res) {
                        $scope.api.getPros();
                        $scope.api.closeNewDataForm();
                    });
                }
                if (pointType === 'con') {
                    consService.createCon(postInfo).then(function(res) {
                        $scope.api.getCons();
                    });
                }
            };
            // Declare directive main
            // --------------------------
            var main = new NewDataForm();

            function init() {
                $scope.newDataInfo = {
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
                $scope.newDataInfo.support.sources = $scope.newDataInfo.support.sources.split(',');
                main.createPoint($scope.newDataInfo, $scope.pointType);
                init();
            };
            init();
        }
    };
});