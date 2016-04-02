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
                    this._supportsService.getSupports(point._id)
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
                        styleUrls: ['styles/points-list.css'],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBZ0pBO1FBQ0ksaUNBQWlDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5Qyx1Q0FBdUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUMvRCxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDOUMsK0JBQStCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0Qsc0JBQXNCLEdBQUc7UUFDckIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3RCxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6QixDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE5SUQ7Z0JBUUMsNkJBQ1MsY0FBNkIsRUFDN0IsWUFBeUIsRUFDekIsZ0JBQWlDLEVB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LEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDNUIsQ0FBQzs7dUNBQUE7Z0JBMkhGLDBCQUFDO1lBQUQsQ0ExSEEsQUEwSEMsSUFBQTtZQTFIRCxxREEwSEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL3BvaW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7V0lORE9XLCBXSU5ET1dfUFJPVklERVJTfSBmcm9tICcuLi8uLi9zaGFyZWQvd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50LnRzJztcbmltcG9ydCB7TWFpblBvaW50Q29tcG9uZW50fSBmcm9tICcuL21haW4tcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7VG9wU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi90b3Atc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtNb3JlU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi9tb3JlLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoRmlsdGVyUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUnO1xuaW1wb3J0IHtBZGRTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL2FkZC1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NyZWF0ZVBvaW50Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9jcmVhdGUtcG9pbnQtZm9ybS5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1wb2ludHMtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvcG9pbnRzLWxpc3QudHBsLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvcG9pbnRzLWxpc3QuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW01haW5Qb2ludENvbXBvbmVudCwgVG9wU3VwcG9ydENvbXBvbmVudCwgTW9yZVN1cHBvcnRDb21wb25lbnQsIEFkZFN1cHBvcnRDb21wb25lbnQsIENyZWF0ZVBvaW50Rm9ybUNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbU3VwcG9ydHNTZXJ2aWNlLCBXSU5ET1dfUFJPVklERVJTXSxcbiAgICBwaXBlczogW1NlYXJjaEZpbHRlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIFBvaW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHNob3dGb3JtOiBib29sZWFuO1xuXHRwb2ludHM6IFBvaW50W107XG5cdHR5cGU6IHN0cmluZztcblx0aXNzdWVJZDogc3RyaW5nO1xuXHR3aW46IFdpbmRvdztcblx0c2VhcmNoVGV4dDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3N1cHBvcnRzU2VydmljZTogU3VwcG9ydHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3dpbjogV0lORE9XKSB7IFxuXHR9XG5cblx0bmdPbkluaXQoKTogYW55IHtcblx0XHR0aGlzLndpbiA9IHRoaXMuX3dpbi5uYXRpdmVXaW5kb3c7XG5cdFx0Y29uc29sZS5sb2coJ1dpbmRvdzogJywgdGhpcy53aW4pO1xuXHRcdHRoaXMuaXNzdWVJZCA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKTtcblx0XHR0aGlzLnR5cGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHR0aGlzLl9wb2ludHNTZXJ2aWNlLmdldFBvaW50cyh0aGlzLmlzc3VlSWQsIHRoaXMudHlwZSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdHRoaXMucG9pbnRzID0gZGF0YVxuXHRcdFx0XHRcdGlmICh0aGlzLnBvaW50cyAmJiB0aGlzLnBvaW50cy5sZW5ndGggPiAwKXtcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRTdXBwb3J0cyh0aGlzLnBvaW50c1swXSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdldFN1cHBvcnRzKHRoaXMucG9pbnRzWzFdLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0U3VwcG9ydHModGhpcy5wb2ludHNbMl0sIGZhbHNlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2VycjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHRnZXRQb2ludEluZHgocG9pbnQ6IFBvaW50KTogbnVtYmVye1xuXHRcdHJldHVybiB0aGlzLnBvaW50cy5pbmRleE9mKHBvaW50KTtcblx0fVxuXHRvblBvaW50QWRkZWQocG9pbnQ6IFBvaW50KXtcblx0XHR0aGlzLnBvaW50cy51bnNoaWZ0KHBvaW50KTtcblx0XHR0aGlzLmdldFN1cHBvcnRzKHRoaXMucG9pbnRzWzBdLCB0cnVlKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuc21vb3RoU2Nyb2xsKCdwb2ludCcgKyAwLCAyMClcblx0XHR9LCA5MDApO1xuXHR9XG5cdHJlbW92ZVN1cHBvcnQocG9pbnQ6IFBvaW50LCBzdXBwb3J0SW5keDogbnVtYmVyKXtcblx0XHRsZXQgcG9pbnRJbmR4ID0gdGhpcy5nZXRQb2ludEluZHgocG9pbnQpO1xuXHRcdHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10uc3BsaWNlKHN1cHBvcnRJbmR4LCAxKTtcblx0XHRpZiAodGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS5sZW5ndGggPT09IDEpe1xuXHRcdFx0dGhpcy52aWV3QWxsKHBvaW50SW5keCk7XG5cdFx0fVxuXHR9XG5cdGdldFN1cHBvcnRzKHBvaW50OiBQb2ludCwgc2hvd0FsbDogYm9vbGVhbil7XG5cdFx0bGV0IGluZGV4ID0gdGhpcy5nZXRQb2ludEluZHgocG9pbnQpO1xuXHRcdHRoaXMuX3N1cHBvcnRzU2VydmljZS5nZXRTdXBwb3J0cyhwb2ludC5faWQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3N1cHBvcnRzJ10gPSBkYXRhO1xuXHRcdFx0XHRcdGlmIChzaG93QWxsKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5sZW5ndGggJiYgZGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFdpbGwgc2hvdyB2aWV3IGFsbFxuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZXdBbGwoaW5kZXgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gV2lsbCBjbG9zZSBhZGQgZXZpZGVuY2Vcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRFdmlkZW5jZShpbmRleCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG5cdHZpZXdBbGwoaW5kZXg6IG51bWJlcil7XG5cdFx0aWYgKHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddKXtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gISh0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IGZhbHNlO1xuXHR9XG5cdGFkZEV2aWRlbmNlKHBvaW50OiBQb2ludCkge1xuXHRcdGxldCBpbmRleCA9IHRoaXMuZ2V0UG9pbnRJbmR4KHBvaW50KTtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKSB7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gZmFsc2U7XG5cdH1cblx0c2Nyb2xsVG8oeVBvaW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMud2luLndpbmRvdy5zY3JvbGxUbygwLCB5UG9pbnQpXG5cdFx0fSwgZHVyYXRpb24pO1xuXHRcdHJldHVybjtcblx0fVxuXHRzbW9vdGhTY3JvbGwoZUlELCBvZmZzZXQ6IG51bWJlcikge1xuXHRcdHZhciBzdGFydFkgPSBjdXJyZW50WVBvc2l0aW9uKCk7XG5cdFx0dmFyIHN0b3BZID0gKGVsbVlQb3NpdGlvbihlSUQpIC0gb2Zmc2V0KTtcblx0XHR2YXIgZGlzdGFuY2UgPSBzdG9wWSA+IHN0YXJ0WSA/IHN0b3BZIC0gc3RhcnRZIDogc3RhcnRZIC0gc3RvcFk7XG5cdFx0aWYgKGRpc3RhbmNlIDwgMTAwKSB7XG5cdFx0XHR0aGlzLndpbi53aW5kb3cuc2Nyb2xsVG8oMCwgc3RvcFkpOyByZXR1cm47XG5cdFx0fVxuXHRcdGxldCB0aW1lc0ZhY3RvciA9IDI7XG5cdFx0dmFyIHNwZWVkID0gTWF0aC5yb3VuZChkaXN0YW5jZSAvICgxMDAqdGltZXNGYWN0b3IpKTtcblx0XHRpZiAoc3BlZWQgPj0gMjApIHNwZWVkID0gMjA7XG5cdFx0dmFyIHN0ZXAgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gMTAwKTtcblx0XHR2YXIgbGVhcFkgPSBzdG9wWSA+IHN0YXJ0WSA/IHN0YXJ0WSArIHN0ZXAgOiBzdGFydFkgLSBzdGVwO1xuXHRcdHZhciB0aW1lciA9IDA7XG5cdFx0Y29uc29sZS5sb2coJ3N0YXJ0WTogJywgc3RhcnRZKTtcblx0XHRjb25zb2xlLmxvZygnc3RvcFk6ICcsIHN0b3BZKTtcblx0XHRjb25zb2xlLmxvZygnZGlzdGFuY2U6ICcsIGRpc3RhbmNlKTtcblx0XHRjb25zb2xlLmxvZygnc3BlZWQ6ICcsIHNwZWVkKTtcblx0XHRpZiAoc3RvcFkgPiBzdGFydFkpIHtcblx0XHRcdGZvciAodmFyIGkgPSBzdGFydFk7IGkgPCBzdG9wWTsgaSArPSBzdGVwKSB7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsVG8obGVhcFksIHRpbWVyICogc3BlZWQpO1xuXHRcdFx0XHRsZWFwWSArPSBzdGVwOyBpZiAobGVhcFkgPiBzdG9wWSkgbGVhcFkgPSBzdG9wWTsgdGltZXIrKztcblx0XHRcdH0gcmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKHZhciBpID0gc3RhcnRZOyBpID4gc3RvcFk7IGkgLT0gc3RlcCkge1xuXHRcdFx0dGhpcy5zY3JvbGxUbyhsZWFwWSwgdGltZXIgKiBzcGVlZCk7XG5cdFx0XHRsZWFwWSAtPSBzdGVwOyBpZiAobGVhcFkgPCBzdG9wWSkgbGVhcFkgPSBzdG9wWTsgdGltZXIrKztcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gY3VycmVudFlQb3NpdGlvbigpIHtcbiAgICAvLyBGaXJlZm94LCBDaHJvbWUsIE9wZXJhLCBTYWZhcmlcbiAgICBpZiAoc2VsZi5wYWdlWU9mZnNldCkgcmV0dXJuIHNlbGYucGFnZVlPZmZzZXQ7XG4gICAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgNiAtIHN0YW5kYXJkcyBtb2RlXG4gICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA2LCA3IGFuZCA4XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKSByZXR1cm4gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgcmV0dXJuIDA7XG59XG5mdW5jdGlvbiBlbG1ZUG9zaXRpb24oZUlEKSB7XG4gICAgdmFyIGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVJRCk7XG4gICAgdmFyIHkgPSBlbG0ub2Zmc2V0VG9wO1xuICAgIHZhciBub2RlID0gZWxtO1xuICAgIHdoaWxlIChub2RlLm9mZnNldFBhcmVudCAmJiBub2RlLm9mZnNldFBhcmVudCAhPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcbiAgICAgICAgeSArPSBub2RlLm9mZnNldFRvcDtcbiAgICB9IHJldHVybiB5O1xufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
