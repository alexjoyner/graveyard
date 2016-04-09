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
                            console.log(_this.issue.mainquestion);
                        }, function (err) { return console.log('Err: ', err); });
                    }
                };
                IssueContainerComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                IssueContainerComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBSUMsaUNBQ1MsWUFBeUIsRUFDekIsY0FBNkIsRUFDN0IsYUFBMkIsRUFDM0IsWUFBeUI7b0JBSHpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQVBsQyxVQUFLLEdBQVUsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFPUixDQUFDO2dCQUVyQywyQ0FBUyxHQUFULFVBQVUsS0FBWSxFQUFFLEtBQWlCLEVBQUUsVUFBbUI7b0JBQzdELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7d0JBQ2QsTUFBTSxHQUFHLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDOzRCQUN0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM5RCxDQUFDO2dCQUNGLENBQUM7Z0JBQ0QsMENBQVEsR0FBUjtvQkFBQSxpQkFjQztvQkFiQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDMUMsU0FBUyxDQUNULFVBQUEsSUFBSTs0QkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDdEMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQy9CLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDO2dCQUNELDhDQUFZLEdBQVosVUFBYSxNQUFjO29CQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QseUNBQU8sR0FBUCxVQUFRLEVBQVU7b0JBQ2pCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkE5Q0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUsMENBQTBDO3dCQUN2RCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDhCQUFhLENBQUM7d0JBQ3pDLFVBQVUsRUFBRSxDQUFDLDJDQUFtQixFQUFFLDBCQUFpQixFQUFFLHVDQUFpQixFQUFFLG1DQUFZLENBQUM7cUJBQ3hGLENBQUM7OzJDQUFBO2dCQTJDRiw4QkFBQztZQUFELENBMUNBLEFBMENDLElBQUE7WUExQ0QsNkRBMENDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9pc3N1ZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0lzc3VlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWUnO1xuaW1wb3J0IHtJc3N1ZXNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWVzLnNlcnZpY2UnO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtQb2ludHNMaXN0Q29tcG9uZW50fSBmcm9tICcuL3BvaW50cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtOZXdJc3N1ZUZvcm19IGZyb20gJy4vaXNzdWUtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHsvLyBSb3V0ZSBubyBzZWxlY3RvclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSXNzdWVzU2VydmljZSwgUG9pbnRzU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1BvaW50c0xpc3RDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTLCBWb3RlQ2VsbENvbXBvbmVudCwgTmV3SXNzdWVGb3JtXVxufSlcbmV4cG9ydCBjbGFzcyBJc3N1ZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0aXNzdWU6IElzc3VlID0gbmV3IElzc3VlKCcnLCcnLDAsMCwgJycsICcnKTtcblx0cHJpdmF0ZSBfaXNzdWVJZDogc3RyaW5nO1xuXHRwcml2YXRlIF90eXBlOiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRwcml2YXRlIF9pc3N1ZXNTZXJ2aWNlOiBJc3N1ZXNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7fVxuXG5cdGVkaXRJc3N1ZShpc3N1ZTogSXNzdWUsIGV2ZW50OiBNb3VzZUV2ZW50LCBjYW5jZWxGbGFnOiBib29sZWFuKSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0bGV0IGFuc3dlcjogYm9vbGVhbjtcblx0XHRpZihjYW5jZWxGbGFnKXtcblx0XHRcdGFuc3dlciA9IGNvbmZpcm0oJ0NhbmNlbGluZyB3aWxsIGRpc2NhcmQgY2hhbmdlcy4gQ29udGludWU/Jyk7XG5cdFx0fVxuXHRcdGlmIChhbnN3ZXIgfHwgIWNhbmNlbEZsYWcpIHtcblx0XHRcdHRoaXMuaXNzdWVbJ2VkaXRJc3N1ZSddID1cblx0XHRcdFx0KHRoaXMuaXNzdWVbJ2VkaXRJc3N1ZSddKSA/ICF0aGlzLmlzc3VlWydlZGl0SXNzdWUnXSA6IHRydWU7XG5cdFx0fVxuXHR9XG5cdG5nT25Jbml0KCk6IGFueSB7XG5cdFx0aWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmNoZWNrVmFsaWQoKSkge1xuXHRcdFx0dGhpcy5faXNzdWVJZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0XHRcdHRoaXMuX3R5cGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuZ2V0SXNzdWUodGhpcy5faXNzdWVJZCkuXG5cdFx0XHRcdHN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pc3N1ZSA9IGRhdGE7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5pc3N1ZSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5pc3N1ZS5tYWlucXVlc3Rpb24pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0VycjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRzdHJpbmdUb0RhdGUoc3RyaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoc3RyaW5nKTtcblx0fVxuXHRpc093bmVyKGlkOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gKGlkID09PSB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5faWQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
