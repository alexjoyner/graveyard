System.register(['angular2/core', '../../shared/issues.service', '../../pipes/searchFilter.pipe', 'angular2/router', './new-issue-form.component'], function(exports_1, context_1) {
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
    var core_1, issues_service_1, searchFilter_pipe_1, router_1, new_issue_form_component_1;
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
            function (new_issue_form_component_1_1) {
                new_issue_form_component_1 = new_issue_form_component_1_1;
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
                        styleUrls: ['src/css/home-issue.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, new_issue_form_component_1.NewIssueForm],
                        providers: [issues_service_1.IssuesService],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [issues_service_1.IssuesService])
                ], HomeIssueListComponent);
                return HomeIssueListComponent;
            }());
            exports_1("HomeIssueListComponent", HomeIssueListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLWlzc3VlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUMsZ0NBQW9CLGNBQTZCO29CQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtnQkFBRSxDQUFDO2dCQUNwRCx5Q0FBUSxHQUFSO29CQUFBLGlCQVNDO29CQVJBLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFO3lCQUNoQyxTQUFTLENBQ1QsVUFBQSxJQUFJO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNwQixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztnQkFDSixDQUFDO2dCQUNELDRDQUFXLEdBQVgsVUFBWSxLQUFZLEVBQUUsS0FBaUI7b0JBQTNDLGlCQVVDO29CQVRBLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7b0JBQ2hHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzZCQUN4QyxTQUFTLENBQ1YsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxFQUMxQixVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNqQyxDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkF4QkQ7b0JBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7MEVBQUE7Z0JBQ3BCO29CQUFDLFlBQUssQ0FBQyxlQUFlLENBQUM7OzZFQUFBO2dCQVZ4QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFdBQVcsRUFBRSx5Q0FBeUM7d0JBQ3RELFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO3dCQUNyQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1Q0FBWSxDQUFDO3dCQUM3QyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3dCQUMxQixLQUFLLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDNUIsQ0FBQzs7MENBQUE7Z0JBMkJGLDZCQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtZQTFCRCwyREEwQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2hvbWUvaG9tZS1pc3N1ZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZSc7XG5pbXBvcnQge0lzc3Vlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZXMuc2VydmljZSc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclBpcGV9IGZyb20gJy4uLy4uL3BpcGVzL3NlYXJjaEZpbHRlci5waXBlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge05ld0lzc3VlRm9ybX0gZnJvbSAnLi9uZXctaXNzdWUtZm9ybS5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1ob21lLWlzc3VlLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2hvbWUvaG9tZS1pc3N1ZS1saXN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9ob21lLWlzc3VlLmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTmV3SXNzdWVGb3JtXSxcbiAgICBwcm92aWRlcnM6IFtJc3N1ZXNTZXJ2aWNlXSxcbiAgICBwaXBlczogW1NlYXJjaEZpbHRlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzICBIb21lSXNzdWVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoJ3NlYXJjaFRleHQnKSBzZWFyY2hUZXh0OiBzdHJpbmc7XG5cdEBJbnB1dCgnc3RhcnRRdWVzdGlvbicpIHN0YXJ0UXVlc3Rpb246IGJvb2xlYW47XG5cdGlzc3VlczogSXNzdWVbXTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfaXNzdWVzU2VydmljZTogSXNzdWVzU2VydmljZSl7fVxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5faXNzdWVzU2VydmljZS5nZXRBbGxJc3N1ZXMoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5pc3N1ZXMgPSBkYXRhO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2VycjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHRkZWxldGVJc3N1ZShpc3N1ZTogSXNzdWUsIGV2ZW50OiBNb3VzZUV2ZW50KXtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRsZXQgYW5zd2VyID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGlzc3VlPyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9pc3N1ZXNTZXJ2aWNlLmRlbGV0ZUlzc3VlKGlzc3VlLl9pZClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0c3VjY2VzcyA9PiB0aGlzLm5nT25Jbml0KCksXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3I6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
