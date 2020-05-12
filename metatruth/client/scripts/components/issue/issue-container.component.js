System.register(['angular2/core', 'angular2/router', '../../shared/post', '../../shared/posts.service', '../../shared/vote-cell.component', './issue-form.component', '../../shared/users.service', '../../shared/auth.service', './points-list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, post_1, posts_service_1, router_2, vote_cell_component_1, issue_form_component_1, users_service_1, auth_service_1, points_list_component_1;
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
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
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
            },
            function (points_list_component_1_1) {
                points_list_component_1 = points_list_component_1_1;
            }],
        execute: function() {
            IssueContainerComponent = (function () {
                function IssueContainerComponent(_routeParams, _postsService, _usersService, _authService) {
                    this._routeParams = _routeParams;
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this._authService = _authService;
                    this.issue = new post_1.Post('', 1);
                }
                IssueContainerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this._authService.checkValid()) {
                        this._issueId = this._routeParams.get('id');
                        this._type = this._routeParams.get('type');
                        this._postsService.getPost(this._issueId, this._type).
                            subscribe(function (data) {
                            _this.issue = data;
                            console.log('Saved issue: ', _this.issue);
                            console.log(_this.issue.title);
                        }, function (err) { return console.log('Err: ', err); });
                    }
                };
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
                IssueContainerComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                IssueContainerComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
                };
                IssueContainerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/issue/issue-container.tpl.html',
                        providers: [posts_service_1.PostsService],
                        directives: [router_2.ROUTER_DIRECTIVES, vote_cell_component_1.VoteCellComponent, issue_form_component_1.NewIssueForm, points_list_component_1.PointsListComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, posts_service_1.PostsService, users_service_1.UsersService, auth_service_1.AuthService])
                ], IssueContainerComponent);
                return IssueContainerComponent;
            }());
            exports_1("IssueContainerComponent", IssueContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBSUMsaUNBQ1MsWUFBeUIsRUFDekIsYUFBMkIsRUFDM0IsYUFBMkIsRUFDM0IsWUFBeUI7b0JBSHpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQVBsQyxVQUFLLEdBQVMsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQVE5QixDQUFDO2dCQUNELDBDQUFRLEdBQVI7b0JBQUEsaUJBY0M7b0JBYkEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzs0QkFDcEQsU0FBUyxDQUNULFVBQUEsSUFBSTs0QkFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQy9CLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUMvQixDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCwyQ0FBUyxHQUFULFVBQVUsS0FBVyxFQUFFLEtBQWlCLEVBQUUsVUFBbUI7b0JBQzVELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7d0JBQ2QsTUFBTSxHQUFHLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDOzRCQUN0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM5RCxDQUFDO2dCQUNGLENBQUM7Z0JBQ0QsOENBQVksR0FBWixVQUFhLE1BQWM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCx5Q0FBTyxHQUFQLFVBQVEsRUFBVTtvQkFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQTlDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSwwQ0FBMEM7d0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7d0JBQ3pCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHVDQUFpQixFQUFFLG1DQUFZLEVBQUUsMkNBQW1CLENBQUM7cUJBQ3hGLENBQUM7OzJDQUFBO2dCQTJDRiw4QkFBQztZQUFELENBMUNBLEFBMENDLElBQUE7WUExQ0QsNkRBMENDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9pc3N1ZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0JztcbmltcG9ydCB7UG9zdHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdHMuc2VydmljZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtOZXdJc3N1ZUZvcm19IGZyb20gJy4vaXNzdWUtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtQb2ludHNMaXN0Q29tcG9uZW50fSBmcm9tICcuL3BvaW50cy1saXN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoey8vIFJvdXRlIG5vIHNlbGVjdG9yXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvaXNzdWUtY29udGFpbmVyLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtQb3N0c1NlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgVm90ZUNlbGxDb21wb25lbnQsIE5ld0lzc3VlRm9ybSwgUG9pbnRzTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgSXNzdWVDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdGlzc3VlOiBQb3N0ID0gbmV3IFBvc3QoJycsIDEpO1xuXHRwcml2YXRlIF9pc3N1ZUlkOiBzdHJpbmc7XG5cdHByaXZhdGUgX3R5cGU6IHN0cmluZztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3Bvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSl7XG5cdH1cblx0bmdPbkluaXQoKTogYW55IHtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHR0aGlzLl9pc3N1ZUlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRcdFx0dGhpcy5fdHlwZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRcdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLmdldFBvc3QodGhpcy5faXNzdWVJZCwgdGhpcy5fdHlwZSkuXG5cdFx0XHRcdHN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pc3N1ZSA9IGRhdGE7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1NhdmVkIGlzc3VlOiAnLCB0aGlzLmlzc3VlKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmlzc3VlLnRpdGxlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnI6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0ZWRpdElzc3VlKGlzc3VlOiBQb3N0LCBldmVudDogTW91c2VFdmVudCwgY2FuY2VsRmxhZzogYm9vbGVhbikge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGxldCBhbnN3ZXI6IGJvb2xlYW47XG5cdFx0aWYoY2FuY2VsRmxhZyl7XG5cdFx0XHRhbnN3ZXIgPSBjb25maXJtKCdDYW5jZWxpbmcgd2lsbCBkaXNjYXJkIGNoYW5nZXMuIENvbnRpbnVlPycpO1xuXHRcdH1cblx0XHRpZiAoYW5zd2VyIHx8ICFjYW5jZWxGbGFnKSB7XG5cdFx0XHR0aGlzLmlzc3VlWydlZGl0SXNzdWUnXSA9XG5cdFx0XHRcdCh0aGlzLmlzc3VlWydlZGl0SXNzdWUnXSkgPyAhdGhpcy5pc3N1ZVsnZWRpdElzc3VlJ10gOiB0cnVlO1xuXHRcdH1cblx0fVxuXHRzdHJpbmdUb0RhdGUoc3RyaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoc3RyaW5nKTtcblx0fVxuXHRpc093bmVyKGlkOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gKGlkID09PSB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5faWQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
