'use strict';

var bountiesApp = angular.module('bounties');

// Bounties controller
bountiesApp.controller('BountiesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Bounties', 'UserId',
	function($scope, $stateParams, $location, Authentication, Bounties, UserId) {
		$scope.authentication = Authentication;
		// Create new Bounty object
		$scope.bounties = [];
		console.log($scope.authentication.user.profileImageURL);
		$scope.userImage = $scope.authentication.user.profileImageURL;
		$scope.competitiveTotal = 130;

		$scope.workerType = [
		    { label: 'Jack', value: 1 },
		    { label: 'Master Jack', value: 2 }
		  ];
		    
		// Here we are referencing the same object, so Angular inits the select box correctly
  		$scope.bountyWorkerType = $scope.workerType;

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
  		$scope.bountyWorkerNumber = $scope.numWorkers;
		
		$scope.goToCreate = function(){
			$location.path('bounties/create');
		};
		$scope.setClientTotal = function(){
			$scope.bountyTotal = $scope.competitiveTotal;
		};
		// Create new Bounty
		$scope.create = function() {
			// Create new Bounty object
			var bounty = new Bounties({
				firstName: this.firstName,
                surname: this.surname,
                suburb: this.suburb,
                country: this.country,
                industry: this.industry,
                email: this.email,
                phone: this.phone,
                referred: this.referred,
                channel: this.channel
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

			bounty.$update(function() {
				$location.path('bounties/' + bounty._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Bounties
		$scope.find = function() {
			var client = $scope.authentication;
			console.log(client);
			// if(client.user._id === '54efe6ad3e3ea705e46fd69d'){
	          	$scope.bounties = Bounties.query();
	        // }
		};

		// Find existing Bounty
		$scope.findOne = function() {
			$scope.bounty = Bounties.get({ 
				bountyId: $stateParams.bountyId
			});
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
        if(authentication.user._id === '54efe6ad3e3ea705e46fd69d'){
          listOfAll.push(listOfBounties[i]);
        }else
        if(listOfBounties[i].user._id === authentication.user._id){
          listOfAll.push(listOfBounties[i]);
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