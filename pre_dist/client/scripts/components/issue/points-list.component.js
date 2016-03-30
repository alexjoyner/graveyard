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
                };
                PointsListComponent.prototype.onPointAdded = function (point) {
                    var _this = this;
                    this.points.unshift(point);
                    this.getSupports(0, true);
                    setTimeout(function () {
                        _this.smoothScroll('point' + 0, 20);
                    }, 900);
                };
                PointsListComponent.prototype.removeSupport = function (pointIndx, supportIndx) {
                    this.points[pointIndx]['supports'].splice(supportIndx, 1);
                    if (this.points[pointIndx]['supports'].length === 1) {
                        this.viewAll(pointIndx);
                    }
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
                PointsListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-points-list',
                        templateUrl: 'templates/issue/points-list.tpl.html',
                        styleUrls: ['src/css/points-list.css'],
                        directives: [main_point_component_1.MainPointComponent, top_support_component_1.TopSupportComponent, more_support_component_1.MoreSupportComponent, add_support_component_1.AddSupportComponent, create_point_form_component_1.CreatePointFormComponent],
                        providers: [supports_service_1.SupportsService, window_service_1.WINDOW_PROVIDERS],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.RouteParams, supports_service_1.SupportsService, window_service_1.WINDOW])
                ], PointsListComponent);
                return PointsListComponent;
            }());
            exports_1("PointsListComponent", PointsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBMklBO1FBQ0ksaUNBQWlDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5Qyx1Q0FBdUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUMvRCxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDOUMsK0JBQStCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0Qsc0JBQXNCLEdBQUc7UUFDckIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3RCxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6QixDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF6SUQ7Z0JBUUMsNkJBQ1MsY0FBNkIsRUFDN0IsWUFBeUIsRUFDekIsZ0JBQWlDLEVB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QUssRUFBRSxDQUFDO3dCQUMxRCxDQUFDO3dCQUFDLE1BQU0sQ0FBQztvQkFDVixDQUFDO29CQUNELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO3dCQUNwQyxLQUFLLElBQUksSUFBSSxDQUFDO3dCQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7NEJBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFBQyxLQUFLLEVBQUUsQ0FBQztvQkFDMUQsQ0FBQztnQkFDRixDQUFDO2dCQTVIRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSwyQ0FBbUIsRUFBRSw2Q0FBb0IsRUFBRSwyQ0FBbUIsRUFBRSxzREFBd0IsQ0FBQzt3QkFDMUgsU0FBUyxFQUFFLENBQUMsa0NBQWUsRUFBRSxpQ0FBZ0IsQ0FBQzt3QkFDOUMsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzVCLENBQUM7O3VDQUFBO2dCQXNIRiwwQkFBQztZQUFELENBckhBLEFBcUhDLElBQUE7WUFySEQscURBcUhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9wb2ludHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7U3VwcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydHMuc2VydmljZSc7XG5pbXBvcnQge1dJTkRPVywgV0lORE9XX1BST1ZJREVSU30gZnJvbSAnLi4vLi4vc2hhcmVkL3dpbmRvdy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludC50cyc7XG5pbXBvcnQge01haW5Qb2ludENvbXBvbmVudH0gZnJvbSAnLi9tYWluLXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1RvcFN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vdG9wLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7TW9yZVN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vbW9yZS1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclBpcGV9IGZyb20gJy4uLy4uL3BpcGVzL3NlYXJjaEZpbHRlci5waXBlJztcbmltcG9ydCB7QWRkU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi9hZGQtc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtDcmVhdGVQb2ludEZvcm1Db21wb25lbnR9IGZyb20gJy4vY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tcG9pbnRzLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL3BvaW50cy1saXN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9wb2ludHMtbGlzdC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTWFpblBvaW50Q29tcG9uZW50LCBUb3BTdXBwb3J0Q29tcG9uZW50LCBNb3JlU3VwcG9ydENvbXBvbmVudCwgQWRkU3VwcG9ydENvbXBvbmVudCwgQ3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtTdXBwb3J0c1NlcnZpY2UsIFdJTkRPV19QUk9WSURFUlNdLFxuICAgIHBpcGVzOiBbU2VhcmNoRmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgUG9pbnRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0c2hvd0Zvcm06IGJvb2xlYW47XG5cdHBvaW50czogUG9pbnRbXTtcblx0dHlwZTogc3RyaW5nO1xuXHRpc3N1ZUlkOiBzdHJpbmc7XG5cdHdpbjogV2luZG93O1xuXHRzZWFyY2hUZXh0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfc3VwcG9ydHNTZXJ2aWNlOiBTdXBwb3J0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfd2luOiBXSU5ET1cpIHsgXG5cdH1cblxuXHRuZ09uSW5pdCgpOiBhbnkge1xuXHRcdHRoaXMud2luID0gdGhpcy5fd2luLm5hdGl2ZVdpbmRvdztcblx0XHRjb25zb2xlLmxvZygnV2luZG93OiAnLCB0aGlzLndpbik7XG5cdFx0dGhpcy5pc3N1ZUlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRcdHRoaXMudHlwZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRcdHRoaXMuX3BvaW50c1NlcnZpY2UuZ2V0UG9pbnRzKHRoaXMuaXNzdWVJZCwgdGhpcy50eXBlKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wb2ludHMgPSBkYXRhXG5cdFx0XHRcdFx0aWYgKHRoaXMucG9pbnRzICYmIHRoaXMucG9pbnRzLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdldFN1cHBvcnRzKDAsIGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRTdXBwb3J0cygxLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0U3VwcG9ydHMoMiwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG5cdG9uUG9pbnRBZGRlZChwb2ludDogUG9pbnQpe1xuXHRcdHRoaXMucG9pbnRzLnVuc2hpZnQocG9pbnQpO1xuXHRcdHRoaXMuZ2V0U3VwcG9ydHMoMCwgdHJ1ZSk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnNtb290aFNjcm9sbCgncG9pbnQnICsgMCwgMjApXG5cdFx0fSwgOTAwKTtcblx0fVxuXHRyZW1vdmVTdXBwb3J0KHBvaW50SW5keDogbnVtYmVyLCBzdXBwb3J0SW5keDogbnVtYmVyKXtcblx0XHR0aGlzLnBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddLnNwbGljZShzdXBwb3J0SW5keCwgMSk7XG5cdFx0aWYgKHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10ubGVuZ3RoID09PSAxKXtcblx0XHRcdHRoaXMudmlld0FsbChwb2ludEluZHgpO1xuXHRcdH1cblx0fVxuXHRnZXRTdXBwb3J0cyhpbmRleDogbnVtYmVyLCBzaG93QWxsOiBib29sZWFuKXtcblx0XHRsZXQgcG9pbnRJZCA9IHRoaXMucG9pbnRzW2luZGV4XS5faWQ7XG5cdFx0dGhpcy5fc3VwcG9ydHNTZXJ2aWNlLmdldFN1cHBvcnRzKHBvaW50SWQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3N1cHBvcnRzJ10gPSBkYXRhO1xuXHRcdFx0XHRcdGlmIChzaG93QWxsKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5sZW5ndGggJiYgZGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFdpbGwgc2hvdyB2aWV3IGFsbFxuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZXdBbGwoaW5kZXgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gV2lsbCBjbG9zZSBhZGQgZXZpZGVuY2Vcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRFdmlkZW5jZShpbmRleCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG5cdHZpZXdBbGwoaW5kZXg6IG51bWJlcil7XG5cdFx0aWYgKHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddKXtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gISh0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IGZhbHNlO1xuXHR9XG5cdGFkZEV2aWRlbmNlKGluZGV4OiBudW1iZXIpe1xuXHRcdGlmICh0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10pIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9ICEodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSBmYWxzZTtcblx0fVxuXHRzY3JvbGxUbyh5UG9pbnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy53aW4ud2luZG93LnNjcm9sbFRvKDAsIHlQb2ludClcblx0XHR9LCBkdXJhdGlvbik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHNtb290aFNjcm9sbChlSUQsIG9mZnNldDogbnVtYmVyKSB7XG5cdFx0dmFyIHN0YXJ0WSA9IGN1cnJlbnRZUG9zaXRpb24oKTtcblx0XHR2YXIgc3RvcFkgPSAoZWxtWVBvc2l0aW9uKGVJRCkgLSBvZmZzZXQpO1xuXHRcdHZhciBkaXN0YW5jZSA9IHN0b3BZID4gc3RhcnRZID8gc3RvcFkgLSBzdGFydFkgOiBzdGFydFkgLSBzdG9wWTtcblx0XHRpZiAoZGlzdGFuY2UgPCAxMDApIHtcblx0XHRcdHRoaXMud2luLndpbmRvdy5zY3JvbGxUbygwLCBzdG9wWSk7IHJldHVybjtcblx0XHR9XG5cdFx0bGV0IHRpbWVzRmFjdG9yID0gMjtcblx0XHR2YXIgc3BlZWQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gKDEwMCp0aW1lc0ZhY3RvcikpO1xuXHRcdGlmIChzcGVlZCA+PSAyMCkgc3BlZWQgPSAyMDtcblx0XHR2YXIgc3RlcCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAxMDApO1xuXHRcdHZhciBsZWFwWSA9IHN0b3BZID4gc3RhcnRZID8gc3RhcnRZICsgc3RlcCA6IHN0YXJ0WSAtIHN0ZXA7XG5cdFx0dmFyIHRpbWVyID0gMDtcblx0XHRjb25zb2xlLmxvZygnc3RhcnRZOiAnLCBzdGFydFkpO1xuXHRcdGNvbnNvbGUubG9nKCdzdG9wWTogJywgc3RvcFkpO1xuXHRcdGNvbnNvbGUubG9nKCdkaXN0YW5jZTogJywgZGlzdGFuY2UpO1xuXHRcdGNvbnNvbGUubG9nKCdzcGVlZDogJywgc3BlZWQpO1xuXHRcdGlmIChzdG9wWSA+IHN0YXJ0WSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IHN0YXJ0WTsgaSA8IHN0b3BZOyBpICs9IHN0ZXApIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxUbyhsZWFwWSwgdGltZXIgKiBzcGVlZCk7XG5cdFx0XHRcdGxlYXBZICs9IHN0ZXA7IGlmIChsZWFwWSA+IHN0b3BZKSBsZWFwWSA9IHN0b3BZOyB0aW1lcisrO1xuXHRcdFx0fSByZXR1cm47XG5cdFx0fVxuXHRcdGZvciAodmFyIGkgPSBzdGFydFk7IGkgPiBzdG9wWTsgaSAtPSBzdGVwKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRvKGxlYXBZLCB0aW1lciAqIHNwZWVkKTtcblx0XHRcdGxlYXBZIC09IHN0ZXA7IGlmIChsZWFwWSA8IHN0b3BZKSBsZWFwWSA9IHN0b3BZOyB0aW1lcisrO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBjdXJyZW50WVBvc2l0aW9uKCkge1xuICAgIC8vIEZpcmVmb3gsIENocm9tZSwgT3BlcmEsIFNhZmFyaVxuICAgIGlmIChzZWxmLnBhZ2VZT2Zmc2V0KSByZXR1cm4gc2VsZi5wYWdlWU9mZnNldDtcbiAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA2IC0gc3RhbmRhcmRzIG1vZGVcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDYsIDcgYW5kIDhcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHJldHVybiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGVsbVlQb3NpdGlvbihlSUQpIHtcbiAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcbiAgICB2YXIgeSA9IGVsbS5vZmZzZXRUb3A7XG4gICAgdmFyIG5vZGUgPSBlbG07XG4gICAgd2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuICAgICAgICB5ICs9IG5vZGUub2Zmc2V0VG9wO1xuICAgIH0gcmV0dXJuIHk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
