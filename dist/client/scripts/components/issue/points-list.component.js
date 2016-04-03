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
                        if (_this.points && _this.points.length > 0) {
                            _this.getSupports(_this.points[0], false);
                            _this.getSupports(_this.points[1], false);
                            _this.getSupports(_this.points[2], false);
                        }
                    }, function (err) { return console.log('err: ', err); });
                };
                PointsListComponent.prototype.getPointIndx = function (point) {
                    return this.points.indexOf(point);
                };
                PointsListComponent.prototype.onPointAdded = function (point) {
                    var _this = this;
                    this.points.unshift(point);
                    this.getSupports(this.points[0], true);
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
                PointsListComponent.prototype.getSupports = function (point, showAll) {
                    var _this = this;
                    var index = this.getPointIndx(point);
                    this._supportsService.getSupports(this.points[index]._id)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.points[index]['supports'] = data;
                        if (showAll) {
                            if (data.length && data.length > 1) {
                                // Will show view all
                                _this.viewAll(index);
                            }
                            else {
                                // Will close add evidence
                                _this.addEvidence(point);
                            }
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQU9DLDZCQUNTLGNBQTZCLEVBQzdCLFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUNqQyxhQUEyQjtvQkFIM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUNqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztnQkFDcEMsQ0FBQztnQkFFRCxzQ0FBUSxHQUFSO29CQUFBLGlCQWtCQztvQkFqQkEscUNBQXFDO29CQUNyQyxxQ0FBcUM7b0JBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDcEQsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTt3QkFDbEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDOzRCQUN6QyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBQ3hDLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENB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QztnQkFqR0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsc0NBQXNDO3dCQUNuRCxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDckMsVUFBVSxFQUFFLENBQUMseUNBQWtCLEVBQUUsMkNBQW1CLEVBQUUsNkNBQW9CLEVBQUUsMkNBQW1CLEVBQUUsc0RBQXdCLENBQUM7d0JBQzFILFNBQVMsRUFBRSxDQUFDLGtDQUFlLEVBQUUsb0NBQVksRUFBRSxpQ0FBZ0IsQ0FBQzt3QkFDNUQsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzVCLENBQUM7O3VDQUFBO2dCQTJGRiwwQkFBQztZQUFELENBMUZBLEFBMEZDLElBQUE7WUExRkQscURBMEZDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9wb2ludHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXN9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7U3VwcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydHMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnQudHMnO1xuaW1wb3J0IHtNYWluUG9pbnRDb21wb25lbnR9IGZyb20gJy4vbWFpbi1wb2ludC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb3BTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL3RvcC1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge01vcmVTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL21vcmUtc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9zZWFyY2hGaWx0ZXIucGlwZSc7XG5pbXBvcnQge0FkZFN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vYWRkLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7Q3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50fSBmcm9tICcuL2NyZWF0ZS1wb2ludC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge1Ntb290aFNjcm9sbH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Ntb290aC1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQge1dJTkRPV19QUk9WSURFUlN9IGZyb20gJy4uLy4uL3NoYXJlZC93aW5kb3cuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXBvaW50cy1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9wb2ludHMtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9wb2ludHMtbGlzdC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTWFpblBvaW50Q29tcG9uZW50LCBUb3BTdXBwb3J0Q29tcG9uZW50LCBNb3JlU3VwcG9ydENvbXBvbmVudCwgQWRkU3VwcG9ydENvbXBvbmVudCwgQ3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtTdXBwb3J0c1NlcnZpY2UsIFNtb290aFNjcm9sbCwgV0lORE9XX1BST1ZJREVSU10sXG4gICAgcGlwZXM6IFtTZWFyY2hGaWx0ZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBQb2ludHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRzaG93Rm9ybTogYm9vbGVhbjtcblx0cG9pbnRzOiBQb2ludFtdO1xuXHR0eXBlOiBzdHJpbmc7XG5cdGlzc3VlSWQ6IHN0cmluZztcblx0c2VhcmNoVGV4dDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3N1cHBvcnRzU2VydmljZTogU3VwcG9ydHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3Ntb290aFNjcm9sbDogU21vb3RoU2Nyb2xsKSB7IFxuXHR9XG5cblx0bmdPbkluaXQoKTogYW55IHtcblx0XHQvLyB0aGlzLndpbiA9IHRoaXMuX3dpbi5uYXRpdmVXaW5kb3c7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1dpbmRvdzogJywgdGhpcy53aW4pO1xuXHRcdHRoaXMuaXNzdWVJZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0XHR0aGlzLnR5cGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHR0aGlzLl9wb2ludHNTZXJ2aWNlLmdldFBvaW50cyh0aGlzLmlzc3VlSWQsIHRoaXMudHlwZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdHRoaXMucG9pbnRzID0gZGF0YVxuXHRcdFx0XHRcdGlmICh0aGlzLnBvaW50cyAmJiB0aGlzLnBvaW50cy5sZW5ndGggPiAwKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRTdXBwb3J0cyh0aGlzLnBvaW50c1swXSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdldFN1cHBvcnRzKHRoaXMucG9pbnRzWzFdLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0U3VwcG9ydHModGhpcy5wb2ludHNbMl0sIGZhbHNlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2VycjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHRnZXRQb2ludEluZHgocG9pbnQ6IFBvaW50KTogbnVtYmVye1xuXHRcdHJldHVybiB0aGlzLnBvaW50cy5pbmRleE9mKHBvaW50KTtcblx0fVxuXHRvblBvaW50QWRkZWQocG9pbnQ6IFBvaW50KXtcblx0XHR0aGlzLnBvaW50cy51bnNoaWZ0KHBvaW50KTtcblx0XHR0aGlzLmdldFN1cHBvcnRzKHRoaXMucG9pbnRzWzBdLCB0cnVlKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuc21vb3RoU2Nyb2xsKCdwb2ludCcgKyAwLCAyMClcblx0XHR9LCA5MDApO1xuXHR9XG5cdHJlbW92ZVN1cHBvcnQocG9pbnQ6IFBvaW50LCBzdXBwb3J0SW5keDogbnVtYmVyKXtcblx0XHRsZXQgcG9pbnRJbmR4ID0gdGhpcy5nZXRQb2ludEluZHgocG9pbnQpO1xuXHRcdHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10uc3BsaWNlKHN1cHBvcnRJbmR4LCAxKTtcblx0XHRpZiAodGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS5sZW5ndGggPT09IDEpe1xuXHRcdFx0dGhpcy52aWV3QWxsKHBvaW50SW5keCk7XG5cdFx0fVxuXHR9XG5cdGdldFN1cHBvcnRzKHBvaW50OiBQb2ludCwgc2hvd0FsbDogYm9vbGVhbil7XG5cdFx0bGV0IGluZGV4ID0gdGhpcy5nZXRQb2ludEluZHgocG9pbnQpO1xuXHRcdHRoaXMuX3N1cHBvcnRzU2VydmljZS5nZXRTdXBwb3J0cyh0aGlzLnBvaW50c1tpbmRleF0uX2lkKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWydzdXBwb3J0cyddID0gZGF0YTtcblx0XHRcdFx0XHRpZiAoc2hvd0FsbCkge1xuXHRcdFx0XHRcdFx0aWYgKGRhdGEubGVuZ3RoICYmIGRhdGEubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHQvLyBXaWxsIHNob3cgdmlldyBhbGxcblx0XHRcdFx0XHRcdFx0dGhpcy52aWV3QWxsKGluZGV4KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIFdpbGwgY2xvc2UgYWRkIGV2aWRlbmNlXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWRkRXZpZGVuY2UocG9pbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHR2aWV3QWxsKGluZGV4OiBudW1iZXIpe1xuXHRcdGlmICh0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSl7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9ICEodGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSBmYWxzZTtcblx0fVxuXHRhZGRFdmlkZW5jZShwb2ludDogUG9pbnQpIHtcblx0XHRsZXQgaW5kZXggPSB0aGlzLmdldFBvaW50SW5keChwb2ludCk7XG5cdFx0aWYgKHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSkge1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gISh0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9IGZhbHNlO1xuXHR9XG5cdHNtb290aFNjcm9sbChlaWQsIG9mZnNldDogbnVtYmVyKXtcblx0XHR0aGlzLl9zbW9vdGhTY3JvbGwuc21vb3RoU2Nyb2xsKGVpZCwgb2Zmc2V0KTtcblx0fVxufVxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
