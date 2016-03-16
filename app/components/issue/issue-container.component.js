System.register(['angular2/core', 'angular2/router', '../../shared/issues.service', '../../shared/points.service', './points-list.component', './create-point-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, issues_service_1, points_service_1, points_list_component_1, create_point_form_component_1, router_2;
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
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (points_service_1_1) {
                points_service_1 = points_service_1_1;
            },
            function (points_list_component_1_1) {
                points_list_component_1 = points_list_component_1_1;
            },
            function (create_point_form_component_1_1) {
                create_point_form_component_1 = create_point_form_component_1_1;
            }],
        execute: function() {
            IssueContainerComponent = (function () {
                function IssueContainerComponent(_routeParams, _issuesService) {
                    this._routeParams = _routeParams;
                    this._issuesService = _issuesService;
                }
                IssueContainerComponent.prototype.ngOnInit = function () {
                    this._issueId = this._routeParams.get('id');
                    this._type = this._routeParams.get('type');
                    console.log(this._issueId);
                    this.issue = this._issuesService.getIssue(this._issueId);
                };
                IssueContainerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/issue/issue-container.tpl.html',
                        providers: [issues_service_1.IssuesService, points_service_1.PointsService],
                        directives: [points_list_component_1.PointsListComponent, create_point_form_component_1.CreatePointFormComponent, router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, issues_service_1.IssuesService])
                ], IssueContainerComponent);
                return IssueContainerComponent;
            }());
            exports_1("IssueContainerComponent", IssueContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFLQyxpQ0FDUyxZQUF5QixFQUN6QixjQUE2QjtvQkFEN0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO2dCQUFFLENBQUM7Z0JBRXpDLDBDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO2dCQW5CRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSwwQ0FBMEM7d0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsOEJBQWEsQ0FBQzt3QkFDekMsVUFBVSxFQUFFLENBQUMsMkNBQW1CLEVBQUUsc0RBQXdCLEVBQUUsMEJBQWlCLENBQUM7cUJBQ2pGLENBQUM7OzJDQUFBO2dCQWdCRiw4QkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQsNkRBZUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZSc7XG5pbXBvcnQge0lzc3Vlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZXMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50c0xpc3RDb21wb25lbnR9IGZyb20gJy4vcG9pbnRzLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7Q3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50fSBmcm9tICcuL2NyZWF0ZS1wb2ludC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHsvLyBSb3V0ZSBubyBzZWxlY3RvclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSXNzdWVzU2VydmljZSwgUG9pbnRzU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1BvaW50c0xpc3RDb21wb25lbnQsIENyZWF0ZVBvaW50Rm9ybUNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIElzc3VlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRpc3N1ZTogSXNzdWU7XG5cdF9pc3N1ZUlkOiBzdHJpbmc7XG5cdHByaXZhdGUgX3R5cGU6IHN0cmluZztcblx0c2VhcmNoVGV4dDogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfaXNzdWVzU2VydmljZTogSXNzdWVzU2VydmljZSl7fVxuXG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHR0aGlzLl9pc3N1ZUlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRcdHRoaXMuX3R5cGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLl9pc3N1ZUlkKTtcblx0XHR0aGlzLmlzc3VlID0gdGhpcy5faXNzdWVzU2VydmljZS5nZXRJc3N1ZSh0aGlzLl9pc3N1ZUlkKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
