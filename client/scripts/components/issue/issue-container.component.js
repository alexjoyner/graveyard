System.register(['angular2/core', 'angular2/router', '../../shared/issue', '../../shared/issues.service', '../../shared/points.service', './points-list.component', '../../shared/vote-cell.component', './issue-form.component', '../../shared/users.service', '../../shared/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, issue_1, issues_service_1, points_service_1, points_list_component_1, router_2, vote_cell_component_1, issue_form_component_1, users_service_1, auth_service_1;
    var IssueContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (issue_1_1) {
                issue_1 = issue_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (points_service_1_1) {
                points_service_1 = points_service_1_1;
            },
            function (points_list_component_1_1) {
                points_list_component_1 = points_list_component_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (issue_form_component_1_1) {
                issue_form_component_1 = issue_form_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            IssueContainerComponent = (function () {
                function IssueContainerComponent(_routeParams, _issuesService, _usersService, _authService) {
                    this._routeParams = _routeParams;
                    this._issuesService = _issuesService;
                    this._usersService = _usersService;
                    this._authService = _authService;
                    this.issue = new issue_1.Issue('', '', 0, 0, '', '');
                }
                IssueContainerComponent.prototype.editIssue = function (issue, event, cancelFlag) {
                    event.stopPropagation();
                    var answer;
                    if (cancelFlag) {
                        answer = confirm('Canceling will discard changes. Continue?');
                    }
                    if (answer || !cancelFlag) {
                        this.issue['editIssue'] =
                            (this.issue['editIssue']) ? !this.issue['editIssue'] : true;
                    }
                };
                IssueContainerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this._authService.checkValid()) {
                        this._issueId = this._routeParams.get('id');
                        this._type = this._routeParams.get('type');
                        this._issuesService.getIssue(this._issueId).
                            subscribe(function (data) {
                            _this.issue = data;
                            console.log(_this.issue);
                            console.log(_this.issue.mainQuestion);
                        }, function (err) { return console.log('Err: ', err); });
                    }
                };
                IssueContainerComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                IssueContainerComponent.prototype.isOwner = function (username) {
                    return (username === this._usersService.profile.local.email);
                };
                IssueContainerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/issue/issue-container.tpl.html',
                        providers: [issues_service_1.IssuesService, points_service_1.PointsService],
                        directives: [points_list_component_1.PointsListComponent, router_2.ROUTER_DIRECTIVES, vote_cell_component_1.VoteCellComponent, issue_form_component_1.NewIssueForm]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, issues_service_1.IssuesService, users_service_1.UsersService, auth_service_1.AuthService])
                ], IssueContainerComponent);
                return IssueContainerComponent;
            }());
            exports_1("IssueContainerComponent", IssueContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBSUMsaUNBQ1MsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsYUFBMkIsRUFDM0IsWUFBeUI7b0JBSHpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQVBsQyxVQUFLLEdBQVUsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFPUixDQUFDO2dCQUVyQywyQ0FBUyxHQUFULFVBQVUsS0FBWSxFQUFFLEtBQWlCLEVBQUUsVUFBbUI7b0JBQzdELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7d0JBQ2QsTUFBTSxHQUFHLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDOzRCQUN0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM5RCxDQUFDO2dCQUNGLENBQUM7Z0JBQ0QsMENBQVEsR0FBUjtvQkFBQSxpQkFjQztvQkFiQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDMUMsU0FBUyxDQUNULFVBQUEsSUFBSTs0QkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQy9CLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDO2dCQUNELDhDQUFZLEdBQVosVUFBYSxNQUFjO29CQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QseUNBQU8sR0FBUCxVQUFRLFFBQWdCO29CQUN2QixNQUFNLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQTlDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSwwQ0FBMEM7d0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsOEJBQWEsQ0FBQzt3QkFDekMsVUFBVSxFQUFFLENBQUMsMkNBQW1CLEVBQUUsMEJBQWlCLEVBQUUsdUNBQWlCLEVBQUUsbUNBQVksQ0FBQztxQkFDeEYsQ0FBQzs7MkNBQUE7Z0JBMkNGLDhCQUFDO1lBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtZQTFDRCw2REEwQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZSc7XG5pbXBvcnQge0lzc3Vlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZXMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50c0xpc3RDb21wb25lbnR9IGZyb20gJy4vcG9pbnRzLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge05ld0lzc3VlRm9ybX0gZnJvbSAnLi9pc3N1ZS1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoey8vIFJvdXRlIG5vIHNlbGVjdG9yXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvaXNzdWUtY29udGFpbmVyLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtJc3N1ZXNTZXJ2aWNlLCBQb2ludHNTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbUG9pbnRzTGlzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVMsIFZvdGVDZWxsQ29tcG9uZW50LCBOZXdJc3N1ZUZvcm1dXG59KVxuZXhwb3J0IGNsYXNzIElzc3VlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRpc3N1ZTogSXNzdWUgPSBuZXcgSXNzdWUoJycsJycsMCwwLCAnJywgJycpO1xuXHRwcml2YXRlIF9pc3N1ZUlkOiBzdHJpbmc7XG5cdHByaXZhdGUgX3R5cGU6IHN0cmluZztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX2lzc3Vlc1NlcnZpY2U6IElzc3Vlc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXt9XG5cblx0ZWRpdElzc3VlKGlzc3VlOiBJc3N1ZSwgZXZlbnQ6IE1vdXNlRXZlbnQsIGNhbmNlbEZsYWc6IGJvb2xlYW4pIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRsZXQgYW5zd2VyOiBib29sZWFuO1xuXHRcdGlmKGNhbmNlbEZsYWcpe1xuXHRcdFx0YW5zd2VyID0gY29uZmlybSgnQ2FuY2VsaW5nIHdpbGwgZGlzY2FyZCBjaGFuZ2VzLiBDb250aW51ZT8nKTtcblx0XHR9XG5cdFx0aWYgKGFuc3dlciB8fCAhY2FuY2VsRmxhZykge1xuXHRcdFx0dGhpcy5pc3N1ZVsnZWRpdElzc3VlJ10gPVxuXHRcdFx0XHQodGhpcy5pc3N1ZVsnZWRpdElzc3VlJ10pID8gIXRoaXMuaXNzdWVbJ2VkaXRJc3N1ZSddIDogdHJ1ZTtcblx0XHR9XG5cdH1cblx0bmdPbkluaXQoKTogYW55IHtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHR0aGlzLl9pc3N1ZUlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRcdFx0dGhpcy5fdHlwZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRcdFx0dGhpcy5faXNzdWVzU2VydmljZS5nZXRJc3N1ZSh0aGlzLl9pc3N1ZUlkKS5cblx0XHRcdFx0c3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHR0aGlzLmlzc3VlID0gZGF0YTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmlzc3VlKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmlzc3VlLm1haW5RdWVzdGlvbik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyOiAnLCBlcnIpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdHN0cmluZ1RvRGF0ZShzdHJpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgRGF0ZShzdHJpbmcpO1xuXHR9XG5cdGlzT3duZXIodXNlcm5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiAodXNlcm5hbWUgPT09IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLmxvY2FsLmVtYWlsKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
