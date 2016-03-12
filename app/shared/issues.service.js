System.register(['angular2/core', '../mock/mock-issues'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_issues_1;
    var IssuesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_issues_1_1) {
                mock_issues_1 = mock_issues_1_1;
            }],
        execute: function() {
            IssuesService = (function () {
                function IssuesService() {
                }
                /* GET */
                IssuesService.prototype.getAllIssues = function () {
                    return mock_issues_1.ISSUES;
                };
                IssuesService.prototype.getIssue = function (issueId) {
                    for (var i = mock_issues_1.ISSUES.length - 1; i >= 0; i--) {
                        if (mock_issues_1.ISSUES[i]._id === issueId) {
                            return mock_issues_1.ISSUES[i];
                        }
                    }
                    console.log('No issue found');
                };
                /* POST */
                IssuesService.prototype.insertIssue = function (issue) {
                    mock_issues_1.ISSUES.unshift(issue);
                };
                /* DELETE */
                IssuesService.prototype.deleteIssue = function (issue) {
                    mock_issues_1.ISSUES.splice(mock_issues_1.ISSUES.indexOf(issue), 1);
                };
                /*VOTING ISSUES SUPPORT*/
                IssuesService.prototype.voteIssue = function (issue, voteType) {
                    if (voteType === 'upvote') {
                        mock_issues_1.ISSUES[mock_issues_1.ISSUES.indexOf(issue)].ups++;
                    }
                    else if (voteType === 'downvote') {
                        mock_issues_1.ISSUES[mock_issues_1.ISSUES.indexOf(issue)].downs++;
                    }
                    else {
                        console.log('No type recognized');
                    }
                };
                IssuesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], IssuesService);
                return IssuesService;
            }());
            exports_1("IssuesService", IssuesService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQWlDQSxDQUFDO2dCQWhDQSxTQUFTO2dCQUNULG9DQUFZLEdBQVo7b0JBQ0MsTUFBTSxDQUFDLG9CQUFNLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRCxnQ0FBUSxHQUFSLFVBQVMsT0FBZTtvQkFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0MsRUFBRSxDQUFBLENBQUMsb0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUEsQ0FBQzs0QkFDN0IsTUFBTSxDQUFDLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLENBQUM7b0JBQ0YsQ0FBQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QsVUFBVTtnQkFDVixtQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0QsWUFBWTtnQkFDWixtQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsb0JBQU0sQ0FBQyxNQUFNLENBQUMsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBRUQseUJBQXlCO2dCQUN6QixpQ0FBUyxHQUFULFVBQVUsS0FBWSxFQUFFLFFBQWdCO29CQUN2QyxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDM0Isb0JBQU0sQ0FBQyxvQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNyQyxDQUFDO29CQUFDLElBQUksQ0FDTixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDN0Isb0JBQU0sQ0FBQyxvQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN2QyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtvQkFDbEMsQ0FBQztnQkFDRixDQUFDO2dCQWpDRjtvQkFBQyxpQkFBVSxFQUFFOztpQ0FBQTtnQkFrQ2Isb0JBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELHlDQWlDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9pc3N1ZXMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lzc3VlfSBmcm9tICcuL2lzc3VlJztcbmltcG9ydCB7SVNTVUVTfSBmcm9tICcuLi9tb2NrL21vY2staXNzdWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIElzc3Vlc1NlcnZpY2Uge1xuXHQvKiBHRVQgKi9cblx0Z2V0QWxsSXNzdWVzKCkge1xuXHRcdHJldHVybiBJU1NVRVM7XG5cdH1cblx0Z2V0SXNzdWUoaXNzdWVJZDogc3RyaW5nKXtcblx0XHRmb3IgKHZhciBpID0gSVNTVUVTLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRpZihJU1NVRVNbaV0uX2lkID09PSBpc3N1ZUlkKXtcblx0XHRcdFx0cmV0dXJuIElTU1VFU1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc29sZS5sb2coJ05vIGlzc3VlIGZvdW5kJyk7XG5cdH1cblx0LyogUE9TVCAqL1xuXHRpbnNlcnRJc3N1ZShpc3N1ZTogSXNzdWUpe1xuXHRcdElTU1VFUy51bnNoaWZ0KGlzc3VlKTtcblx0fVxuXHQvKiBERUxFVEUgKi9cblx0ZGVsZXRlSXNzdWUoaXNzdWU6IElzc3VlKXtcblx0XHRJU1NVRVMuc3BsaWNlKElTU1VFUy5pbmRleE9mKGlzc3VlKSwgMSk7XG5cdH1cblxuXHQvKlZPVElORyBJU1NVRVMgU1VQUE9SVCovXG5cdHZvdGVJc3N1ZShpc3N1ZTogSXNzdWUsIHZvdGVUeXBlOiBzdHJpbmcpe1xuXHRcdGlmICh2b3RlVHlwZSA9PT0gJ3Vwdm90ZScpIHtcblx0XHRcdElTU1VFU1tJU1NVRVMuaW5kZXhPZihpc3N1ZSldLnVwcysrO1xuXHRcdH0gZWxzZVxuXHRcdGlmICh2b3RlVHlwZSA9PT0gJ2Rvd252b3RlJykge1xuXHRcdFx0SVNTVUVTW0lTU1VFUy5pbmRleE9mKGlzc3VlKV0uZG93bnMrKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ05vIHR5cGUgcmVjb2duaXplZCcpXG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
