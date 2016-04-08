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
                    return (username === this._usersService.profile.email);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBSUMsaUNBQ1MsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsYUFBMkIsRUFDM0IsWUFBeUI7b0JBSHpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQVBsQyxVQUFLLEdBQVUsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFPUixDQUFDO2dCQUVyQywyQ0FBUyxHQUFULFVBQVUsS0FBWSxFQUFFLEtBQWlCLEVBQUUsVUFBbUI7b0JBQzdELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7d0JBQ2QsTUFBTSxHQUFHLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDOzRCQUN0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM5RCxDQUFDO2dCQUNGLENBQUM7Z0JBQ0QsMENBQVEsR0FBUjtvQkFBQSxpQkFjQztvQkFiQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDMUMsU0FBUyxDQUNULFVBQUEsSUFBSTs0QkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQy9CLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDO2dCQUNELDhDQUFZLEdBQVosVUFBYSxNQUFjO29CQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QseUNBQU8sR0FBUCxVQUFRLFFBQWdCO29CQUN2QixNQUFNLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBOUNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLDBDQUEwQzt3QkFDdkQsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw4QkFBYSxDQUFDO3dCQUN6QyxVQUFVLEVBQUUsQ0FBQywyQ0FBbUIsRUFBRSwwQkFBaUIsRUFBRSx1Q0FBaUIsRUFBRSxtQ0FBWSxDQUFDO3FCQUN4RixDQUFDOzsyQ0FBQTtnQkEyQ0YsOEJBQUM7WUFBRCxDQTFDQSxBQTBDQyxJQUFBO1lBMUNELDZEQTBDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtJc3N1ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3VlJztcbmltcG9ydCB7SXNzdWVzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3Vlcy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnRzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9wb2ludHMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7TmV3SXNzdWVGb3JtfSBmcm9tICcuL2lzc3VlLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7Ly8gUm91dGUgbm8gc2VsZWN0b3JcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9pc3N1ZS1jb250YWluZXIudHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0lzc3Vlc1NlcnZpY2UsIFBvaW50c1NlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtQb2ludHNMaXN0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUywgVm90ZUNlbGxDb21wb25lbnQsIE5ld0lzc3VlRm9ybV1cbn0pXG5leHBvcnQgY2xhc3MgSXNzdWVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdGlzc3VlOiBJc3N1ZSA9IG5ldyBJc3N1ZSgnJywnJywwLDAsICcnLCAnJyk7XG5cdHByaXZhdGUgX2lzc3VlSWQ6IHN0cmluZztcblx0cHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfaXNzdWVzU2VydmljZTogSXNzdWVzU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSxcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2Upe31cblxuXHRlZGl0SXNzdWUoaXNzdWU6IElzc3VlLCBldmVudDogTW91c2VFdmVudCwgY2FuY2VsRmxhZzogYm9vbGVhbikge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGxldCBhbnN3ZXI6IGJvb2xlYW47XG5cdFx0aWYoY2FuY2VsRmxhZyl7XG5cdFx0XHRhbnN3ZXIgPSBjb25maXJtKCdDYW5jZWxpbmcgd2lsbCBkaXNjYXJkIGNoYW5nZXMuIENvbnRpbnVlPycpO1xuXHRcdH1cblx0XHRpZiAoYW5zd2VyIHx8ICFjYW5jZWxGbGFnKSB7XG5cdFx0XHR0aGlzLmlzc3VlWydlZGl0SXNzdWUnXSA9XG5cdFx0XHRcdCh0aGlzLmlzc3VlWydlZGl0SXNzdWUnXSkgPyAhdGhpcy5pc3N1ZVsnZWRpdElzc3VlJ10gOiB0cnVlO1xuXHRcdH1cblx0fVxuXHRuZ09uSW5pdCgpOiBhbnkge1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdHRoaXMuX2lzc3VlSWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cdFx0XHR0aGlzLl90eXBlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCd0eXBlJyk7XG5cdFx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLmdldElzc3VlKHRoaXMuX2lzc3VlSWQpLlxuXHRcdFx0XHRzdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaXNzdWUgPSBkYXRhO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuaXNzdWUpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuaXNzdWUubWFpblF1ZXN0aW9uKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnI6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0c3RyaW5nVG9EYXRlKHN0cmluZzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHN0cmluZyk7XG5cdH1cblx0aXNPd25lcih1c2VybmFtZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuICh1c2VybmFtZSA9PT0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuZW1haWwpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
