System.register(['angular2/core', 'angular2/router', '../../shared/issues.service', './points-list.component', './create-point-form.component', './issue-container.service'], function(exports_1, context_1) {
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
    var core_1, router_1, issues_service_1, points_list_component_1, create_point_form_component_1, issue_container_service_1;
    var IssueContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (issues_service_1_1) {
                issues_service_1 = issues_service_1_1;
            },
            function (points_list_component_1_1) {
                points_list_component_1 = points_list_component_1_1;
            },
            function (create_point_form_component_1_1) {
                create_point_form_component_1 = create_point_form_component_1_1;
            },
            function (issue_container_service_1_1) {
                issue_container_service_1 = issue_container_service_1_1;
            }],
        execute: function() {
            IssueContainerComponent = (function () {
                function IssueContainerComponent(_routeParams, _issuesService) {
                    this._routeParams = _routeParams;
                    this._issuesService = _issuesService;
                }
                IssueContainerComponent.prototype.ngOnInit = function () {
                    this._issueId = this._routeParams.get('id');
                    this.issue = this._issuesService.getIssue(this._issueId);
                };
                IssueContainerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/issue/issue-container.tpl.html',
                        providers: [issues_service_1.IssuesService, issue_container_service_1.IssueContainerService],
                        directives: [points_list_component_1.PointsListComponent, create_point_form_component_1.CreatePointFormComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, issues_service_1.IssuesService])
                ], IssueContainerComponent);
                return IssueContainerComponent;
            }());
            exports_1("IssueContainerComponent", IssueContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdDLGlDQUNTLFlBQXlCLEVBQ3pCLGNBQTZCO29CQUQ3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7Z0JBQUUsQ0FBQztnQkFFekMsMENBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUQsQ0FBQztnQkFmRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSwwQ0FBMEM7d0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsK0NBQXFCLENBQUM7d0JBQ2pELFVBQVUsRUFBRSxDQUFDLDJDQUFtQixFQUFFLHNEQUF3QixDQUFDO3FCQUM5RCxDQUFDOzsyQ0FBQTtnQkFZRiw4QkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsNkRBV0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SXNzdWV9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZSc7XG5pbXBvcnQge0lzc3Vlc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pc3N1ZXMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50c0xpc3RDb21wb25lbnR9IGZyb20gJy4vcG9pbnRzLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7Q3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50fSBmcm9tICcuL2NyZWF0ZS1wb2ludC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge0lzc3VlQ29udGFpbmVyU2VydmljZX0gZnJvbSAnLi9pc3N1ZS1jb250YWluZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoey8vIFJvdXRlIG5vIHNlbGVjdG9yXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvaXNzdWUtY29udGFpbmVyLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtJc3N1ZXNTZXJ2aWNlLCBJc3N1ZUNvbnRhaW5lclNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtQb2ludHNMaXN0Q29tcG9uZW50LCBDcmVhdGVQb2ludEZvcm1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIElzc3VlQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRpc3N1ZTogSXNzdWU7XG5cdHByaXZhdGUgX2lzc3VlSWQ6IHN0cmluZztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX2lzc3Vlc1NlcnZpY2U6IElzc3Vlc1NlcnZpY2Upe31cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5faXNzdWVJZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0XHR0aGlzLmlzc3VlID0gdGhpcy5faXNzdWVzU2VydmljZS5nZXRJc3N1ZSh0aGlzLl9pc3N1ZUlkKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
