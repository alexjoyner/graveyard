System.register(['angular2/core', 'angular2/router', '../../shared/points.service', './main-point.component', './top-support.component', './more-support.component'], function(exports_1, context_1) {
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
    var core_1, router_1, points_service_1, main_point_component_1, top_support_component_1, more_support_component_1;
    var PointsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (points_service_1_1) {
                points_service_1 = points_service_1_1;
            },
            function (main_point_component_1_1) {
                main_point_component_1 = main_point_component_1_1;
            },
            function (top_support_component_1_1) {
                top_support_component_1 = top_support_component_1_1;
            },
            function (more_support_component_1_1) {
                more_support_component_1 = more_support_component_1_1;
            }],
        execute: function() {
            PointsListComponent = (function () {
                function PointsListComponent(_pointsService, _routeParams) {
                    this._pointsService = _pointsService;
                    this._routeParams = _routeParams;
                }
                PointsListComponent.prototype.ngOnInit = function () {
                    var issueId = this._routeParams.get('id');
                    this.points = this._pointsService.getPoints();
                };
                PointsListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-points-list',
                        templateUrl: 'templates/issue/points-list.tpl.html',
                        styleUrls: ['src/css/points-list.css'],
                        providers: [points_service_1.PointsService],
                        directives: [main_point_component_1.MainPointComponent, top_support_component_1.TopSupportComponent, more_support_component_1.MoreSupportComponent]
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.RouteParams])
                ], PointsListComponent);
                return PointsListComponent;
            }());
            exports_1("PointsListComponent", PointsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBRUMsNkJBQ1MsY0FBNkIsRUFDN0IsWUFBeUI7b0JBRHpCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRSxDQUFDO2dCQUVyQyxzQ0FBUSxHQUFSO29CQUNDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQy9DLENBQUM7Z0JBaEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLHNDQUFzQzt3QkFDbkQsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7d0JBQzFCLFVBQVUsRUFBRSxDQUFDLHlDQUFrQixFQUFFLDJDQUFtQixFQUFFLDZDQUFvQixDQUFDO3FCQUM5RSxDQUFDOzt1Q0FBQTtnQkFZRiwwQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQscURBV0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL3BvaW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludC50cyc7XG5pbXBvcnQge01haW5Qb2ludENvbXBvbmVudH0gZnJvbSAnLi9tYWluLXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1RvcFN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vdG9wLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7TW9yZVN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vbW9yZS1zdXBwb3J0LmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXBvaW50cy1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9wb2ludHMtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvcG9pbnRzLWxpc3QuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbUG9pbnRzU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW01haW5Qb2ludENvbXBvbmVudCwgVG9wU3VwcG9ydENvbXBvbmVudCwgTW9yZVN1cHBvcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBvaW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHBvaW50czogUG9pbnRbXTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpe31cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0bGV0IGlzc3VlSWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cdFx0dGhpcy5wb2ludHMgPSB0aGlzLl9wb2ludHNTZXJ2aWNlLmdldFBvaW50cygpO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
