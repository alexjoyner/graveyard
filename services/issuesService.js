'use strict';
angular.module('angular.service.issuesService', [])
    .service('issuesService', [
        '$http',
        '$q',
        '$rootScope',
        function($http, $q, $rootScope) {
            this.getIssues = function() {
                var defer = $q.defer();
                $http.get($rootScope.endpoint + '/issues/all')
                    .success(function(res) {
                        console.log('getIssues Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('getIssues Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.getIssue = function(id) {
                var defer = $q.defer();
                $http.get($rootScope.endpoint+'/issues/'+id)
                    .success(function(res) {
                        console.log('getIssue Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('getIssue Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.newIssue = function(issueInfo) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/issues/newIssue', issueInfo)
                    .success(function(res) {
                        console.log('newIssue Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('newIssue Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.deleteIssue = function(id) {
                var defer = $q.defer();
                $http.delete($rootScope.endpoint + '/issues/deleteIssue/' + id)
                    .success(function(res) {
                        console.log('deleteIssue Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('deleteIssue Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            
            this.addPro = function(id, pointInfo) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/issues/'+id+'/addPro', pointInfo)
                    .success(function(res) {
                        console.log('addPro Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('addPro Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.addCon = function(id, pointInfo) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/issues/'+id+'/addCon', pointInfo)
                    .success(function(res) {
                        console.log('addCon Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('addCon Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            this.addSupport = function(supportInfo) {
                var defer = $q.defer();
                $http.post($rootScope.endpoint + '/issues/addSupport', supportInfo)
                    .success(function(res) {
                        console.log('addSupport Success: ', res);
                        defer.resolve(res);
                    })
                    .error(function(err) {
                        console.log('addSupport Error: ', err);
                        defer.reject(err);
                    });
                return defer.promise;
            };
            // this.postVote = function(voteInfo) {
            //     var defer = $q.defer();
            //     $http.post($rootScope.endpoint + '/postVote', voteInfo)
            //         .success(function(res) {
            //             console.log('postVote Success: ', res);
            //             defer.resolve(res);
            //         })
            //         .error(function(err) {
            //             console.log('postVote Error: ', err);
            //             defer.reject(err);
            //         });
            //     return defer.promise;
            // };
            

        }
    ]);