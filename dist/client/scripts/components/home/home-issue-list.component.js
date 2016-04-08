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
                            console.log('Returned: ', data);
                            _this._router.navigate(['Issue', { type: 'yes', id: data }]);
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
                HomeIssueListComponent.prototype.isOwner = function (username) {
                    return (username === this._usersService.profile.email);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQU9DLGdDQUNTLGNBQTZCLEVBQzdCLE9BQWUsRUFDZixZQUF5QixFQUN6QixhQUEyQjtvQkFIM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQVIxQixXQUFNLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUV6RCxVQUFLLEdBQ0gsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBS1ksQ0FBQztnQkFDdkMseUNBQVEsR0FBUjtvQkFBQSxpQkFXQztvQkFWQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUU7NkJBQ2hDLFNBQVMsQ0FDVixVQUFBLElBQUk7NEJBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDbEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ3BCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUMvQixDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCx5Q0FBUSxHQUFSO29CQUFBLGlCQWVDO29CQWRBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNwQyxJQUFJLEtBQUssR0FDTixJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDOzZCQUNwQyxTQUFTLENBQ1YsVUFBQSxJQUFJOzRCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDOzRCQUNoQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDN0QsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2pDLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDO2dCQUNELHlDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsNENBQVcsR0FBWCxVQUFZLEtBQVksRUFBRSxLQUFpQjtvQkFBM0MsaUJBWUM7b0JBWEEsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7d0JBQ2hHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2lDQUN4QyxTQUFTLENBQ1YsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUMxQixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNqQyxDQUFDO3dCQUNKLENBQUM7b0JBQ0YsQ0FBQztnQkFDRixDQUFDO2dCQUNELDZDQUFZLEdBQVosVUFBYSxNQUFjO29CQUMxQixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0Qsd0NBQU8sR0FBUCxVQUFRLFFBQWdCO29CQUN2QixNQUFNLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hELENBQUM7Z0JBNUREO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7OzBFQUFBO2dCQUNwQjtvQkFBQyxZQUFLLENBQUMsZUFBZSxDQUFDOzs2RUFBQTtnQkFDdkI7b0JBQUMsYUFBTSxFQUFFOztzRUFBQTtnQkFYVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFdBQVcsRUFBRSx5Q0FBeUM7d0JBQ3RELFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO3dCQUNwQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1Q0FBaUIsQ0FBQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQzt3QkFDMUIsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzVCLENBQUM7OzBDQUFBO2dCQStERiw2QkFBQztZQUFELENBOURBLEFBOERDLElBQUE7WUE5REQsMkRBOERDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUtaXNzdWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJc3N1ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3VlJztcbmltcG9ydCB7SXNzdWVzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3Vlcy5zZXJ2aWNlJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1ob21lLWlzc3VlLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUvaG9tZS1pc3N1ZS1saXN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL2hvbWUtaXNzdWUuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBWb3RlQ2VsbENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbSXNzdWVzU2VydmljZV0sXG4gICAgcGlwZXM6IFtTZWFyY2hGaWx0ZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyAgSG9tZUlzc3VlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0QElucHV0KCdzZWFyY2hUZXh0Jykgc2VhcmNoVGV4dDogc3RyaW5nO1xuXHRASW5wdXQoJ3N0YXJ0UXVlc3Rpb24nKSBzdGFydFF1ZXN0aW9uOiBib29sZWFuO1xuXHRAT3V0cHV0KCkgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0aXNzdWVzOiBJc3N1ZVtdO1xuXHRpc3N1ZTogSXNzdWVcblx0PSBuZXcgSXNzdWUoJycsICcnLCAwLCAwKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaXNzdWVzU2VydmljZTogSXNzdWVzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2Upe31cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuZ2V0QWxsSXNzdWVzKClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5pc3N1ZXMgPSBkYXRhO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2VycjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRvbkNyZWF0ZSgpIHtcblx0XHRpZiAodGhpcy5fYXV0aFNlcnZpY2UuY2hlY2tWYWxpZCgpKSB7XG5cdFx0XHRsZXQgaXNzdWU6IElzc3VlXG5cdFx0XHRcdD0gbmV3IElzc3VlKHRoaXMuc2VhcmNoVGV4dCArICc/JywgJycsIDAsIDAsXG5cdFx0XHRcdFx0dGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuX2lkLFxuXHRcdFx0XHRcdHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLmVtYWlsKTtcblx0XHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuaW5zZXJ0SXNzdWUoaXNzdWUpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdSZXR1cm5lZDogJywgZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSXNzdWUnLCB7IHR5cGU6ICd5ZXMnLCBpZDogZGF0YSB9XSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0b25DYW5jZWwoKXtcblx0XHR0aGlzLmNhbmNlbC5lbWl0KG51bGwpO1xuXHR9XG5cdGRlbGV0ZUlzc3VlKGlzc3VlOiBJc3N1ZSwgZXZlbnQ6IE1vdXNlRXZlbnQpe1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGlmICh0aGlzLl9hdXRoU2VydmljZS5jaGVja1ZhbGlkKCkpIHtcblx0XHRcdGxldCBhbnN3ZXIgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXNzdWU/IFRoaXMgYWN0aW9uIGNhbid0IGJlIHVuZG9uZWApO1xuXHRcdFx0aWYgKGFuc3dlciA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLmRlbGV0ZUlzc3VlKGlzc3VlLl9pZClcblx0XHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRcdHN1Y2Nlc3MgPT4gdGhpcy5uZ09uSW5pdCgpLFxuXHRcdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3I6ICcsIGVycilcblx0XHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRzdHJpbmdUb0RhdGUoc3RyaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoc3RyaW5nKTtcblx0fVxuXHRpc093bmVyKHVzZXJuYW1lOiBzdHJpbmcpe1xuXHRcdHJldHVybiAodXNlcm5hbWUgPT09IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLmVtYWlsKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
