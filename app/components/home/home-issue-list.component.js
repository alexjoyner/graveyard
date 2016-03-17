System.register(['angular2/core', '../../shared/issues.service', '../../pipes/searchFilter.pipe', 'angular2/router', '../../shared/vote-cell.component'], function(exports_1, context_1) {
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
    var core_1, issues_service_1, searchFilter_pipe_1, router_1, vote_cell_component_1;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            }],
        execute: function() {
            HomeIssueListComponent = (function () {
                function HomeIssueListComponent(_issuesService) {
                    this._issuesService = _issuesService;
                }
                HomeIssueListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._issuesService.getAllIssues()
                        .subscribe(function (data) {
                        console.log(data);
                        _this.issues = data;
                    }, function (err) { return console.log('err: ', err); });
                };
                HomeIssueListComponent.prototype.deleteIssue = function (issue, event) {
                    var _this = this;
                    event.stopPropagation();
                    this._issuesService.deleteIssue(issue._id)
                        .subscribe(function (success) { return _this.ngOnInit(); }, function (err) { return console.log('error: ', err); });
                };
                HomeIssueListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-home-issue-list',
                        templateUrl: 'templates/home/home-issue-list.tpl.html',
                        styleUrls: ['src/css/home-issue.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, vote_cell_component_1.VoteCellComponent],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBRUMsZ0NBQW9CLGNBQTZCO29CQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtnQkFBRSxDQUFDO2dCQUNwRCx5Q0FBUSxHQUFSO29CQUFBLGlCQVNDO29CQVJBLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFO3lCQUNoQyxTQUFTLENBQ1QsVUFBQSxJQUFJO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNwQixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztnQkFDSixDQUFDO2dCQUNELDRDQUFXLEdBQVgsVUFBWSxLQUFZLEVBQUUsS0FBaUI7b0JBQTNDLGlCQU9DO29CQU5BLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzt5QkFDeEMsU0FBUyxDQUNULFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFmLENBQWUsRUFDMUIsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDbEMsQ0FBQztnQkFDSixDQUFDO2dCQTdCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFdBQVcsRUFBRSx5Q0FBeUM7d0JBQ3RELFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO3dCQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1Q0FBaUIsQ0FBQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQzt3QkFDMUIsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQ3pCLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekIsQ0FBQzs7MENBQUE7Z0JBc0JGLDZCQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCwyREFxQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaG9tZS1pc3N1ZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtJc3N1ZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3VlJztcbmltcG9ydCB7SXNzdWVzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2lzc3Vlcy5zZXJ2aWNlJztcbmltcG9ydCB7U2VhcmNoRmlsdGVyUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8taG9tZS1pc3N1ZS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lL2hvbWUtaXNzdWUtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvaG9tZS1pc3N1ZS5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFZvdGVDZWxsQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtJc3N1ZXNTZXJ2aWNlXSxcbiAgICBwaXBlczogW1NlYXJjaEZpbHRlclBpcGVdLFxuICAgIGlucHV0czogWydzZWFyY2hUZXh0J11cbn0pXG5leHBvcnQgY2xhc3MgIEhvbWVJc3N1ZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdGlzc3VlczogSXNzdWVbXTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaXNzdWVzU2VydmljZTogSXNzdWVzU2VydmljZSl7fVxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5faXNzdWVzU2VydmljZS5nZXRBbGxJc3N1ZXMoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5pc3N1ZXMgPSBkYXRhO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2VycjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHRkZWxldGVJc3N1ZShpc3N1ZTogSXNzdWUsIGV2ZW50OiBNb3VzZUV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLmRlbGV0ZUlzc3VlKGlzc3VlLl9pZClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHN1Y2Nlc3MgPT4gdGhpcy5uZ09uSW5pdCgpLFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
