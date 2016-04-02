System.register(['angular2/core', '../../shared/issue', '../../shared/issues.service', '../../pipes/searchFilter.pipe', 'angular2/router', '../../shared/vote-cell.component'], function(exports_1, context_1) {
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
    var core_1, issue_1, issues_service_1, searchFilter_pipe_1, router_1, vote_cell_component_1;
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
            }],
        execute: function() {
            HomeIssueListComponent = (function () {
                function HomeIssueListComponent(_issuesService, _router) {
                    this._issuesService = _issuesService;
                    this._router = _router;
                    this.issue = new issue_1.Issue('', '', 0, 0);
                }
                HomeIssueListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._issuesService.getAllIssues()
                        .subscribe(function (data) {
                        console.log(data);
                        _this.issues = data;
                    }, function (err) { return console.log('err: ', err); });
                };
                HomeIssueListComponent.prototype.onCreate = function () {
                    var _this = this;
                    var issue = new issue_1.Issue(this.searchText + '?', '', 0, 0);
                    this._issuesService.insertIssue(issue)
                        .subscribe(function (data) {
                        console.log('Returned: ', data);
                        _this._router.navigate(['Issue', { type: 'yes', id: data }]);
                    }, function (err) { return console.log('Error: ', err); });
                };
                HomeIssueListComponent.prototype.deleteIssue = function (issue, event) {
                    var _this = this;
                    event.stopPropagation();
                    var answer = confirm("Are you sure you want to delete this issue? This action can't be undone");
                    if (answer === true) {
                        this._issuesService.deleteIssue(issue._id)
                            .subscribe(function (success) { return _this.ngOnInit(); }, function (err) { return console.log('error: ', err); });
                    }
                };
                __decorate([
                    core_1.Input('searchText'), 
                    __metadata('design:type', String)
                ], HomeIssueListComponent.prototype, "searchText", void 0);
                __decorate([
                    core_1.Input('startQuestion'), 
                    __metadata('design:type', Boolean)
                ], HomeIssueListComponent.prototype, "startQuestion", void 0);
                HomeIssueListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-home-issue-list',
                        templateUrl: 'templates/home/home-issue-list.tpl.html',
                        styleUrls: ['styles/home-issue.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, vote_cell_component_1.VoteCellComponent],
                        providers: [issues_service_1.IssuesService],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService, router_1.Router])
                ], HomeIssueListComponent);
                return HomeIssueListComponent;
            }());
            exports_1("HomeIssueListComponent", HomeIssueListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBTUMsZ0NBQ1MsY0FBNkIsRUFDN0IsT0FBZTtvQkFEZixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFKeEIsVUFBSyxHQUNILElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUdBLENBQUM7Z0JBQzNCLHlDQUFRLEdBQVI7b0JBQUEsaUJBU0M7b0JBUkEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUU7eUJBQ2hDLFNBQVMsQ0FDVCxVQUFBLElBQUk7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3BCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUNoQyxDQUFDO2dCQUNKLENBQUM7Z0JBQ0QseUNBQVEsR0FBUjtvQkFBQSxpQkFXQztvQkFWQSxJQUFJLEtBQUssR0FDTixJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7eUJBQ3BDLFNBQVMsQ0FDVixVQUFBLElBQUk7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDakMsQ0FBQztnQkFDSixDQUFDO2dCQUNELDRDQUFXLEdBQVgsVUFBWSxLQUFZLEVBQUUsS0FBaUI7b0JBQTNDLGlCQVVDO29CQVRBLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7b0JBQ2hHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzZCQUN4QyxTQUFTLENBQ1YsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUMxQixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNqQyxDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkF4Q0Q7b0JBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7MEVBQUE7Z0JBQ3BCO29CQUFDLFlBQUssQ0FBQyxlQUFlLENBQUM7OzZFQUFBO2dCQVZ4QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFdBQVcsRUFBRSx5Q0FBeUM7d0JBQ3RELFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO3dCQUNwQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1Q0FBaUIsQ0FBQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQzt3QkFDMUIsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzVCLENBQUM7OzBDQUFBO2dCQTJDRiw2QkFBQztZQUFELENBMUNBLEFBMENDLElBQUE7WUExQ0QsMkRBMENDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUtaXNzdWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lzc3VlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWUnO1xuaW1wb3J0IHtJc3N1ZXNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWVzLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9zZWFyY2hGaWx0ZXIucGlwZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWhvbWUtaXNzdWUtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaG9tZS9ob21lLWlzc3VlLWxpc3QudHBsLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvaG9tZS1pc3N1ZS5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFZvdGVDZWxsQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtJc3N1ZXNTZXJ2aWNlXSxcbiAgICBwaXBlczogW1NlYXJjaEZpbHRlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzICBIb21lSXNzdWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoJ3NlYXJjaFRleHQnKSBzZWFyY2hUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgnc3RhcnRRdWVzdGlvbicpIHN0YXJ0UXVlc3Rpb246IGJvb2xlYW47XG5cdGlzc3VlczogSXNzdWVbXTtcblx0aXNzdWU6IElzc3VlXG5cdD0gbmV3IElzc3VlKCcnLCAnJywgMCwgMCk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2lzc3Vlc1NlcnZpY2U6IElzc3Vlc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpe31cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuZ2V0QWxsSXNzdWVzKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMuaXNzdWVzID0gZGF0YTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnI6ICcsIGVycilcblx0XHRcdCk7XG5cdH1cblx0b25DcmVhdGUoKSB7XG5cdFx0bGV0IGlzc3VlOiBJc3N1ZVxuXHRcdFx0PSBuZXcgSXNzdWUodGhpcy5zZWFyY2hUZXh0ICsgJz8nLCAnJywgMCwgMCk7XG5cdFx0dGhpcy5faXNzdWVzU2VydmljZS5pbnNlcnRJc3N1ZShpc3N1ZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1JldHVybmVkOiAnLCBkYXRhKTtcblx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSXNzdWUnLCB7IHR5cGU6ICd5ZXMnLCBpZDogZGF0YSB9XSk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHRkZWxldGVJc3N1ZShpc3N1ZTogSXNzdWUsIGV2ZW50OiBNb3VzZUV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRsZXQgYW5zd2VyID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGlzc3VlPyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLmRlbGV0ZUlzc3VlKGlzc3VlLl9pZClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0c3VjY2VzcyA9PiB0aGlzLm5nT25Jbml0KCksXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3I6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
