'use strict';
angular.module('angular.factory.IssueFactory', [])
    .factory('IssueFactory', [
        'issuesService',
        function(issuesService) {
            return {
                /* For all issues*/
                getIssues: function() {
                    
                },
                /* For one issue */
                getIssue: function() {
                },
                /* New Issues */
                postIssue: function(issue) {
                    issuesData.unshift(issue);
                },
                /* New Pro */
                addPro: function(getId, pro) {
                    console.log('Getting issue: ' + getId);
                    var indx = null;
                    for (var i = 0; i < issuesData.length; i++) {
                        if (issuesData[i]._id == getId) {
                            indx = i;
                        }
                    }
                    console.log(issuesData[indx]);
                    issuesData[indx].pros.unshift(pro);
                },
                /* New Pro */
                addCon: function(getId, con) {
                    console.log('Getting issue: ' + getId);
                    var indx = null;
                    for (var i = 0; i < issuesData.length; i++) {
                        if (issuesData[i]._id == getId) {
                            indx = i;
                        }
                    }
                    issuesData[indx].cons.unshift(con);
                },
                addSupport: function(getId, pointIndex, type, data) {
                    // Find post id
                    var indx = null;
                    for (var i = 0; i < issuesData.length; i++) {
                        if (issuesData[i]._id == getId) {
                            indx = i;
                        }
                    }
                    console.log(indx, type, data);
                    // insert data dependent on type
                    if (type == 'pro') {
                        issuesData[indx].pros[pointIndex].subSupport.unshift(data);
                    } else {
                        issuesData[indx].cons[pointIndex].subSupport.unshift(data);
                    }
                }
            };
        }
    ]);