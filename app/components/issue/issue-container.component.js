System.register(['angular2/core', 'angular2/router', '../../shared/issue', '../../shared/issues.service', '../../shared/points.service', './points-list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, issue_1, issues_service_1, points_service_1, points_list_component_1, router_2;
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
            }],
        execute: function() {
            IssueContainerComponent = (function () {
                function IssueContainerComponent(_routeParams, _issuesService) {
                    this._routeParams = _routeParams;
                    this._issuesService = _issuesService;
                    this.issue = new issue_1.Issue(' ', ' ', 0, 0);
                }
                IssueContainerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._issueId = this._routeParams.get('id');
                    this._type = this._routeParams.get('type');
                    this._issuesService.getIssue(this._issueId).
                        subscribe(function (data) {
                        _this.issue = data;
                        console.log(_this.issue);
                        console.log(_this.issue.mainQuestion);
                    }, function (err) { return console.log('Err: ', err); });
                };
                IssueContainerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'templates/issue/issue-container.tpl.html',
                        providers: [issues_service_1.IssuesService, points_service_1.PointsService],
                        directives: [points_list_component_1.PointsListComponent, router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, issues_service_1.IssuesService])
                ], IssueContainerComponent);
                return IssueContainerComponent;
            }());
            exports_1("IssueContainerComponent", IssueContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFLQyxpQ0FDUyxZQUF5QixFQUN6QixjQUE2QjtvQkFEN0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQU50QyxVQUFLLEdBQVUsSUFBSSxhQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBTUUsQ0FBQztnQkFFekMsMENBQVEsR0FBUjtvQkFBQSxpQkFZQztvQkFYQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUMzQyxTQUFTLENBQ1IsVUFBQSxJQUFJO3dCQUNILEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN0QyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztnQkFDSCxDQUFDO2dCQTFCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSwwQ0FBMEM7d0JBQ3ZELFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsOEJBQWEsQ0FBQzt3QkFDekMsVUFBVSxFQUFFLENBQUMsMkNBQW1CLEVBQUUsMEJBQWlCLENBQUM7cUJBQ3ZELENBQUM7OzJDQUFBO2dCQXVCRiw4QkFBQztZQUFELENBdEJBLEFBc0JDLElBQUE7WUF0QkQsNkRBc0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9pc3N1ZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0lzc3VlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWUnO1xuaW1wb3J0IHtJc3N1ZXNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvaXNzdWVzLnNlcnZpY2UnO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtQb2ludHNMaXN0Q29tcG9uZW50fSBmcm9tICcuL3BvaW50cy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHsvLyBSb3V0ZSBubyBzZWxlY3RvclxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbSXNzdWVzU2VydmljZSwgUG9pbnRzU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1BvaW50c0xpc3RDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBJc3N1ZUNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0aXNzdWU6IElzc3VlID0gbmV3IElzc3VlKCcgJywnICcsMCwwKTtcblx0cHJpdmF0ZSBfaXNzdWVJZDogc3RyaW5nO1xuXHRwcml2YXRlIF90eXBlOiBzdHJpbmc7XG5cdHNlYXJjaFRleHQ6IHN0cmluZztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX2lzc3Vlc1NlcnZpY2U6IElzc3Vlc1NlcnZpY2Upe31cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5faXNzdWVJZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0XHR0aGlzLl90eXBlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCd0eXBlJyk7XG5cdFx0dGhpcy5faXNzdWVzU2VydmljZS5nZXRJc3N1ZSh0aGlzLl9pc3N1ZUlkKS5cblx0XHRzdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5pc3N1ZSA9IGRhdGE7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuaXNzdWUpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmlzc3VlLm1haW5RdWVzdGlvbik7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnI6ICcsIGVycilcblx0XHQpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
