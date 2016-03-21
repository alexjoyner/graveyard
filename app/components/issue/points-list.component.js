System.register(['angular2/core', 'angular2/router', '../../shared/points.service', '../../shared/supports.service', '../../shared/window.service', './main-point.component', './top-support.component', './more-support.component', '../../pipes/searchFilter.pipe', './add-support.component', './create-point-form.component'], function(exports_1, context_1) {
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
    var core_1, router_1, points_service_1, supports_service_1, window_service_1, main_point_component_1, top_support_component_1, more_support_component_1, searchFilter_pipe_1, add_support_component_1, create_point_form_component_1;
    var PointsListComponent;
    function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    }
    function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    }
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
            function (window_service_1_1) {
                window_service_1 = window_service_1_1;
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
                function PointsListComponent(_pointsService, _routeParams, _supportsService, _win) {
                    this._pointsService = _pointsService;
                    this._routeParams = _routeParams;
                    this._supportsService = _supportsService;
                    this._win = _win;
                }
                PointsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.win = this._win.nativeWindow;
                    console.log('Window: ', this.win);
                    this.issueId = this._routeParams.get('id');
                    this.type = this._routeParams.get('type');
                    this._pointsService.getPoints(this.issueId, this.type)
                        .subscribe(function (data) {
                        _this.points = data;
                        if (_this.points && _this.points.length > 0) {
                            _this.getSupports(0, false);
                            _this.getSupports(1, false);
                            _this.getSupports(2, false);
                        }
                    }, function (err) { return console.log('err: ', err); });
                    if (this.points && this.points.length > 0)
                        this.getSupports(0, true);
                };
                PointsListComponent.prototype.removeSupport = function (pointIndx, supportIndx) {
                    this.points[pointIndx]['supports'].splice(supportIndx, 1);
                };
                PointsListComponent.prototype.getSupports = function (index, showAll) {
                    var _this = this;
                    var pointId = this.points[index]._id;
                    this._supportsService.getSupports(pointId)
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
                                _this.addEvidence(index);
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
                PointsListComponent.prototype.addEvidence = function (index) {
                    if (this.points[index]['addEvidence']) {
                        this.points[index]['addEvidence'] = !(this.points[index]['addEvidence']);
                    }
                    else {
                        this.points[index]['addEvidence'] = true;
                    }
                    this.points[index]['viewAll'] = false;
                };
                PointsListComponent.prototype.scrollTo = function (yPoint, duration) {
                    var _this = this;
                    setTimeout(function () {
                        _this.win.window.scrollTo(0, yPoint);
                    }, duration);
                    return;
                };
                PointsListComponent.prototype.smoothScroll = function (eID, offset) {
                    var startY = currentYPosition();
                    var stopY = (elmYPosition(eID) - offset);
                    var distance = stopY > startY ? stopY - startY : startY - stopY;
                    if (distance < 100) {
                        this.win.window.scrollTo(0, stopY);
                        return;
                    }
                    var timesFactor = 2;
                    var speed = Math.round(distance / (100 * timesFactor));
                    if (speed >= 20)
                        speed = 20;
                    var step = Math.round(distance / 100);
                    var leapY = stopY > startY ? startY + step : startY - step;
                    var timer = 0;
                    console.log('startY: ', startY);
                    console.log('stopY: ', stopY);
                    console.log('distance: ', distance);
                    console.log('speed: ', speed);
                    if (stopY > startY) {
                        for (var i = startY; i < stopY; i += step) {
                            this.scrollTo(leapY, timer * speed);
                            leapY += step;
                            if (leapY > stopY)
                                leapY = stopY;
                            timer++;
                        }
                        return;
                    }
                    for (var i = startY; i > stopY; i -= step) {
                        this.scrollTo(leapY, timer * speed);
                        leapY -= step;
                        if (leapY < stopY)
                            leapY = stopY;
                        timer++;
                    }
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
                        providers: [supports_service_1.SupportsService, window_service_1.WINDOW_PROVIDERS],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe],
                        inputs: ['searchText']
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.RouteParams, supports_service_1.SupportsService, window_service_1.WINDOW])
                ], PointsListComponent);
                return PointsListComponent;
            }());
            exports_1("PointsListComponent", PointsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBbUlBO1FBQ0ksaUNBQWlDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5Qyx1Q0FBdUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUMvRCxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDOUMsK0JBQStCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0Qsc0JBQXNCLEdBQUc7UUFDckIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3RCxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6QixDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFoSUQ7Z0JBT0MsNkJBQ1MsY0FBNkIsRUFDN0IsWUFBeUIsRUFDekIsZ0JBQWlDLEVB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QUFHLEtBQUssQ0FBQzt3QkFBQyxLQUFLLEVBQUUsQ0FBQztvQkFDMUQsQ0FBQztnQkFDRixDQUFDO2dCQTFHRDtvQkFBQyxZQUFLLENBQUMsVUFBVSxDQUFDOztxRUFBQTtnQkFWbkI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsc0NBQXNDO3dCQUNuRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDdEMsVUFBVSxFQUFFLENBQUMseUNBQWtCLEVBQUUsMkNBQW1CLEVBQUUsNkNBQW9CLEVBQUUsMkNBQW1CLEVBQUUsc0RBQXdCLENBQUM7d0JBQzFILFNBQVMsRUFBRSxDQUFDLGtDQUFlLEVBQUUsaUNBQWdCLENBQUM7d0JBQzlDLEtBQUssRUFBRSxDQUFDLG9DQUFnQixDQUFDO3dCQUN6QixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7cUJBQ3pCLENBQUM7O3VDQUFBO2dCQTZHRiwwQkFBQztZQUFELENBNUdBLEFBNEdDLElBQUE7WUE1R0QscURBNEdDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9wb2ludHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7U3VwcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydHMuc2VydmljZSc7XG5pbXBvcnQge1dJTkRPVywgV0lORE9XX1BST1ZJREVSU30gZnJvbSAnLi4vLi4vc2hhcmVkL3dpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludC50cyc7XG5pbXBvcnQge01haW5Qb2ludENvbXBvbmVudH0gZnJvbSAnLi9tYWluLXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1RvcFN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vdG9wLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7TW9yZVN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vbW9yZS1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclBpcGV9IGZyb20gJy4uLy4uL3BpcGVzL3NlYXJjaEZpbHRlci5waXBlJztcbmltcG9ydCB7QWRkU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi9hZGQtc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtDcmVhdGVQb2ludEZvcm1Db21wb25lbnR9IGZyb20gJy4vY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tcG9pbnRzLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL3BvaW50cy1saXN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9wb2ludHMtbGlzdC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTWFpblBvaW50Q29tcG9uZW50LCBUb3BTdXBwb3J0Q29tcG9uZW50LCBNb3JlU3VwcG9ydENvbXBvbmVudCwgQWRkU3VwcG9ydENvbXBvbmVudCwgQ3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtTdXBwb3J0c1NlcnZpY2UsIFdJTkRPV19QUk9WSURFUlNdLFxuICAgIHBpcGVzOiBbU2VhcmNoRmlsdGVyUGlwZV0sXG4gICAgaW5wdXRzOiBbJ3NlYXJjaFRleHQnXVxufSlcbmV4cG9ydCBjbGFzcyBQb2ludHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoJ3Nob3dGb3JtJykgc2hvd0Zvcm06IGJvb2xlYW47XG5cdHBvaW50czogUG9pbnRbXTtcblx0dHlwZTogc3RyaW5nO1xuXHRpc3N1ZUlkOiBzdHJpbmc7XG5cdHdpbjogV2luZG93O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3N1cHBvcnRzU2VydmljZTogU3VwcG9ydHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3dpbjogV0lORE9XKSB7IFxuXHR9XG5cblx0bmdPbkluaXQoKTogYW55IHtcblx0XHR0aGlzLndpbiA9IHRoaXMuX3dpbi5uYXRpdmVXaW5kb3c7XG5cdFx0Y29uc29sZS5sb2coJ1dpbmRvdzogJywgdGhpcy53aW4pO1xuXHRcdHRoaXMuaXNzdWVJZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0XHR0aGlzLnR5cGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHR0aGlzLl9wb2ludHNTZXJ2aWNlLmdldFBvaW50cyh0aGlzLmlzc3VlSWQsIHRoaXMudHlwZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdHRoaXMucG9pbnRzID0gZGF0YVxuXHRcdFx0XHRcdGlmICh0aGlzLnBvaW50cyAmJiB0aGlzLnBvaW50cy5sZW5ndGggPiAwKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRTdXBwb3J0cygwLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0U3VwcG9ydHMoMSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdldFN1cHBvcnRzKDIsIGZhbHNlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2VycjogJywgZXJyKVxuXHRcdFx0KTtcblx0XHRpZiAodGhpcy5wb2ludHMgJiYgdGhpcy5wb2ludHMubGVuZ3RoID4gMClcblx0XHRcdHRoaXMuZ2V0U3VwcG9ydHMoMCwgdHJ1ZSk7XG5cdH1cblx0cmVtb3ZlU3VwcG9ydChwb2ludEluZHg6IG51bWJlciwgc3VwcG9ydEluZHg6IG51bWJlcil7XG5cdFx0dGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS5zcGxpY2Uoc3VwcG9ydEluZHgsIDEpO1xuXHR9XG5cdGdldFN1cHBvcnRzKGluZGV4OiBudW1iZXIsIHNob3dBbGw6IGJvb2xlYW4pe1xuXHRcdGxldCBwb2ludElkID0gdGhpcy5wb2ludHNbaW5kZXhdLl9pZDtcblx0XHR0aGlzLl9zdXBwb3J0c1NlcnZpY2UuZ2V0U3VwcG9ydHMocG9pbnRJZClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnc3VwcG9ydHMnXSA9IGRhdGE7XG5cdFx0XHRcdFx0aWYgKHNob3dBbGwpIHtcblx0XHRcdFx0XHRcdGlmIChkYXRhLmxlbmd0aCAmJiBkYXRhLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0Ly8gV2lsbCBzaG93IHZpZXcgYWxsXG5cdFx0XHRcdFx0XHRcdHRoaXMudmlld0FsbChpbmRleCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBXaWxsIGNsb3NlIGFkZCBldmlkZW5jZVxuXHRcdFx0XHRcdFx0XHR0aGlzLmFkZEV2aWRlbmNlKGluZGV4KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdCk7XG5cdH1cblx0dmlld0FsbChpbmRleDogbnVtYmVyKXtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10pe1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddKTtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gZmFsc2U7XG5cdH1cblx0YWRkRXZpZGVuY2UoaW5kZXg6IG51bWJlcil7XG5cdFx0aWYgKHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSkge1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gISh0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9IGZhbHNlO1xuXHR9XG5cdHNjcm9sbFRvKHlQb2ludDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLndpbi53aW5kb3cuc2Nyb2xsVG8oMCwgeVBvaW50KVxuXHRcdH0sIGR1cmF0aW9uKTtcblx0XHRyZXR1cm47XG5cdH1cblx0c21vb3RoU2Nyb2xsKGVJRCwgb2Zmc2V0OiBudW1iZXIpIHtcblx0XHR2YXIgc3RhcnRZID0gY3VycmVudFlQb3NpdGlvbigpO1xuXHRcdHZhciBzdG9wWSA9IChlbG1ZUG9zaXRpb24oZUlEKSAtIG9mZnNldCk7XG5cdFx0dmFyIGRpc3RhbmNlID0gc3RvcFkgPiBzdGFydFkgPyBzdG9wWSAtIHN0YXJ0WSA6IHN0YXJ0WSAtIHN0b3BZO1xuXHRcdGlmIChkaXN0YW5jZSA8IDEwMCkge1xuXHRcdFx0dGhpcy53aW4ud2luZG93LnNjcm9sbFRvKDAsIHN0b3BZKTsgcmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgdGltZXNGYWN0b3IgPSAyO1xuXHRcdHZhciBzcGVlZCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAoMTAwKnRpbWVzRmFjdG9yKSk7XG5cdFx0aWYgKHNwZWVkID49IDIwKSBzcGVlZCA9IDIwO1xuXHRcdHZhciBzdGVwID0gTWF0aC5yb3VuZChkaXN0YW5jZSAvIDEwMCk7XG5cdFx0dmFyIGxlYXBZID0gc3RvcFkgPiBzdGFydFkgPyBzdGFydFkgKyBzdGVwIDogc3RhcnRZIC0gc3RlcDtcblx0XHR2YXIgdGltZXIgPSAwO1xuXHRcdGNvbnNvbGUubG9nKCdzdGFydFk6ICcsIHN0YXJ0WSk7XG5cdFx0Y29uc29sZS5sb2coJ3N0b3BZOiAnLCBzdG9wWSk7XG5cdFx0Y29uc29sZS5sb2coJ2Rpc3RhbmNlOiAnLCBkaXN0YW5jZSk7XG5cdFx0Y29uc29sZS5sb2coJ3NwZWVkOiAnLCBzcGVlZCk7XG5cdFx0aWYgKHN0b3BZID4gc3RhcnRZKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gc3RhcnRZOyBpIDwgc3RvcFk7IGkgKz0gc3RlcCkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbFRvKGxlYXBZLCB0aW1lciAqIHNwZWVkKTtcblx0XHRcdFx0bGVhcFkgKz0gc3RlcDsgaWYgKGxlYXBZID4gc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG5cdFx0XHR9IHJldHVybjtcblx0XHR9XG5cdFx0Zm9yICh2YXIgaSA9IHN0YXJ0WTsgaSA+IHN0b3BZOyBpIC09IHN0ZXApIHtcblx0XHRcdHRoaXMuc2Nyb2xsVG8obGVhcFksIHRpbWVyICogc3BlZWQpO1xuXHRcdFx0bGVhcFkgLT0gc3RlcDsgaWYgKGxlYXBZIDwgc3RvcFkpIGxlYXBZID0gc3RvcFk7IHRpbWVyKys7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGN1cnJlbnRZUG9zaXRpb24oKSB7XG4gICAgLy8gRmlyZWZveCwgQ2hyb21lLCBPcGVyYSwgU2FmYXJpXG4gICAgaWYgKHNlbGYucGFnZVlPZmZzZXQpIHJldHVybiBzZWxmLnBhZ2VZT2Zmc2V0O1xuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDYgLSBzdGFuZGFyZHMgbW9kZVxuICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiwgNyBhbmQgOFxuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIHJldHVybiAwO1xufVxuZnVuY3Rpb24gZWxtWVBvc2l0aW9uKGVJRCkge1xuICAgIHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlSUQpO1xuICAgIHZhciB5ID0gZWxtLm9mZnNldFRvcDtcbiAgICB2YXIgbm9kZSA9IGVsbTtcbiAgICB3aGlsZSAobm9kZS5vZmZzZXRQYXJlbnQgJiYgbm9kZS5vZmZzZXRQYXJlbnQgIT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgIHkgKz0gbm9kZS5vZmZzZXRUb3A7XG4gICAgfSByZXR1cm4geTtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
