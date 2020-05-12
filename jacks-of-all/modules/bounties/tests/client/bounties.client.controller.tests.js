'use strict';

(function() {
	// Bounties Controller Spec
	describe('Bounties Controller Tests', function() {
		// Initialize global variables
		var BountiesController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Bounties controller.
			BountiesController = $controller('BountiesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Bounty object fetched from XHR', inject(function(Bounties) {
			// Create sample Bounty using the Bounties service
			var sampleBounty = new Bounties({
				name: 'New Bounty'
			});

			// Create a sample Bounties array that includes the new Bounty
			var sampleBounties = [sampleBounty];

			// Set GET response
			$httpBackend.expectGET('api/bounties').respond(sampleBounties);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.bounties).toEqualData(sampleBounties);
		}));

		it('$scope.findOne() should create an array with one Bounty object fetched from XHR using a bountyId URL parameter', inject(function(Bounties) {
			// Define a sample Bounty object
			var sampleBounty = new Bounties({
				name: 'New Bounty'
			});

			// Set the URL parameter
			$stateParams.bountyId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/api\/bounties\/([0-9a-fA-F]{24})$/).respond(sampleBounty);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.bounty).toEqualData(sampleBounty);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Bounties) {
			// Create a sample Bounty object
			var sampleBountyPostData = new Bounties({
				name: 'New Bounty'
			});

			// Create a sample Bounty response
			var sampleBountyResponse = new Bounties({
				_id: '525cf20451979dea2c000001',
				name: 'New Bounty'
			});

			// Fixture mock form input values
			scope.name = 'New Bounty';

			// Set POST response
			$httpBackend.expectPOST('api/bounties', sampleBountyPostData).respond(sampleBountyResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Bounty was created
			expect($location.path()).toBe('/bounties/' + sampleBountyResponse._id);
		}));

		it('$scope.update() should update a valid Bounty', inject(function(Bounties) {
			// Define a sample Bounty put data
			var sampleBountyPutData = new Bounties({
				_id: '525cf20451979dea2c000001',
				name: 'New Bounty'
			});

			// Mock Bounty in scope
			scope.bounty = sampleBountyPutData;

			// Set PUT response
			$httpBackend.expectPUT(/api\/bounties\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/bounties/' + sampleBountyPutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid bountyId and remove the Bounty from the scope', inject(function(Bounties) {
			// Create new Bounty object
			var sampleBounty = new Bounties({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Bounties array and include the Bounty
			scope.bounties = [sampleBounty];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/api\/bounties\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleBounty);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.bounties.length).toBe(0);
		}));
	});
}());