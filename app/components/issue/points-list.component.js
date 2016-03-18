System.register(['angular2/core', 'angular2/router', '../../shared/points.service', '../../shared/supports.service', './main-point.component', './top-support.component', './more-support.component', '../../pipes/searchFilter.pipe', './add-support.component', './create-point-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, points_service_1, supports_service_1, main_point_component_1, top_support_component_1, more_support_component_1, searchFilter_pipe_1, add_support_component_1, create_point_form_component_1;
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
            },
            function (create_point_form_component_1_1) {
                create_point_form_component_1 = create_point_form_component_1_1;
            }],
        execute: function() {
            PointsListComponent = (function () {
                function PointsListComponent(_pointsService, _routeParams, _supportsService) {
                    this._pointsService = _pointsService;
                    this._routeParams = _routeParams;
                    this._supportsService = _supportsService;
                }
                PointsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('getting');
                    this.issueId = this._routeParams.get('id');
                    this.type = this._routeParams.get('type');
                    this._pointsService.getPoints(this.issueId, this.type)
                        .subscribe(function (data) { return _this.points = data; }, function (err) { return console.log('err: ', err); });
                    if (this.points && this.points.length > 0)
                        this.getSupports(this.points[0]._id, 0);
                };
                PointsListComponent.prototype.removeSupport = function (pointIndx, supportIndx) {
                    this.points[pointIndx]['supports'].splice(supportIndx, 1);
                };
                PointsListComponent.prototype.getSupports = function (pointId, index) {
                    var _this = this;
                    console.log(pointId, index);
                    this._supportsService.getSupports(pointId)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.points[index]['supports'] = data;
                    }, function (err) { return console.log('Error: ', err); });
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
                __decorate([
                    core_1.Input('showForm'), 
                    __metadata('design:type', Boolean)
                ], PointsListComponent.prototype, "showForm", void 0);
                PointsListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-points-list',
                        templateUrl: 'templates/issue/points-list.tpl.html',
                        styleUrls: ['src/css/points-list.css'],
                        directives: [main_point_component_1.MainPointComponent, top_support_component_1.TopSupportComponent, more_support_component_1.MoreSupportComponent, add_support_component_1.AddSupportComponent, create_point_form_component_1.CreatePointFormComponent],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUtDLDZCQUNTLGNBQTZCLEVBQzdCLFlBQXlCLEVBQ3pCLGdCQUFpQztvQkFGakMsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUFJLENBQUM7Z0JBRS9DLHNDQUFRLEdBQVI7b0JBQUEsaUJBV0M7b0JBVkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUNwRCxTQUFTLENBQ1QsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksRUFBbEIsQ0FBa0IsRUFDMUIsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztvQkFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFD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LCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9wb2ludHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7U3VwcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydHMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnQudHMnO1xuaW1wb3J0IHtNYWluUG9pbnRDb21wb25lbnR9IGZyb20gJy4vbWFpbi1wb2ludC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb3BTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL3RvcC1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge01vcmVTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL21vcmUtc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9zZWFyY2hGaWx0ZXIucGlwZSc7XG5pbXBvcnQge0FkZFN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vYWRkLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7Q3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50fSBmcm9tICcuL2NyZWF0ZS1wb2ludC1mb3JtLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXBvaW50cy1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9wb2ludHMtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvcG9pbnRzLWxpc3QuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW01haW5Qb2ludENvbXBvbmVudCwgVG9wU3VwcG9ydENvbXBvbmVudCwgTW9yZVN1cHBvcnRDb21wb25lbnQsIEFkZFN1cHBvcnRDb21wb25lbnQsIENyZWF0ZVBvaW50Rm9ybUNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbU3VwcG9ydHNTZXJ2aWNlXSxcbiAgICBwaXBlczogW1NlYXJjaEZpbHRlclBpcGVdLFxuICAgIGlucHV0czogWydzZWFyY2hUZXh0J11cbn0pXG5leHBvcnQgY2xhc3MgUG9pbnRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0QElucHV0KCdzaG93Rm9ybScpIHNob3dGb3JtOiBib29sZWFuO1xuXHRwb2ludHM6IFBvaW50W107XG5cdHR5cGU6IHN0cmluZztcblx0aXNzdWVJZDogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9wb2ludHNTZXJ2aWNlOiBQb2ludHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRwcml2YXRlIF9zdXBwb3J0c1NlcnZpY2U6IFN1cHBvcnRzU2VydmljZSkgeyB9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdGNvbnNvbGUubG9nKCdnZXR0aW5nJyk7XG5cdFx0dGhpcy5pc3N1ZUlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRcdHRoaXMudHlwZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRcdHRoaXMuX3BvaW50c1NlcnZpY2UuZ2V0UG9pbnRzKHRoaXMuaXNzdWVJZCwgdGhpcy50eXBlKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB0aGlzLnBvaW50cyA9IGRhdGEsXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHRcdGlmICh0aGlzLnBvaW50cyAmJiB0aGlzLnBvaW50cy5sZW5ndGggPiAwKVxuXHRcdFx0dGhpcy5nZXRTdXBwb3J0cyh0aGlzLnBvaW50c1swXS5faWQsIDApO1xuXHR9XG5cdHJlbW92ZVN1cHBvcnQocG9pbnRJbmR4OiBudW1iZXIsIHN1cHBvcnRJbmR4OiBudW1iZXIpe1xuXHRcdHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10uc3BsaWNlKHN1cHBvcnRJbmR4LCAxKTtcblx0fVxuXHRnZXRTdXBwb3J0cyhwb2ludElkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpe1xuXHRcdGNvbnNvbGUubG9nKHBvaW50SWQsIGluZGV4KTtcblx0XHR0aGlzLl9zdXBwb3J0c1NlcnZpY2UuZ2V0U3VwcG9ydHMocG9pbnRJZClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnc3VwcG9ydHMnXSA9IGRhdGFcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHR2aWV3QWxsKGluZGV4OiBudW1iZXIpe1xuXHRcdGlmICh0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSl7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9ICEodGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSBmYWxzZTtcblx0fVxuXHRhZGRFdmlkZW5jZShpbmRleDogbnVtYmVyKXtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKSB7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gZmFsc2U7XG5cdH1cbn1cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
