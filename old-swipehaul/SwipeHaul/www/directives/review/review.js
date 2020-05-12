'use strict';
angular.module('angular.directive.review', [])
    .directive('review', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                api: '='
            },
            templateUrl: './directives/review/review.html',
            controller: function($scope, $state, PostDataFac) {
                // Main Directive constructor
                // --------------------------
                function Review() {

                }
                Review.prototype.finalized = function() {

                };

                // Declare directive main
                // --------------------------
                var main = new Review();

                function init() {
                    $scope.postInfo = PostDataFac.getAllData();
                    console.log($scope.postInfo);
                    $scope.api.finalize = function() {
                        $state.go('Expectations');
                    };
                }
                init();
            }
        };
    });