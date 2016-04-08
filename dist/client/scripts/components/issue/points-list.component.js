System.register(['angular2/core', 'angular2/router', '../../shared/points.service', '../../shared/supports.service', './main-point.component', './top-support.component', './more-support.component', '../../pipes/searchFilter.pipe', './add-support.component', './create-point-form.component', '../../shared/smooth-scroll.service', '../../shared/window.service'], function(exports_1, context_1) {
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
    var core_1, router_1, points_service_1, supports_service_1, main_point_component_1, top_support_component_1, more_support_component_1, searchFilter_pipe_1, add_support_component_1, create_point_form_component_1, smooth_scroll_service_1, window_service_1;
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
            },
            function (smooth_scroll_service_1_1) {
                smooth_scroll_service_1 = smooth_scroll_service_1_1;
            },
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
            }],
        execute: function() {
            PointsListComponent = (function () {
                function PointsListComponent(_pointsService, _routeParams, _supportsService, _smoothScroll) {
                    this._pointsService = _pointsService;
                    this._routeParams = _routeParams;
                    this._supportsService = _supportsService;
                    this._smoothScroll = _smoothScroll;
                }
                PointsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // this.win = this._win.nativeWindow;
                    // console.log('Window: ', this.win);
                    this.issueId = this._routeParams.get('id');
                    this.type = this._routeParams.get('type');
                    this._pointsService.getPoints(this.issueId, this.type)
                        .subscribe(function (data) {
                        _this.points = data;
                        console.log('Data: ', data);
                    }, function (err) { return console.log('err: ', err); });
                };
                PointsListComponent.prototype.getPointIndx = function (point) {
                    return this.points.indexOf(point);
                };
                PointsListComponent.prototype.onPointAdded = function (point) {
                    var _this = this;
                    this.points.unshift(point);
                    setTimeout(function () {
                        _this.smoothScroll('point' + 0, 20);
                    }, 900);
                };
                PointsListComponent.prototype.removeSupport = function (point, supportIndx) {
                    var pointIndx = this.getPointIndx(point);
                    this.points[pointIndx]['supports'].splice(supportIndx, 1);
                    if (this.points[pointIndx]['supports'].length === 1) {
                        this.viewAll(pointIndx);
                    }
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
                PointsListComponent.prototype.addEvidence = function (point) {
                    var index = this.getPointIndx(point);
                    if (this.points[index]['addEvidence']) {
                        this.points[index]['addEvidence'] = !(this.points[index]['addEvidence']);
                    }
                    else {
                        this.points[index]['addEvidence'] = true;
                    }
                    this.points[index]['viewAll'] = false;
                };
                PointsListComponent.prototype.smoothScroll = function (eid, offset) {
                    this._smoothScroll.smoothScroll(eid, offset);
                };
                PointsListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-points-list',
                        templateUrl: 'templates/issue/points-list.tpl.html',
                        styleUrls: ['styles/points-list.css'],
                        directives: [main_point_component_1.MainPointComponent, top_support_component_1.TopSupportComponent, more_support_component_1.MoreSupportComponent, add_support_component_1.AddSupportComponent, create_point_form_component_1.CreatePointFormComponent],
                        providers: [supports_service_1.SupportsService, smooth_scroll_service_1.SmoothScroll, window_service_1.WINDOW_PROVIDERS],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.RouteParams, supports_service_1.SupportsService, smooth_scroll_service_1.SmoothScroll])
                ], PointsListComponent);
                return PointsListComponent;
            }());
            exports_1("PointsListComponent", PointsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQU9DLDZCQUNTLGNBQTZCLEVBQzdCLFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUNqQyxhQUEyQjtvQkFIM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztnQkFDcEMsQ0FBQztnQkFFRCxzQ0FBUSxHQUFSO29CQUFBLGlCQWNDO29CQWJBLHFDQUFxQztvQkFDckMscUNBQXFDO29CQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ3BELFNBQVMsQ0FDVCxVQUFBLElBQUk7d0JBQ0gsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7d0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUU3QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDaEMsQ0FBQztnQkFDSixDQUFDO2dCQUNELDBDQUFZLEdBQVosVUFBYSxLQUFZO29CQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FB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d0JBQzFILFNBQVMsRUFBRSxDQUFDLGtDQUFlLEVBQUUsb0NBQVksRUFBRSxpQ0FBZ0IsQ0FBQzt3QkFDNUQsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzVCLENBQUM7O3VDQUFBO2dCQWtFRiwwQkFBQztZQUFELENBakVBLEFBaUVDLElBQUE7WUFqRUQscURBaUVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9wb2ludHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXN9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7U3VwcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydHMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnQudHMnO1xuaW1wb3J0IHtNYWluUG9pbnRDb21wb25lbnR9IGZyb20gJy4vbWFpbi1wb2ludC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb3BTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL3RvcC1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge01vcmVTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL21vcmUtc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9zZWFyY2hGaWx0ZXIucGlwZSc7XG5pbXBvcnQge0FkZFN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vYWRkLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7Q3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50fSBmcm9tICcuL2NyZWF0ZS1wb2ludC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge1Ntb290aFNjcm9sbH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Ntb290aC1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQge1dJTkRPV19QUk9WSURFUlN9IGZyb20gJy4uLy4uL3NoYXJlZC93aW5kb3cuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXBvaW50cy1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9wb2ludHMtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9wb2ludHMtbGlzdC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTWFpblBvaW50Q29tcG9uZW50LCBUb3BTdXBwb3J0Q29tcG9uZW50LCBNb3JlU3VwcG9ydENvbXBvbmVudCwgQWRkU3VwcG9ydENvbXBvbmVudCwgQ3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtTdXBwb3J0c1NlcnZpY2UsIFNtb290aFNjcm9sbCwgV0lORE9XX1BST1ZJREVSU10sXG4gICAgcGlwZXM6IFtTZWFyY2hGaWx0ZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBQb2ludHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRzaG93Rm9ybTogYm9vbGVhbjtcblx0cG9pbnRzOiBQb2ludFtdO1xuXHR0eXBlOiBzdHJpbmc7XG5cdGlzc3VlSWQ6IHN0cmluZztcblx0c2VhcmNoVGV4dDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3N1cHBvcnRzU2VydmljZTogU3VwcG9ydHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3Ntb290aFNjcm9sbDogU21vb3RoU2Nyb2xsKSB7IFxuXHR9XG5cblx0bmdPbkluaXQoKTogYW55IHtcblx0XHQvLyB0aGlzLndpbiA9IHRoaXMuX3dpbi5uYXRpdmVXaW5kb3c7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1dpbmRvdzogJywgdGhpcy53aW4pO1xuXHRcdHRoaXMuaXNzdWVJZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0XHR0aGlzLnR5cGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHR0aGlzLl9wb2ludHNTZXJ2aWNlLmdldFBvaW50cyh0aGlzLmlzc3VlSWQsIHRoaXMudHlwZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdHRoaXMucG9pbnRzID0gZGF0YVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdEYXRhOiAnLCBkYXRhKTtcblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2VycjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHRnZXRQb2ludEluZHgocG9pbnQ6IFBvaW50KTogbnVtYmVye1xuXHRcdHJldHVybiB0aGlzLnBvaW50cy5pbmRleE9mKHBvaW50KTtcblx0fVxuXHRvblBvaW50QWRkZWQocG9pbnQ6IFBvaW50KXtcblx0XHR0aGlzLnBvaW50cy51bnNoaWZ0KHBvaW50KTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuc21vb3RoU2Nyb2xsKCdwb2ludCcgKyAwLCAyMClcblx0XHR9LCA5MDApO1xuXHR9XG5cdHJlbW92ZVN1cHBvcnQocG9pbnQ6IFBvaW50LCBzdXBwb3J0SW5keDogbnVtYmVyKXtcblx0XHRsZXQgcG9pbnRJbmR4ID0gdGhpcy5nZXRQb2ludEluZHgocG9pbnQpO1xuXHRcdHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10uc3BsaWNlKHN1cHBvcnRJbmR4LCAxKTtcblx0XHRpZiAodGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS5sZW5ndGggPT09IDEpe1xuXHRcdFx0dGhpcy52aWV3QWxsKHBvaW50SW5keCk7XG5cdFx0fVxuXHR9XG5cdHZpZXdBbGwoaW5kZXg6IG51bWJlcil7XG5cdFx0aWYgKHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddKXtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gISh0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IGZhbHNlO1xuXHR9XG5cdGFkZEV2aWRlbmNlKHBvaW50OiBQb2ludCkge1xuXHRcdGxldCBpbmRleCA9IHRoaXMuZ2V0UG9pbnRJbmR4KHBvaW50KTtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKSB7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gZmFsc2U7XG5cdH1cblx0c21vb3RoU2Nyb2xsKGVpZCwgb2Zmc2V0OiBudW1iZXIpe1xuXHRcdHRoaXMuX3Ntb290aFNjcm9sbC5zbW9vdGhTY3JvbGwoZWlkLCBvZmZzZXQpO1xuXHR9XG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
