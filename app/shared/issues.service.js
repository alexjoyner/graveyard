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
                IssuesService.prototype.getIssue = function (issue) {
                    //real examle will use id
                };
                /* POST */
                IssuesService.prototype.insertIssue = function (issue) {
                    mock_issues_1.ISSUES.push(issue);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9pc3N1ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQTRCQSxDQUFDO2dCQTNCQSxTQUFTO2dCQUNULG9DQUFZLEdBQVo7b0JBQ0MsTUFBTSxDQUFDLG9CQUFNLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRCxnQ0FBUSxHQUFSLFVBQVMsS0FBWTtvQkFDcEIseUJBQXlCO2dCQUMxQixDQUFDO2dCQUNELFVBQVU7Z0JBQ1YsbUNBQVcsR0FBWCxVQUFZLEtBQVk7b0JBQ3ZCLG9CQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2dCQUNELFlBQVk7Z0JBQ1osbUNBQVcsR0FBWCxVQUFZLEtBQVk7b0JBQ3ZCLG9CQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUVELHlCQUF5QjtnQkFDekIsaUNBQVMsR0FBVCxVQUFVLEtBQVksRUFBRSxRQUFnQjtvQkFDdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLG9CQUFNLENBQUMsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDckMsQ0FBQztvQkFBQyxJQUFJLENBQ04sRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLG9CQUFNLENBQUMsb0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDdkMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7b0JBQ2xDLENBQUM7Z0JBQ0YsQ0FBQztnQkE1QkY7b0JBQUMsaUJBQVUsRUFBRTs7aUNBQUE7Z0JBNkJiLG9CQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtZQTVCRCx5Q0E0QkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvaXNzdWVzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJc3N1ZX0gZnJvbSAnLi9pc3N1ZSc7XG5pbXBvcnQge0lTU1VFU30gZnJvbSAnLi4vbW9jay9tb2NrLWlzc3Vlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJc3N1ZXNTZXJ2aWNlIHtcblx0LyogR0VUICovXG5cdGdldEFsbElzc3VlcygpIHtcblx0XHRyZXR1cm4gSVNTVUVTO1xuXHR9XG5cdGdldElzc3VlKGlzc3VlOiBJc3N1ZSl7XG5cdFx0Ly9yZWFsIGV4YW1sZSB3aWxsIHVzZSBpZFxuXHR9XG5cdC8qIFBPU1QgKi9cblx0aW5zZXJ0SXNzdWUoaXNzdWU6IElzc3VlKXtcblx0XHRJU1NVRVMucHVzaChpc3N1ZSk7XG5cdH1cblx0LyogREVMRVRFICovXG5cdGRlbGV0ZUlzc3VlKGlzc3VlOiBJc3N1ZSl7XG5cdFx0SVNTVUVTLnNwbGljZShJU1NVRVMuaW5kZXhPZihpc3N1ZSksIDEpO1xuXHR9XG5cblx0LypWT1RJTkcgSVNTVUVTIFNVUFBPUlQqL1xuXHR2b3RlSXNzdWUoaXNzdWU6IElzc3VlLCB2b3RlVHlwZTogc3RyaW5nKXtcblx0XHRpZiAodm90ZVR5cGUgPT09ICd1cHZvdGUnKSB7XG5cdFx0XHRJU1NVRVNbSVNTVUVTLmluZGV4T2YoaXNzdWUpXS51cHMrKztcblx0XHR9IGVsc2Vcblx0XHRpZiAodm90ZVR5cGUgPT09ICdkb3dudm90ZScpIHtcblx0XHRcdElTU1VFU1tJU1NVRVMuaW5kZXhPZihpc3N1ZSldLmRvd25zKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdObyB0eXBlIHJlY29nbml6ZWQnKVxuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
