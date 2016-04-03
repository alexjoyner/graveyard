System.register(['angular2/core', '../../shared/issue', '../../shared/issues.service', '../../pipes/searchFilter.pipe', 'angular2/router', '../../shared/vote-cell.component', '../../shared/auth.service'], function(exports_1, context_1) {
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
    var core_1, issue_1, issues_service_1, searchFilter_pipe_1, router_1, vote_cell_component_1, auth_service_1;
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
            }],
        execute: function() {
            HomeIssueListComponent = (function () {
                function HomeIssueListComponent(_issuesService, _router, _authService) {
                    this._issuesService = _issuesService;
                    this._router = _router;
                    this._authService = _authService;
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
                    if (this._authService.checkValid()) {
                        var issue = new issue_1.Issue(this.searchText + '?', '', 0, 0);
                        this._issuesService.insertIssue(issue)
                            .subscribe(function (data) {
                            console.log('Returned: ', data);
                            _this._router.navigate(['Issue', { type: 'yes', id: data }]);
                        }, function (err) { return console.log('Error: ', err); });
                    }
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
                    __metadata('design:paramtypes', [issues_service_1.IssuesService, router_1.Router, auth_service_1.AuthService])
                ], HomeIssueListComponent);
                return HomeIssueListComponent;
            }());
            exports_1("HomeIssueListComponent", HomeIssueListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBTUMsZ0NBQ1MsY0FBNkIsRUFDN0IsT0FBZSxFQUNmLFlBQXlCO29CQUZ6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFMbEMsVUFBSyxHQUNILElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUlVLENBQUM7Z0JBQ3JDLHlDQUFRLEdBQVI7b0JBQUEsaUJBU0M7b0JBUkEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUU7eUJBQ2hDLFNBQVMsQ0FDVCxVQUFBLElBQUk7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3BCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUNoQyxDQUFDO2dCQUNKLENBQUM7Z0JBQ0QseUNBQVEsR0FBUjtvQkFBQSxpQkFhQztvQkFaQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxLQUFLLEdBQ04sSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDOzZCQUNwQyxTQUFTLENBQ1YsVUFBQSxJQUFJOzRCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDOzRCQUNoQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDN0QsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2pDLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDO2dCQUNELDRDQUFXLEdBQVgsVUFBWSxLQUFZLEVBQUUsS0FBaUI7b0JBQTNDLGlCQVlDO29CQVhBLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO3dCQUNoRyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQ0FDeEMsU0FBUyxDQUNWLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFmLENBQWUsRUFDMUIsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDakMsQ0FBQzt3QkFDSixDQUFDO29CQUNGLENBQUM7Z0JBQ0YsQ0FBQztnQkE3Q0Q7b0JBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7MEVBQUE7Z0JBQ3BCO29CQUFDLFlBQUssQ0FBQyxlQUFlLENBQUM7OzZFQUFBO2dCQVZ4QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFdBQVcsRUFBRSx5Q0FBeUM7d0JBQ3RELFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO3dCQUNwQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1Q0FBaUIsQ0FBQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQzt3QkFDMUIsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzVCLENBQUM7OzBDQUFBO2dCQWdERiw2QkFBQztZQUFELENBL0NBLEFBK0NDLElBQUE7WUEvQ0QsMkRBK0NDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUtaXNzdWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lzc3VlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWUnO1xuaW1wb3J0IHtJc3N1ZXNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWVzLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9zZWFyY2hGaWx0ZXIucGlwZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8taG9tZS1pc3N1ZS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lL2hvbWUtaXNzdWUtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9ob21lLWlzc3VlLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgVm90ZUNlbGxDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW0lzc3Vlc1NlcnZpY2VdLFxuICAgIHBpcGVzOiBbU2VhcmNoRmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgIEhvbWVJc3N1ZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgnc2VhcmNoVGV4dCcpIHNlYXJjaFRleHQ6IHN0cmluZztcblx0QElucHV0KCdzdGFydFF1ZXN0aW9uJykgc3RhcnRRdWVzdGlvbjogYm9vbGVhbjtcblx0aXNzdWVzOiBJc3N1ZVtdO1xuXHRpc3N1ZTogSXNzdWVcblx0PSBuZXcgSXNzdWUoJycsICcnLCAwLCAwKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfaXNzdWVzU2VydmljZTogSXNzdWVzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2Upe31cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuZ2V0QWxsSXNzdWVzKClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMuaXNzdWVzID0gZGF0YTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnI6ICcsIGVycilcblx0XHRcdCk7XG5cdH1cblx0b25DcmVhdGUoKSB7XG5cdFx0aWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmNoZWNrVmFsaWQoKSkge1xuXHRcdFx0bGV0IGlzc3VlOiBJc3N1ZVxuXHRcdFx0XHQ9IG5ldyBJc3N1ZSh0aGlzLnNlYXJjaFRleHQgKyAnPycsICcnLCAwLCAwKTtcblx0XHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuaW5zZXJ0SXNzdWUoaXNzdWUpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdSZXR1cm5lZDogJywgZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSXNzdWUnLCB7IHR5cGU6ICd5ZXMnLCBpZDogZGF0YSB9XSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0ZGVsZXRlSXNzdWUoaXNzdWU6IElzc3VlLCBldmVudDogTW91c2VFdmVudCl7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKHRoaXMuX2F1dGhTZXJ2aWNlLmNoZWNrVmFsaWQoKSkge1xuXHRcdFx0bGV0IGFuc3dlciA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpc3N1ZT8gVGhpcyBhY3Rpb24gY2FuJ3QgYmUgdW5kb25lYCk7XG5cdFx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuZGVsZXRlSXNzdWUoaXNzdWUuX2lkKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdFx0c3VjY2VzcyA9PiB0aGlzLm5nT25Jbml0KCksXG5cdFx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcjogJywgZXJyKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
