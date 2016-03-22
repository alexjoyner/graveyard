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
                    this.points.unshift(point);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBb0lBO1FBQ0ksaUNBQWlDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM5Qyx1Q0FBdUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztZQUMvRCxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDOUMsK0JBQStCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0Qsc0JBQXNCLEdBQUc7UUFDckIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ3RCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3RCxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN6QixDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO1FBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFqSUQ7Z0JBT0MsNkJBQ1MsY0FBNkIsRUFDN0IsWUFBeUIsRUFDekIsZ0JBQWlDLEVB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QUFDO2dCQUNGLENBQUM7Z0JBM0dEO29CQUFDLFlBQUssQ0FBQyxVQUFVLENBQUM7O3FFQUFBO2dCQVZuQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSwyQ0FBbUIsRUFBRSw2Q0FBb0IsRUFBRSwyQ0FBbUIsRUFBRSxzREFBd0IsQ0FBQzt3QkFDMUgsU0FBUyxFQUFFLENBQUMsa0NBQWUsRUFBRSxpQ0FBZ0IsQ0FBQzt3QkFDOUMsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7d0JBQ3pCLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDekIsQ0FBQzs7dUNBQUE7Z0JBOEdGLDBCQUFDO1lBQUQsQ0E3R0EsQUE2R0MsSUFBQTtZQTdHRCxxREE2R0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL3BvaW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7V0lORE9XLCBXSU5ET1dfUFJPVklERVJTfSBmcm9tICcuLi8uLi9zaGFyZWQvd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50LnRzJztcbmltcG9ydCB7TWFpblBvaW50Q29tcG9uZW50fSBmcm9tICcuL21haW4tcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7VG9wU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi90b3Atc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtNb3JlU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi9tb3JlLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoRmlsdGVyUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUnO1xuaW1wb3J0IHtBZGRTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL2FkZC1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NyZWF0ZVBvaW50Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9jcmVhdGUtcG9pbnQtZm9ybS5jb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1wb2ludHMtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvcG9pbnRzLWxpc3QudHBsLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL3BvaW50cy1saXN0LmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtNYWluUG9pbnRDb21wb25lbnQsIFRvcFN1cHBvcnRDb21wb25lbnQsIE1vcmVTdXBwb3J0Q29tcG9uZW50LCBBZGRTdXBwb3J0Q29tcG9uZW50LCBDcmVhdGVQb2ludEZvcm1Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1N1cHBvcnRzU2VydmljZSwgV0lORE9XX1BST1ZJREVSU10sXG4gICAgcGlwZXM6IFtTZWFyY2hGaWx0ZXJQaXBlXSxcbiAgICBpbnB1dHM6IFsnc2VhcmNoVGV4dCddXG59KVxuZXhwb3J0IGNsYXNzIFBvaW50c0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgnc2hvd0Zvcm0nKSBzaG93Rm9ybTogYm9vbGVhbjtcblx0cG9pbnRzOiBQb2ludFtdO1xuXHR0eXBlOiBzdHJpbmc7XG5cdGlzc3VlSWQ6IHN0cmluZztcblx0d2luOiBXaW5kb3c7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfc3VwcG9ydHNTZXJ2aWNlOiBTdXBwb3J0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfd2luOiBXSU5ET1cpIHsgXG5cdH1cblxuXHRuZ09uSW5pdCgpOiBhbnkge1xuXHRcdHRoaXMud2luID0gdGhpcy5fd2luLm5hdGl2ZVdpbmRvdztcblx0XHRjb25zb2xlLmxvZygnV2luZG93OiAnLCB0aGlzLndpbik7XG5cdFx0dGhpcy5pc3N1ZUlkID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRcdHRoaXMudHlwZSA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRcdHRoaXMuX3BvaW50c1NlcnZpY2UuZ2V0UG9pbnRzKHRoaXMuaXNzdWVJZCwgdGhpcy50eXBlKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wb2ludHMgPSBkYXRhXG5cdFx0XHRcdFx0aWYgKHRoaXMucG9pbnRzICYmIHRoaXMucG9pbnRzLmxlbmd0aCA+IDApe1xuXHRcdFx0XHRcdFx0XHR0aGlzLmdldFN1cHBvcnRzKDAsIGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5nZXRTdXBwb3J0cygxLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0U3VwcG9ydHMoMiwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnZXJyOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG5cdG9uUG9pbnRBZGRlZChwb2ludDogUG9pbnQpe1xuXHRcdHRoaXMucG9pbnRzLnVuc2hpZnQocG9pbnQpO1xuXHR9XG5cdHJlbW92ZVN1cHBvcnQocG9pbnRJbmR4OiBudW1iZXIsIHN1cHBvcnRJbmR4OiBudW1iZXIpe1xuXHRcdHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10uc3BsaWNlKHN1cHBvcnRJbmR4LCAxKTtcblx0fVxuXHRnZXRTdXBwb3J0cyhpbmRleDogbnVtYmVyLCBzaG93QWxsOiBib29sZWFuKXtcblx0XHRsZXQgcG9pbnRJZCA9IHRoaXMucG9pbnRzW2luZGV4XS5faWQ7XG5cdFx0dGhpcy5fc3VwcG9ydHNTZXJ2aWNlLmdldFN1cHBvcnRzKHBvaW50SWQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3N1cHBvcnRzJ10gPSBkYXRhO1xuXHRcdFx0XHRcdGlmIChzaG93QWxsKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5sZW5ndGggJiYgZGF0YS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFdpbGwgc2hvdyB2aWV3IGFsbFxuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZXdBbGwoaW5kZXgpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gV2lsbCBjbG9zZSBhZGQgZXZpZGVuY2Vcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRFdmlkZW5jZShpbmRleCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG5cdHZpZXdBbGwoaW5kZXg6IG51bWJlcil7XG5cdFx0aWYgKHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddKXtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gISh0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSk7XG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IGZhbHNlO1xuXHR9XG5cdGFkZEV2aWRlbmNlKGluZGV4OiBudW1iZXIpe1xuXHRcdGlmICh0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10pIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9ICEodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSBmYWxzZTtcblx0fVxuXHRzY3JvbGxUbyh5UG9pbnQ6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy53aW4ud2luZG93LnNjcm9sbFRvKDAsIHlQb2ludClcblx0XHR9LCBkdXJhdGlvbik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHNtb290aFNjcm9sbChlSUQsIG9mZnNldDogbnVtYmVyKSB7XG5cdFx0dmFyIHN0YXJ0WSA9IGN1cnJlbnRZUG9zaXRpb24oKTtcblx0XHR2YXIgc3RvcFkgPSAoZWxtWVBvc2l0aW9uKGVJRCkgLSBvZmZzZXQpO1xuXHRcdHZhciBkaXN0YW5jZSA9IHN0b3BZID4gc3RhcnRZID8gc3RvcFkgLSBzdGFydFkgOiBzdGFydFkgLSBzdG9wWTtcblx0XHRpZiAoZGlzdGFuY2UgPCAxMDApIHtcblx0XHRcdHRoaXMud2luLndpbmRvdy5zY3JvbGxUbygwLCBzdG9wWSk7IHJldHVybjtcblx0XHR9XG5cdFx0bGV0IHRpbWVzRmFjdG9yID0gMjtcblx0XHR2YXIgc3BlZWQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlIC8gKDEwMCp0aW1lc0ZhY3RvcikpO1xuXHRcdGlmIChzcGVlZCA+PSAyMCkgc3BlZWQgPSAyMDtcblx0XHR2YXIgc3RlcCA9IE1hdGgucm91bmQoZGlzdGFuY2UgLyAxMDApO1xuXHRcdHZhciBsZWFwWSA9IHN0b3BZID4gc3RhcnRZID8gc3RhcnRZICsgc3RlcCA6IHN0YXJ0WSAtIHN0ZXA7XG5cdFx0dmFyIHRpbWVyID0gMDtcblx0XHRjb25zb2xlLmxvZygnc3RhcnRZOiAnLCBzdGFydFkpO1xuXHRcdGNvbnNvbGUubG9nKCdzdG9wWTogJywgc3RvcFkpO1xuXHRcdGNvbnNvbGUubG9nKCdkaXN0YW5jZTogJywgZGlzdGFuY2UpO1xuXHRcdGNvbnNvbGUubG9nKCdzcGVlZDogJywgc3BlZWQpO1xuXHRcdGlmIChzdG9wWSA+IHN0YXJ0WSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IHN0YXJ0WTsgaSA8IHN0b3BZOyBpICs9IHN0ZXApIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxUbyhsZWFwWSwgdGltZXIgKiBzcGVlZCk7XG5cdFx0XHRcdGxlYXBZICs9IHN0ZXA7IGlmIChsZWFwWSA+IHN0b3BZKSBsZWFwWSA9IHN0b3BZOyB0aW1lcisrO1xuXHRcdFx0fSByZXR1cm47XG5cdFx0fVxuXHRcdGZvciAodmFyIGkgPSBzdGFydFk7IGkgPiBzdG9wWTsgaSAtPSBzdGVwKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRvKGxlYXBZLCB0aW1lciAqIHNwZWVkKTtcblx0XHRcdGxlYXBZIC09IHN0ZXA7IGlmIChsZWFwWSA8IHN0b3BZKSBsZWFwWSA9IHN0b3BZOyB0aW1lcisrO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBjdXJyZW50WVBvc2l0aW9uKCkge1xuICAgIC8vIEZpcmVmb3gsIENocm9tZSwgT3BlcmEsIFNhZmFyaVxuICAgIGlmIChzZWxmLnBhZ2VZT2Zmc2V0KSByZXR1cm4gc2VsZi5wYWdlWU9mZnNldDtcbiAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciA2IC0gc3RhbmRhcmRzIG1vZGVcbiAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDYsIDcgYW5kIDhcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApIHJldHVybiBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGVsbVlQb3NpdGlvbihlSUQpIHtcbiAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZUlEKTtcbiAgICB2YXIgeSA9IGVsbS5vZmZzZXRUb3A7XG4gICAgdmFyIG5vZGUgPSBlbG07XG4gICAgd2hpbGUgKG5vZGUub2Zmc2V0UGFyZW50ICYmIG5vZGUub2Zmc2V0UGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuICAgICAgICB5ICs9IG5vZGUub2Zmc2V0VG9wO1xuICAgIH0gcmV0dXJuIHk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
