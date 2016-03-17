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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUtDLDZCQUNTLGNBQTZCLEVBQzdCLFlBQXlCLEVBQ3pCLGdCQUFpQztvQkFGakMsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUFJLENBQUM7Z0JBRS9DLHNDQUFRLEdBQVI7b0JBQUEsaUJBV0M7b0JBVkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUNwRCxTQUFTLENBQ1QsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksRUFBbEIsQ0FBa0IsRUFDMUIsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztvQkFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCx1Q0FBUyxHQUFUO29CQUNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFDRCx5Q0FBVyxHQUFYLFVBQVksT0FBZSxFQUFFLEtBQWE7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdFLENBQUM7Z0JBQ0QscUNBQU8sR0FBUCxVQUFRLEtBQWE7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3RDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0QseUNBQVcsR0FBWCxVQUFZLEtBQWE7b0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQzFFLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzFDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBNUNEO29CQUFDLFlBQUssQ0FBQyxVQUFVLENBQUM7O3FFQUFBO2dCQVZuQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSwyQ0FBbUIsRUFBRSw2Q0FBb0IsRUFBRSwyQ0FBbUIsRUFBRSxzREFBd0IsQ0FBQzt3QkFDMUgsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQzt3QkFDNUIsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQ3pCLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekIsQ0FBQzs7dUNBQUE7Z0JBK0NGLDBCQUFDO1lBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtZQTlDRCxxREE4Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL3BvaW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludC50cyc7XG5pbXBvcnQge01haW5Qb2ludENvbXBvbmVudH0gZnJvbSAnLi9tYWluLXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1RvcFN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vdG9wLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7TW9yZVN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vbW9yZS1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclBpcGV9IGZyb20gJy4uLy4uL3BpcGVzL3NlYXJjaEZpbHRlci5waXBlJztcbmltcG9ydCB7QWRkU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi9hZGQtc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtDcmVhdGVQb2ludEZvcm1Db21wb25lbnR9IGZyb20gJy4vY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tcG9pbnRzLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL3BvaW50cy1saXN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9wb2ludHMtbGlzdC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTWFpblBvaW50Q29tcG9uZW50LCBUb3BTdXBwb3J0Q29tcG9uZW50LCBNb3JlU3VwcG9ydENvbXBvbmVudCwgQWRkU3VwcG9ydENvbXBvbmVudCwgQ3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtTdXBwb3J0c1NlcnZpY2VdLFxuICAgIHBpcGVzOiBbU2VhcmNoRmlsdGVyUGlwZV0sXG4gICAgaW5wdXRzOiBbJ3NlYXJjaFRleHQnXVxufSlcbmV4cG9ydCBjbGFzcyBQb2ludHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoJ3Nob3dGb3JtJykgc2hvd0Zvcm06IGJvb2xlYW47XG5cdHBvaW50czogUG9pbnRbXTtcblx0dHlwZTogc3RyaW5nO1xuXHRpc3N1ZUlkOiBzdHJpbmc7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3N1cHBvcnRzU2VydmljZTogU3VwcG9ydHNTZXJ2aWNlKSB7IH1cblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0Y29uc29sZS5sb2coJ2dldHRpbmcnKTtcblx0XHR0aGlzLmlzc3VlSWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cdFx0dGhpcy50eXBlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCd0eXBlJyk7XG5cdFx0dGhpcy5fcG9pbnRzU2VydmljZS5nZXRQb2ludHModGhpcy5pc3N1ZUlkLCB0aGlzLnR5cGUpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHRoaXMucG9pbnRzID0gZGF0YSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnI6ICcsIGVycilcblx0XHRcdCk7XG5cdFx0aWYgKHRoaXMucG9pbnRzICYmIHRoaXMucG9pbnRzLmxlbmd0aCA+IDApXG5cdFx0XHR0aGlzLmdldFN1cHBvcnRzKHRoaXMucG9pbnRzWzBdLl9pZCwgMCk7XG5cdH1cblxuXHRvblJlbW92ZWQoKXtcblx0XHR0aGlzLm5nT25Jbml0KCk7XG5cdH1cblx0Z2V0U3VwcG9ydHMocG9pbnRJZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKXtcblx0XHRjb25zb2xlLmxvZyhwb2ludElkLCBpbmRleCk7XG5cdFx0dGhpcy5wb2ludHNbaW5kZXhdWydzdXBwb3J0cyddID0gdGhpcy5fc3VwcG9ydHNTZXJ2aWNlLmdldFN1cHBvcnRzKHBvaW50SWQpO1xuXHR9XG5cdHZpZXdBbGwoaW5kZXg6IG51bWJlcil7XG5cdFx0aWYgKHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddKXtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gISh0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IGZhbHNlO1xuXHR9XG5cdGFkZEV2aWRlbmNlKGluZGV4OiBudW1iZXIpe1xuXHRcdGlmICh0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10pIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9ICEodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSBmYWxzZTtcblx0fVxufVxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
