System.register(['angular2/core', '../../shared/issue', '../../shared/issues.service', '../../pipes/searchFilter.pipe', 'angular2/router', '../../shared/vote-cell.component', '../../shared/auth.service', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, issue_1, issues_service_1, searchFilter_pipe_1, router_1, vote_cell_component_1, auth_service_1, users_service_1;
    var HomeIssueListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issue_1_1) {
                issue_1 = issue_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (searchFilter_pipe_1_1) {
                searchFilter_pipe_1 = searchFilter_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            HomeIssueListComponent = (function () {
                function HomeIssueListComponent(_issuesService, _router, _authService, _usersService) {
                    this._issuesService = _issuesService;
                    this._router = _router;
                    this._authService = _authService;
                    this._usersService = _usersService;
                    this.cancel = new core_1.EventEmitter();
                    this.issue = new issue_1.Issue('', '', 0, 0);
                }
                HomeIssueListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this._authService.checkValid()) {
                        this._issuesService.getAllIssues()
                            .subscribe(function (data) {
                            console.log(data);
                            _this.issues = data;
                        }, function (err) { return console.log('err: ', err); });
                    }
                };
                HomeIssueListComponent.prototype.onCreate = function () {
                    var _this = this;
                    if (this._authService.checkValid()) {
                        var issue = new issue_1.Issue(this.searchText + '?', '', 0, 0, this._usersService.profile._id, this._usersService.profile.email);
                        this._issuesService.insertIssue(issue)
                            .subscribe(function (data) {
                            console.log('Returned: ', data._id);
                            _this._router.navigate(['Issue', { type: 'yes', id: data._id }]);
                        }, function (err) { return console.log('Error: ', err); });
                    }
                };
                HomeIssueListComponent.prototype.onCancel = function () {
                    this.cancel.emit(null);
                };
                HomeIssueListComponent.prototype.deleteIssue = function (issue, event) {
                    var _this = this;
                    event.stopPropagation();
                    if (this._authService.checkValid()) {
                        var answer = confirm("Are you sure you want to delete this issue? This action can't be undone");
                        if (answer === true) {
                            this._issuesService.deleteIssue(issue._id)
                                .subscribe(function (success) { return _this.ngOnInit(); }, function (err) { return console.log('error: ', err); });
                        }
                    }
                };
                HomeIssueListComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                HomeIssueListComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
                };
                __decorate([
                    core_1.Input('searchText'), 
                    __metadata('design:type', String)
                ], HomeIssueListComponent.prototype, "searchText", void 0);
                __decorate([
                    core_1.Input('startQuestion'), 
                    __metadata('design:type', Boolean)
                ], HomeIssueListComponent.prototype, "startQuestion", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], HomeIssueListComponent.prototype, "cancel", void 0);
                HomeIssueListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-home-issue-list',
                        templateUrl: 'templates/home/home-issue-list.tpl.html',
                        styleUrls: ['styles/home-issue.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, vote_cell_component_1.VoteCellComponent],
                        providers: [issues_service_1.IssuesService],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService, router_1.Router, auth_service_1.AuthService, users_service_1.UsersService])
                ], HomeIssueListComponent);
                return HomeIssueListComponent;
            }());
            exports_1("HomeIssueListComponent", HomeIssueListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQU9DLGdDQUNTLGNBQTZCLEVBQzdCLE9BQWUsRUFDZixZQUF5QixFQUN6QixhQUEyQjtvQkFIM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQVIxQixXQUFNLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUV6RCxVQUFLLEdBQ0gsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBS1ksQ0FBQztnQkFDdkMseUNBQVEsR0FBUjtvQkFBQSxpQkFXQztvQkFWQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUU7NkJBQ2hDLFNBQVMsQ0FDVixVQUFBLElBQUk7NEJBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3BCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUMvQixDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCx5Q0FBUSxHQUFSO29CQUFBLGlCQWVDO29CQWRBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLEtBQUssR0FDTixJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDOzZCQUNwQyxTQUFTLENBQ1YsVUFBQSxJQUFJOzRCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNqRSxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDakMsQ0FBQztvQkFDSixDQUFDO2dCQUNGLENBQUM7Z0JBQ0QseUNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFDRCw0Q0FBVyxHQUFYLFVBQVksS0FBWSxFQUFFLEtBQWlCO29CQUEzQyxpQkFZQztvQkFYQSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMseUVBQXlFLENBQUMsQ0FBQzt3QkFDaEcsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUNBQ3hDLFNBQVMsQ0FDVixVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLEVBQzFCLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2pDLENBQUM7d0JBQ0osQ0FBQztvQkFDRixDQUFDO2dCQUNGLENBQUM7Z0JBQ0QsNkNBQVksR0FBWixVQUFhLE1BQWM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCx3Q0FBTyxHQUFQLFVBQVEsRUFBVTtvQkFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQTVERDtvQkFBQyxZQUFLLENBQUMsWUFBWSxDQUFDOzswRUFBQTtnQkFDcEI7b0JBQUMsWUFBSyxDQUFDLGVBQWUsQ0FBQzs7NkVBQUE7Z0JBQ3ZCO29CQUFDLGFBQU0sRUFBRTs7c0VBQUE7Z0JBWFY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixXQUFXLEVBQUUseUNBQXlDO3dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDcEMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUNBQWlCLENBQUM7d0JBQ2xELFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7d0JBQzFCLEtBQUssRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUM1QixDQUFDOzswQ0FBQTtnQkErREYsNkJBQUM7WUFBRCxDQTlEQSxBQThEQyxJQUFBO1lBOURELDJEQThEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZSc7XG5pbXBvcnQge0lzc3Vlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZXMuc2VydmljZSc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclBpcGV9IGZyb20gJy4uLy4uL3BpcGVzL3NlYXJjaEZpbHRlci5waXBlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8taG9tZS1pc3N1ZS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lL2hvbWUtaXNzdWUtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9ob21lLWlzc3VlLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgVm90ZUNlbGxDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0lzc3Vlc1NlcnZpY2VdLFxuICAgIHBpcGVzOiBbU2VhcmNoRmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgIEhvbWVJc3N1ZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgnc2VhcmNoVGV4dCcpIHNlYXJjaFRleHQ6IHN0cmluZztcblx0QElucHV0KCdzdGFydFF1ZXN0aW9uJykgc3RhcnRRdWVzdGlvbjogYm9vbGVhbjtcblx0QE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGlzc3VlczogSXNzdWVbXTtcblx0aXNzdWU6IElzc3VlXG5cdD0gbmV3IElzc3VlKCcnLCAnJywgMCwgMCk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2lzc3Vlc1NlcnZpY2U6IElzc3Vlc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKXt9XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLmdldEFsbElzc3VlcygpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMuaXNzdWVzID0gZGF0YTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnI6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0b25DcmVhdGUoKSB7XG5cdFx0aWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmNoZWNrVmFsaWQoKSkge1xuXHRcdFx0bGV0IGlzc3VlOiBJc3N1ZVxuXHRcdFx0XHQ9IG5ldyBJc3N1ZSh0aGlzLnNlYXJjaFRleHQgKyAnPycsICcnLCAwLCAwLFxuXHRcdFx0XHRcdHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLl9pZCxcblx0XHRcdFx0XHR0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5lbWFpbCk7XG5cdFx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLmluc2VydElzc3VlKGlzc3VlKVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUmV0dXJuZWQ6ICcsIGRhdGEuX2lkKTtcblx0XHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydJc3N1ZScsIHsgdHlwZTogJ3llcycsIGlkOiBkYXRhLl9pZCB9XSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0b25DYW5jZWwoKXtcblx0XHR0aGlzLmNhbmNlbC5lbWl0KG51bGwpO1xuXHR9XG5cdGRlbGV0ZUlzc3VlKGlzc3VlOiBJc3N1ZSwgZXZlbnQ6IE1vdXNlRXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdGxldCBhbnN3ZXIgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXNzdWU/IFRoaXMgYWN0aW9uIGNhbid0IGJlIHVuZG9uZWApO1xuXHRcdFx0aWYgKGFuc3dlciA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLmRlbGV0ZUlzc3VlKGlzc3VlLl9pZClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdHN1Y2Nlc3MgPT4gdGhpcy5uZ09uSW5pdCgpLFxuXHRcdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3I6ICcsIGVycilcblx0XHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRzdHJpbmdUb0RhdGUoc3RyaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoc3RyaW5nKTtcblx0fVxuXHRpc093bmVyKGlkOiBzdHJpbmcpe1xuXHRcdHJldHVybiAoaWQgPT09IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLl9pZCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
