'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts = [
            {
                icon: 'glyphicon-user',
                colour: 'btn-success',
                total: '20408',
                description: 'TOTAL CUSTOMERS'
            },
            {
                icon: 'glyphicon-calendar',
                colour: 'btn-primary',
                total: '8,382',
                description: 'UPCOMING EVENTS'
            },
            {
                icon: 'glyphicon-edit',
                colour: 'btn-success',
                total: '527',
                description: 'NEW CUSTOMERS IN 24H'
            },
            {
                icon: 'glyphicon-record',
                colour: 'btn-info',
                total: '20408',
                description: 'EMAILS SENT'
            },
            {
                icon: 'glyphicon-eye-open',
                colour: 'btn-warning',
                total: '85,000',
                description: 'FOLLOW UPS REQUIRED'
            },
            {
                icon: 'glyphicon-user',
                colour: 'btn-danger',
                total: '268',
                description: 'REFERRALS TO MODERATE'
            }
        ];
	}
])
.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [
    
    {image: '/modules/core/img/yardWork.jpg', text: 'Yard Work'},
    {image: '/modules/core/img/Lawn-Safety.jpg', text: 'Lawn Care'},
    {image: '/modules/core/img/specialtyServices.jpg', text: 'Specialty Services'},
    {image: '/modules/core/img/anything.png', text: 'Post a bounty today!'}
  ];
  // $scope.addSlide = function() {
  //   var newWidth = 600 + slides.length + 1;
  //   slides.push({
  //     image: '/modules/core/controllers/cat.jpg',
  //     text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
  //       ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
  //   });
  // };
  // for (var i=0; i<4; i++) {
  //   $scope.addSlide();
  // }
})
.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});