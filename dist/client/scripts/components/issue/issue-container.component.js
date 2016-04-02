System.register(['angular2/core', 'angular2/router', '../../shared/issue', '../../shared/issues.service', '../../shared/points.service', './points-list.component', '../../shared/vote-cell.component', './issue-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, issue_1, issues_service_1, points_service_1, points_list_component_1, router_2, vote_cell_component_1, issue_form_component_1;
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
            }],
        execute: function() {
            IssueContainerComponent = (function () {
                function IssueContainerComponent(_routeParams, _issuesService) {
                    this._routeParams = _routeParams;
                    this._issuesService = _issuesService;
                    this.issue = new issue_1.Issue('', '', 0, 0);
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
                    this._issueId = this._routeParams.get('id');
                    this._type = this._routeParams.get('type');
                    this._issuesService.getIssue(this._issueId).
                        subscribe(function (data) {
                        setTimeout(function () { return _this.issue = data; }, 1500);
                        console.log(_this.issue);
                        console.log(_this.issue.mainQuestion);
                    }, function (err) { return console.log('Err: ', err); });
                };
                IssueContainerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/issue/issue-container.tpl.html',
                        providers: [issues_service_1.IssuesService, points_service_1.PointsService],
                        directives: [points_list_component_1.PointsListComponent, router_2.ROUTER_DIRECTIVES, vote_cell_component_1.VoteCellComponent, issue_form_component_1.NewIssueForm]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, issues_service_1.IssuesService])
                ], IssueContainerComponent);
                return IssueContainerComponent;
            }());
            exports_1("IssueContainerComponent", IssueContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFJQyxpQ0FDUyxZQUF5QixFQUN6QixjQUE2QjtvQkFEN0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUx0QyxVQUFLLEdBQVUsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBS0ksQ0FBQztnQkFFekMsMkNBQVMsR0FBVCxVQUFVLEtBQVksRUFBRSxLQUFpQixFQUFFLFVBQW1CO29CQUM3RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLElBQUksTUFBZSxDQUFDO29CQUNwQixFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO3dCQUNkLE1BQU0sR0FBRyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs0QkFDdEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDOUQsQ0FBQztnQkFDRixDQUFDO2dCQUNELDBDQUFRLEdBQVI7b0JBQUEsaUJBWUM7b0JBWEEsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDM0MsU0FBUyxDQUNSLFVBQUEsSUFBSTt3QkFDSCxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFqQixDQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN0QyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztnQkFDSCxDQUFDO2dCQXBDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSwwQ0FBMEM7d0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsOEJBQWEsQ0FBQzt3QkFDekMsVUFBVSxFQUFFLENBQUMsMkNBQW1CLEVBQUUsMEJBQWlCLEVBQUUsdUNBQWlCLEVBQUUsbUNBQVksQ0FBQztxQkFDeEYsQ0FBQzs7MkNBQUE7Z0JBaUNGLDhCQUFDO1lBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtZQWhDRCw2REFnQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZSc7XG5pbXBvcnQge0lzc3Vlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZXMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50c0xpc3RDb21wb25lbnR9IGZyb20gJy4vcG9pbnRzLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge05ld0lzc3VlRm9ybX0gZnJvbSAnLi9pc3N1ZS1mb3JtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoey8vIFJvdXRlIG5vIHNlbGVjdG9yXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvaXNzdWUtY29udGFpbmVyLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtJc3N1ZXNTZXJ2aWNlLCBQb2ludHNTZXJ2aWNlXSxcbiAgICBkaXJlY3RpdmVzOiBbUG9pbnRzTGlzdENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVMsIFZvdGVDZWxsQ29tcG9uZW50LCBOZXdJc3N1ZUZvcm1dXG59KVxuZXhwb3J0IGNsYXNzIElzc3VlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRpc3N1ZTogSXNzdWUgPSBuZXcgSXNzdWUoJycsJycsMCwwKTtcblx0cHJpdmF0ZSBfaXNzdWVJZDogc3RyaW5nO1xuXHRwcml2YXRlIF90eXBlOiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRwcml2YXRlIF9pc3N1ZXNTZXJ2aWNlOiBJc3N1ZXNTZXJ2aWNlKXt9XG5cblx0ZWRpdElzc3VlKGlzc3VlOiBJc3N1ZSwgZXZlbnQ6IE1vdXNlRXZlbnQsIGNhbmNlbEZsYWc6IGJvb2xlYW4pIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRsZXQgYW5zd2VyOiBib29sZWFuO1xuXHRcdGlmKGNhbmNlbEZsYWcpe1xuXHRcdFx0YW5zd2VyID0gY29uZmlybSgnQ2FuY2VsaW5nIHdpbGwgZGlzY2FyZCBjaGFuZ2VzLiBDb250aW51ZT8nKTtcblx0XHR9XG5cdFx0aWYgKGFuc3dlciB8fCAhY2FuY2VsRmxhZykge1xuXHRcdFx0dGhpcy5pc3N1ZVsnZWRpdElzc3VlJ10gPVxuXHRcdFx0XHQodGhpcy5pc3N1ZVsnZWRpdElzc3VlJ10pID8gIXRoaXMuaXNzdWVbJ2VkaXRJc3N1ZSddIDogdHJ1ZTtcblx0XHR9XG5cdH1cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2lzc3VlSWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cdFx0dGhpcy5fdHlwZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRcdHRoaXMuX2lzc3Vlc1NlcnZpY2UuZ2V0SXNzdWUodGhpcy5faXNzdWVJZCkuXG5cdFx0c3Vic2NyaWJlKFxuXHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pc3N1ZSA9IGRhdGEsIDE1MDApO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmlzc3VlKTtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5pc3N1ZS5tYWluUXVlc3Rpb24pO1xuXHRcdFx0fSxcblx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyOiAnLCBlcnIpXG5cdFx0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
