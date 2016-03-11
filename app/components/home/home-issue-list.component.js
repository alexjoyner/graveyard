System.register(['angular2/core', '../../shared/issues.service', '../../pipes/searchFilter.pipe'], function(exports_1, context_1) {
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
    var core_1, issues_service_1, searchFilter_pipe_1;
    var HomeIssueListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (searchFilter_pipe_1_1) {
                searchFilter_pipe_1 = searchFilter_pipe_1_1;
            }],
        execute: function() {
            HomeIssueListComponent = (function () {
                function HomeIssueListComponent(_issuesService) {
                    this._issuesService = _issuesService;
                }
                HomeIssueListComponent.prototype.ngOnInit = function () {
                    this.issues = this._issuesService.getAllIssues();
                };
                HomeIssueListComponent.prototype.deleteIssue = function (issue) {
                    this._issuesService.deleteIssue(issue);
                };
                HomeIssueListComponent.prototype.voteIssue = function (issue, type) {
                    this._issuesService.voteIssue(issue, type);
                };
                HomeIssueListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-home-issue-list',
                        templateUrl: 'templates/home/home-issue-list.tpl.html',
                        styleUrls: ['src/css/home-issue.css'],
                        providers: [issues_service_1.IssuesService],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe],
                        inputs: ['searchText']
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService])
                ], HomeIssueListComponent);
                return HomeIssueListComponent;
            }());
            exports_1("HomeIssueListComponent", HomeIssueListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBRUMsZ0NBQW9CLGNBQTZCO29CQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtnQkFBRSxDQUFDO2dCQUNwRCx5Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDbEQsQ0FBQztnQkFDRCw0Q0FBVyxHQUFYLFVBQVksS0FBWTtvQkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBQ0QsMENBQVMsR0FBVCxVQUFVLEtBQVksRUFBRSxJQUFZO29CQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBbkJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsV0FBVyxFQUFFLHlDQUF5Qzt3QkFDdEQsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7d0JBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7d0JBQzFCLEtBQUssRUFBRSxDQUFDLG9DQUFnQixDQUFDO3dCQUN6QixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3pCLENBQUM7OzBDQUFBO2dCQWFGLDZCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCwyREFZQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lzc3VlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWUnO1xuaW1wb3J0IHtJc3N1ZXNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWVzLnNlcnZpY2UnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9zZWFyY2hGaWx0ZXIucGlwZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWhvbWUtaXNzdWUtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaG9tZS9ob21lLWlzc3VlLWxpc3QudHBsLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL2hvbWUtaXNzdWUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbSXNzdWVzU2VydmljZV0sXG4gICAgcGlwZXM6IFtTZWFyY2hGaWx0ZXJQaXBlXSxcbiAgICBpbnB1dHM6IFsnc2VhcmNoVGV4dCddXG59KVxuZXhwb3J0IGNsYXNzICBIb21lSXNzdWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRpc3N1ZXM6IElzc3VlW107XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2lzc3Vlc1NlcnZpY2U6IElzc3Vlc1NlcnZpY2Upe31cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuaXNzdWVzID0gdGhpcy5faXNzdWVzU2VydmljZS5nZXRBbGxJc3N1ZXMoKTtcblx0fVxuXHRkZWxldGVJc3N1ZShpc3N1ZTogSXNzdWUpe1xuXHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuZGVsZXRlSXNzdWUoaXNzdWUpO1xuXHR9XG5cdHZvdGVJc3N1ZShpc3N1ZTogSXNzdWUsIHR5cGU6IHN0cmluZyl7XG5cdFx0dGhpcy5faXNzdWVzU2VydmljZS52b3RlSXNzdWUoaXNzdWUsIHR5cGUpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
