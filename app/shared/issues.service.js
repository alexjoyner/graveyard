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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQXFCQSxDQUFDO2dCQXBCQSxTQUFTO2dCQUNULG9DQUFZLEdBQVo7b0JBQ0MsTUFBTSxDQUFDLG9CQUFNLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRCxnQ0FBUSxHQUFSLFVBQVMsT0FBZTtvQkFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0MsRUFBRSxDQUFBLENBQUMsb0JBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUEsQ0FBQzs0QkFDN0IsTUFBTSxDQUFDLG9CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLENBQUM7b0JBQ0YsQ0FBQztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QsVUFBVTtnQkFDVixtQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0QsWUFBWTtnQkFDWixtQ0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsb0JBQU0sQ0FBQyxNQUFNLENBQUMsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBckJGO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQXNCYixvQkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQseUNBcUJDLENBQUEiLCJmaWxlIjoic2hhcmVkL2lzc3Vlcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4vaXNzdWUnO1xuaW1wb3J0IHtJU1NVRVN9IGZyb20gJy4uL21vY2svbW9jay1pc3N1ZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSXNzdWVzU2VydmljZSB7XG5cdC8qIEdFVCAqL1xuXHRnZXRBbGxJc3N1ZXMoKSB7XG5cdFx0cmV0dXJuIElTU1VFUztcblx0fVxuXHRnZXRJc3N1ZShpc3N1ZUlkOiBzdHJpbmcpe1xuXHRcdGZvciAodmFyIGkgPSBJU1NVRVMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdGlmKElTU1VFU1tpXS5faWQgPT09IGlzc3VlSWQpe1xuXHRcdFx0XHRyZXR1cm4gSVNTVUVTW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZygnTm8gaXNzdWUgZm91bmQnKTtcblx0fVxuXHQvKiBQT1NUICovXG5cdGluc2VydElzc3VlKGlzc3VlOiBJc3N1ZSl7XG5cdFx0SVNTVUVTLnVuc2hpZnQoaXNzdWUpO1xuXHR9XG5cdC8qIERFTEVURSAqL1xuXHRkZWxldGVJc3N1ZShpc3N1ZTogSXNzdWUpe1xuXHRcdElTU1VFUy5zcGxpY2UoSVNTVUVTLmluZGV4T2YoaXNzdWUpLCAxKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
