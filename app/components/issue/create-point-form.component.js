System.register(['angular2/core', '../../shared/point', '../../shared/points.service', 'angular2/router', './issue-container.service'], function(exports_1, context_1) {
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
    var core_1, point_1, points_service_1, router_1, issue_container_service_1;
    var CreatePointFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (point_1_1) {
                point_1 = point_1_1;
            },
            function (points_service_1_1) {
                points_service_1 = points_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (issue_container_service_1_1) {
                issue_container_service_1 = issue_container_service_1_1;
            }],
        execute: function() {
            CreatePointFormComponent = (function () {
                function CreatePointFormComponent(_pointsService, _routeParams, _IssueContainerService) {
                    this._pointsService = _pointsService;
                    this._routeParams = _routeParams;
                    this._IssueContainerService = _IssueContainerService;
                    this.added = new core_1.EventEmitter();
                }
                CreatePointFormComponent.prototype.createPoint = function () {
                    console.log(this.newPoint);
                    var createdPoint = this._pointsService.insertPoint(this.newPoint);
                    this._IssueContainerService.insertPoint(createdPoint);
                };
                CreatePointFormComponent.prototype.ngOnInit = function () {
                    this._issueId = this._routeParams.get('id');
                    this.newPoint = new point_1.Point(this._issueId, '', '', 0, 0, '');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CreatePointFormComponent.prototype, "added", void 0);
                CreatePointFormComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-create-point-form',
                        templateUrl: 'templates/issue/create-point-form.tpl.html',
                        providers: [points_service_1.PointsService]
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.RouteParams, issue_container_service_1.IssueContainerService])
                ], CreatePointFormComponent);
                return CreatePointFormComponent;
            }());
            exports_1("CreatePointFormComponent", CreatePointFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBS0Msa0NBQ1MsY0FBNkIsRUFDN0IsWUFBeUIsRUFDekIsc0JBQTZDO29CQUY3QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDN0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7b0JBTDVDLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBS0UsQ0FBQztnQkFFM0QsOENBQVcsR0FBWDtvQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUVELDJDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFoQkQ7b0JBQUMsYUFBTSxFQUFFOzt1RUFBQTtnQkFSVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFdBQVcsRUFBRSw0Q0FBNEM7d0JBQ3pELFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzdCLENBQUM7OzRDQUFBO2dCQXFCRiwrQkFBQztZQUFELENBcEJBLEFBb0JDLElBQUE7WUFwQkQsK0RBb0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9jcmVhdGUtcG9pbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnQnO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SXNzdWVDb250YWluZXJTZXJ2aWNlfSBmcm9tICcuL2lzc3VlLWNvbnRhaW5lci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1jcmVhdGUtcG9pbnQtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0udHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1BvaW50c1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZVBvaW50Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0bmV3UG9pbnQ6IFBvaW50O1xuXHRwcml2YXRlIF9pc3N1ZUlkOiBzdHJpbmc7XG5cdEBPdXRwdXQoKSBhZGRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfSXNzdWVDb250YWluZXJTZXJ2aWNlOiBJc3N1ZUNvbnRhaW5lclNlcnZpY2UpIHsgfVxuXG5cdGNyZWF0ZVBvaW50KCl7XG5cdFx0Y29uc29sZS5sb2codGhpcy5uZXdQb2ludCk7XG5cdFx0bGV0IGNyZWF0ZWRQb2ludCA9IHRoaXMuX3BvaW50c1NlcnZpY2UuaW5zZXJ0UG9pbnQodGhpcy5uZXdQb2ludCk7XG5cdFx0dGhpcy5fSXNzdWVDb250YWluZXJTZXJ2aWNlLmluc2VydFBvaW50KGNyZWF0ZWRQb2ludCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5faXNzdWVJZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0XHR0aGlzLm5ld1BvaW50ID0gbmV3IFBvaW50KHRoaXMuX2lzc3VlSWQsICcnLCAnJywgMCwgMCwgJycpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
