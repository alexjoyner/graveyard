'use strict';

var bountiesApp = angular.module('bounties');

// Bounties controller
bountiesApp.controller('BountiesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Bounties', 'BountyByUserIdService',
	function($scope, $stateParams, $location, Authentication, Bounties, BountyByUserIdService) {
		$scope.authentication = Authentication;
		// Create new Bounty object
		$scope.bounties = [];
		$scope.competitiveTotal = 0;
		// console.log($scope.authentication.user.profileImageURL);
		$scope.userImage = $scope.authentication.user.profileImageURL;

		// console.log($scope.authentication.user.profileImageURL);
		$scope.userID = $scope.authentication.user._id;

		// SELECTOR Bars Structure
  		$scope.typeJob = [
		    { label: 'General Job (No Professional Required)', value: 1 },
		    { label: '3D Design and Printing', value: 2 },
		    { label: 'PC Repair', value: 3 },
		    { label: 'Basic Web Design', value: 4 },
		    { label: 'Math Tutoring', value: 5 }
		  ];
		    
		// Here we are referencing the same object, so Angular inits the select box correctly
  		$scope.typeOfJob = $scope.typeJob;

		// 2nd Selector Bar structure
		$scope.typeOfWorker = [
		    { label: 'Jack', specialtyFactor: 1 },
		    { label: 'Master Jack', specialtyFactor: 2 }
		  ];
		    
		// Here we are referencing the same object, so Angular inits the select box correctly
  		$scope.workerType = $scope.typeOfWorker;

  		// 2nd Selector Bar structure
  		$scope.numWorkers = [
		    { value: 2 },
		    { value: 3 },
		    { value: 4 },
		    { value: 5 },
		    { value: 6 },
		    { value: 7 },
		    { value: 8 },
		    { value: 9 },
		    { value: 10 }
		  ];
		    
		// Here we are referencing the same object, so Angular inits the select box correctly
  		$scope.workerNumber = $scope.numWorkers;

  		// 2nd Selector Bar structure
  		$scope.numHours = [
		    { value: 1 },
		    { value: 2 },
		    { value: 3 },
		    { value: 4 },
		    { value: 5 }
		  ];
		    
		// Here we are referencing the same object, so Angular inits the select box correctly
  		$scope.hours = $scope.numHours;
		
		$scope.goToCreate = function(){
			$location.path('bounties/create');
		};
		$scope.setClientTotal = function(){
			$scope.calculateStuff();
			$scope.total = $scope.competitiveTotal;
		};
		// Create new Bounty
		$scope.create = function() {
			// Create new Bounty object
			var bounty = new Bounties({
				title: this.title,
                hours: this.hours,
                typeOfJob: this.typeOfJob,
                workerNumber: this.workerNumber,
                description: this.description,
                total: this.total
			});

			// // Redirect after save
			// bounty.$save(function(response) {

			// Notify.sendMsg('NewBounty', {'id': response._id});

			// }, function(errorResponse) {
			// 	$scope.error = errorResponse.data.message;
			// });
			// Redirect after save
			bounty.$save(function(response) {
				$location.path('bounties/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Bounty
		$scope.remove = function( bounty ) {
			if ( bounty ) { bounty.$remove();

				for (var i in $scope.bounties ) {
					if ($scope.bounties [i] === bounty ) {
						$scope.bounties.splice(i, 1);
					}
				}
			} else {
				$scope.bounty.$remove(function() {
					$location.path('bounties');
				});
			}
		};

		// Update existing Bounty
		$scope.update = function() {
			var bounty = $scope.bounty ;
			console.log(bounty);
			bounty.$update(function() {
				$location.path('bounties/' + bounty._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Bounties
		$scope.find = function() {
			$scope.bounties = Bounties.query();
			// var client = $scope.authentication;
			// console.log(client.user._id);
			// $scope.bounties = BountyByUserIdService.query({
			// 	userID: $stateParams.userID
			// });
		};

		// Find existing Bounty
		$scope.findOne = function() {
			$scope.bounty = Bounties.get({ 
				bountyId: $stateParams.bountyId
			});
		};

		// Pricing Algorithm for competitive price
		$scope.calculateStuff = function(){
			if($scope.typeOfJob.label === 'General Job (No Professional Required)'){
				$scope.workerType = $scope.typeOfWorker[0];
			}
			else if($scope.typeOfJob.label !== 'General Job (No Professional Required)' && $scope.typeOfJob.label !== ''){
				$scope.workerType = $scope.typeOfWorker[1];
			}

			$scope.competitiveTotal = ($scope.hours.value * 13 * 1 * $scope.workerType.specialtyFactor);
		};
	}
]);

bountiesApp.controller('ButtonsCtrl', function ($scope) {
  // $scope.radioModel = 'Middle';

  // $scope.checkModel = {
  //   left: false,
  //   middle: true,
  //   right: false
  // };
});
bountiesApp.filter('isClient', function(Authentication){
  var authentication = Authentication;
  console.log(authentication);
    return function(listOfBounties){
        var listOfAll = [];
        for(var i=0; i < listOfBounties.length; i++){
	        if(authentication.user._id === '550f464b207ad7821e5f3915'){
	          	listOfAll.push(listOfBounties[i]);
	        }else
	        if(listOfBounties[i].user._id === authentication.user._id){
	          listOfAll.push(listOfBounties[i]);
	        }

	        if(listOfBounties[i].typeOfJob.label === 'General Job (No Professional Required)'){
				listOfAll[i].workerType = 'Jack';
			}
			else if(listOfBounties[i].typeOfJob.label !== 'General Job (No Professional Required)' && listOfBounties[i].typeOfJob.label !== ''){
				listOfAll[i].workerType = 'Master Jack';
			}
	      }
      return listOfAll;
    };
});
bountiesApp.directive('bountyList', ['Bounties', 'Notify', function(Bounties, Notify){
    return{
      restrict: 'E',
      transclude: true,
      templateUrl: 'modules/bounties/views/bounty-list-template.html',
      link: function(scope, element, attrs){

          // when a new bounty is added, update the bounty list
          Notify.getMsg('NewBounty', function(event, data){
              scope.bountiesCtrl.bounties = Bounties.query();
          });
      }
    };
}]);