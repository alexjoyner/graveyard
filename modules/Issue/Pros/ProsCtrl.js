'use strict';
angular.module('angular.controller.ProsCtrl', [])
	.controller('ProsCtrl', [
		'$scope',
		'$state',
		'$location',
		'$anchorScroll',
		'prosService',
		function($scope, $state, $location, $anchorScroll, prosService) {
			// ********* !!PROS!! ***********
			function ProsCtrl(id) {
				this.pros = [];
				this.issueId = id;
			}
			ProsCtrl.prototype.getPros = function() {
				prosService.getPros(this.issueId).then(
					function(res) {
						console.log('PROS: ', res.pros);
						main.pros = res.pros;
						init();
					});
			};
			// Declare directive main
			// --------------------------
			var main = new ProsCtrl($state.params.id);
			main.getPros();

			function init() {
				$scope.pros = main.pros;
				$scope.prosApi = {
					getPros: function() {
						main.getPros();
					}
				};
			}

		}
	]);