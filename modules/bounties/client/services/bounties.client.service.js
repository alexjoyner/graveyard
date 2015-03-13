'use strict';

//Bounties service used to communicate Bounties REST endpoints
angular.module('bounties')

	.factory('Bounties', ['$resource',
		function($resource) {
			return $resource('api/bounties/:bountyId', { bountyId: '@_id'
			}, {
				update: {
					method: 'PUT'
				}
			});
		}
	])
	.factory('UserId', ['$resource',
		function($resource) {
			return $resource('api/bounties/', { id: '@_id'
			}, {
				update: {
					method: 'PUT'
				}
			});
		}
	])

	.factory('Notify', ['$rootScope', function($rootScope) {
	        var notify = {};
	        
	        notify.sendMsg = function(msg, data){
	            data = data || {};
	            $rootScope.$emit(msg, data);
	            
	            console.log('message sent!');
	            
	        };
	        
	        notify.getMsg = function(msg, func, scope){
	            var unbind = $rootScope.$on(msg, func);
	        
	            if(scope){
	                scope.$on('destroy',unbind);   
	            }
	        };
	        return notify;
	    }
	]);