System.register(['angular2/core', 'angular2/router', '../../shared/points.service', '../../shared/supports.service', './main-point.component', './top-support.component', './more-support.component', '../../pipes/searchFilter.pipe', './add-support.component'], function(exports_1, context_1) {
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
    var core_1, router_1, points_service_1, supports_service_1, main_point_component_1, top_support_component_1, more_support_component_1, searchFilter_pipe_1, add_support_component_1;
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
            function (supports_service_1_1) {
                supports_service_1 = supports_service_1_1;
            },
            function (main_point_component_1_1) {
                main_point_component_1 = main_point_component_1_1;
            },
            function (top_support_component_1_1) {
                top_support_component_1 = top_support_component_1_1;
            },
            function (more_support_component_1_1) {
                more_support_component_1 = more_support_component_1_1;
            },
            function (searchFilter_pipe_1_1) {
                searchFilter_pipe_1 = searchFilter_pipe_1_1;
            },
            function (add_support_component_1_1) {
                add_support_component_1 = add_support_component_1_1;
            }],
        execute: function() {
            PointsListComponent = (function () {
                function PointsListComponent(_pointsService, _routeParams, _supportsService) {
                    this._pointsService = _pointsService;
                    this._routeParams = _routeParams;
                    this._supportsService = _supportsService;
                }
                PointsListComponent.prototype.ngOnInit = function () {
                    this.issueId = this._routeParams.get('id');
                    this.type = this._routeParams.get('type');
                    this.points = this._pointsService.getPoints(this.issueId, this.type);
                    if (this.points && this.points.length > 0)
                        this.getSupports(this.points[0]._id, 0);
                };
                PointsListComponent.prototype.onRemoved = function () {
                    this.ngOnInit();
                };
                PointsListComponent.prototype.getSupports = function (pointId, index) {
                    console.log(pointId, index);
                    this.points[index]['supports'] = this._supportsService.getSupports(pointId);
                };
                PointsListComponent.prototype.viewAll = function (index) {
                    if (this.points[index]['viewAll']) {
                        this.points[index]['viewAll'] = !(this.points[index]['viewAll']);
                    }
                    else {
                        this.points[index]['viewAll'] = true;
                    }
                    this.points[index]['addEvidence'] = false;
                };
                PointsListComponent.prototype.addEvidence = function (index) {
                    if (this.points[index]['addEvidence']) {
                        this.points[index]['addEvidence'] = !(this.points[index]['addEvidence']);
                    }
                    else {
                        this.points[index]['addEvidence'] = true;
                    }
                    this.points[index]['viewAll'] = false;
                };
                PointsListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-points-list',
                        templateUrl: 'templates/issue/points-list.tpl.html',
                        styleUrls: ['src/css/points-list.css'],
                        directives: [main_point_component_1.MainPointComponent, top_support_component_1.TopSupportComponent, more_support_component_1.MoreSupportComponent, add_support_component_1.AddSupportComponent],
                        providers: [supports_service_1.SupportsService],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe],
                        inputs: ['searchText']
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.RouteParams, supports_service_1.SupportsService])
                ], PointsListComponent);
                return PointsListComponent;
            }());
            exports_1("PointsListComponent", PointsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUlDLDZCQUNTLGNBQTZCLEVBQzdCLFlBQXlCLEVBQ3pCLGdCQUFpQztvQkFGakMsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUFJLENBQUM7Z0JBRS9DLHNDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsdUNBQVMsR0FBVDtvQkFDQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0QseUNBQVcsR0FBWCxVQUFZLE9BQWUsRUFBRSxLQUFhO29CQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO2dCQUNELHFDQUFPLEdBQVAsVUFBUSxLQUFhO29CQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUN0QyxDQUFDO29CQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELHlDQUFXLEdBQVgsVUFBWSxLQUFhO29CQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUMxQyxDQUFDO29CQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN2QyxDQUFDO2dCQWhERjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSwyQ0FBbUIsRUFBRSw2Q0FBb0IsRUFBRSwyQ0FBbUIsQ0FBQzt3QkFDaEcsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQ3pCLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekIsQ0FBQzs7dUNBQUE7Z0JBeUNGLDBCQUFDO1lBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtZQXhDRCxxREF3Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL3BvaW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1N1cHBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50LnRzJztcbmltcG9ydCB7TWFpblBvaW50Q29tcG9uZW50fSBmcm9tICcuL21haW4tcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7VG9wU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi90b3Atc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtNb3JlU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi9tb3JlLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoRmlsdGVyUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUnO1xuaW1wb3J0IHtBZGRTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL2FkZC1zdXBwb3J0LmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXBvaW50cy1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9wb2ludHMtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvcG9pbnRzLWxpc3QuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW01haW5Qb2ludENvbXBvbmVudCwgVG9wU3VwcG9ydENvbXBvbmVudCwgTW9yZVN1cHBvcnRDb21wb25lbnQsIEFkZFN1cHBvcnRDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1N1cHBvcnRzU2VydmljZV0sXG4gICAgcGlwZXM6IFtTZWFyY2hGaWx0ZXJQaXBlXSxcbiAgICBpbnB1dHM6IFsnc2VhcmNoVGV4dCddXG59KVxuZXhwb3J0IGNsYXNzIFBvaW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHBvaW50czogUG9pbnRbXTtcblx0dHlwZTogc3RyaW5nO1xuXHRpc3N1ZUlkOiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3N1cHBvcnRzU2VydmljZTogU3VwcG9ydHNTZXJ2aWNlKSB7IH1cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5pc3N1ZUlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRcdHRoaXMudHlwZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRcdHRoaXMucG9pbnRzID0gdGhpcy5fcG9pbnRzU2VydmljZS5nZXRQb2ludHModGhpcy5pc3N1ZUlkLCB0aGlzLnR5cGUpO1xuXHRcdGlmICh0aGlzLnBvaW50cyAmJiB0aGlzLnBvaW50cy5sZW5ndGggPiAwKVxuXHRcdFx0dGhpcy5nZXRTdXBwb3J0cyh0aGlzLnBvaW50c1swXS5faWQsIDApO1xuXHR9XG5cblx0b25SZW1vdmVkKCl7XG5cdFx0dGhpcy5uZ09uSW5pdCgpO1xuXHR9XG5cdGdldFN1cHBvcnRzKHBvaW50SWQ6IHN0cmluZywgaW5kZXg6IG51bWJlcil7XG5cdFx0Y29uc29sZS5sb2cocG9pbnRJZCwgaW5kZXgpO1xuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsnc3VwcG9ydHMnXSA9IHRoaXMuX3N1cHBvcnRzU2VydmljZS5nZXRTdXBwb3J0cyhwb2ludElkKTtcblx0fVxuXHR2aWV3QWxsKGluZGV4OiBudW1iZXIpe1xuXHRcdGlmICh0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSl7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9ICEodGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSBmYWxzZTtcblx0fVxuXHRhZGRFdmlkZW5jZShpbmRleDogbnVtYmVyKXtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKSB7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gZmFsc2U7XG5cdH1cbn1cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
