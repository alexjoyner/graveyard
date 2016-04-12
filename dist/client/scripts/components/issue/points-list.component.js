System.register(['angular2/core', 'angular2/router', './main-point.component', './top-support.component', './more-support.component', '../../pipes/searchFilter.pipe', './add-support.component', './create-point-form.component', '../../shared/smooth-scroll.service', '../../shared/window.service'], function(exports_1, context_1) {
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
    var core_1, router_1, main_point_component_1, top_support_component_1, more_support_component_1, searchFilter_pipe_1, add_support_component_1, create_point_form_component_1, smooth_scroll_service_1, window_service_1;
    var PointsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                function PointsListComponent(_routeParams, _smoothScroll) {
                    this._routeParams = _routeParams;
                    this._smoothScroll = _smoothScroll;
                    this.type = this._routeParams.get('type');
                }
                ;
                PointsListComponent.prototype.getPostIndx = function (point) {
                    return this.points.indexOf(point);
                };
                PointsListComponent.prototype.onPointAdded = function (point) {
                    var _this = this;
                    console.log('New point: ', point);
                    point['supports'] = [null];
                    this.points.unshift(point);
                    setTimeout(function () {
                        _this.addEvidence(point);
                        _this.smoothScroll('point' + 0, 20);
                    }, 600);
                };
                PointsListComponent.prototype.addSupport = function (pointIndx, supportPost) {
                    this.points[pointIndx]['supports'].unshift(supportPost);
                    this.viewAll(pointIndx);
                };
                PointsListComponent.prototype.removePoint = function (pointIndx) {
                    this.points.splice(pointIndx, 1);
                };
                PointsListComponent.prototype.removeSupport = function (point, supportIndx) {
                    var pointIndx = this.getPostIndx(point);
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
                    var index = this.getPostIndx(point);
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
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], PointsListComponent.prototype, "points", void 0);
                PointsListComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-points-list',
                        templateUrl: 'templates/issue/points-list.tpl.html',
                        styleUrls: ['styles/points-list.css'],
                        directives: [main_point_component_1.MainPointComponent, top_support_component_1.TopSupportComponent, more_support_component_1.MoreSupportComponent, add_support_component_1.AddSupportComponent, create_point_form_component_1.CreatePointFormComponent],
                        providers: [smooth_scroll_service_1.SmoothScroll, window_service_1.WINDOW_PROVIDERS],
                        pipes: [searchFilter_pipe_1.SearchFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, smooth_scroll_service_1.SmoothScroll])
                ], PointsListComponent);
                return PointsListComponent;
            }());
            exports_1("PointsListComponent", PointsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQU9DLDZCQUNTLFlBQXlCLEVBQ3pCLGFBQTJCO29CQUQzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTnBDLFNBQUksR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFPN0MsQ0FBQzs7Z0JBQ0QseUNBQVcsR0FBWCxVQUFZLEtBQVc7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRCwwQ0FBWSxHQUFaLFVBQWEsS0FBVztvQkFBeEIsaUJBUUM7b0JBUEEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDM0IsVUFBVSxDQUFDO3dCQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNULENBQUM7Z0JBQ0Qsd0NBQVUsR0FBVixVQUFXLFNBQWlCLEVBQUUsV0FBVztvQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FB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QUM1QixDQUFDOzt1Q0FBQTtnQkEwREYsMEJBQUM7WUFBRCxDQXpEQSxBQXlEQyxJQUFBO1lBekRELHFEQXlEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXN9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3QnO1xuaW1wb3J0IHtNYWluUG9pbnRDb21wb25lbnR9IGZyb20gJy4vbWFpbi1wb2ludC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb3BTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL3RvcC1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge01vcmVTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL21vcmUtc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hGaWx0ZXJQaXBlfSBmcm9tICcuLi8uLi9waXBlcy9zZWFyY2hGaWx0ZXIucGlwZSc7XG5pbXBvcnQge0FkZFN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vYWRkLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7Q3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50fSBmcm9tICcuL2NyZWF0ZS1wb2ludC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQge1Ntb290aFNjcm9sbH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Ntb290aC1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQge1dJTkRPV19QUk9WSURFUlN9IGZyb20gJy4uLy4uL3NoYXJlZC93aW5kb3cuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLXBvaW50cy1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9wb2ludHMtbGlzdC50cGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9wb2ludHMtbGlzdC5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbTWFpblBvaW50Q29tcG9uZW50LCBUb3BTdXBwb3J0Q29tcG9uZW50LCBNb3JlU3VwcG9ydENvbXBvbmVudCwgQWRkU3VwcG9ydENvbXBvbmVudCwgQ3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtTbW9vdGhTY3JvbGwsIFdJTkRPV19QUk9WSURFUlNdLFxuICAgIHBpcGVzOiBbU2VhcmNoRmlsdGVyUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgUG9pbnRzTGlzdENvbXBvbmVudHtcblx0c2hvd0Zvcm06IGJvb2xlYW47XG5cdEBJbnB1dCgpIHBvaW50czogUG9zdFtdO1xuXHR0eXBlOiBzdHJpbmcgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTs7XG5cdGlzc3VlSWQ6IHN0cmluZztcblx0c2VhcmNoVGV4dDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcyxcblx0XHRwcml2YXRlIF9zbW9vdGhTY3JvbGw6IFNtb290aFNjcm9sbCkgeyBcblx0fVxuXHRnZXRQb3N0SW5keChwb2ludDogUG9zdCk6IG51bWJlcntcblx0XHRyZXR1cm4gdGhpcy5wb2ludHMuaW5kZXhPZihwb2ludCk7XG5cdH1cblx0b25Qb2ludEFkZGVkKHBvaW50OiBQb3N0KXtcblx0XHRjb25zb2xlLmxvZygnTmV3IHBvaW50OiAnLCBwb2ludCk7XG5cdFx0cG9pbnRbJ3N1cHBvcnRzJ10gPSBbbnVsbF07XG5cdFx0dGhpcy5wb2ludHMudW5zaGlmdChwb2ludCk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmFkZEV2aWRlbmNlKHBvaW50KTtcblx0XHRcdHRoaXMuc21vb3RoU2Nyb2xsKCdwb2ludCcgKyAwLCAyMCk7XG5cdFx0fSwgNjAwKTtcblx0fVxuXHRhZGRTdXBwb3J0KHBvaW50SW5keDogbnVtYmVyLCBzdXBwb3J0UG9zdCl7XG5cdFx0dGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS51bnNoaWZ0KHN1cHBvcnRQb3N0KTtcblx0XHR0aGlzLnZpZXdBbGwocG9pbnRJbmR4KVxuXHR9XG5cdHJlbW92ZVBvaW50KHBvaW50SW5keDogbnVtYmVyKXtcblx0XHR0aGlzLnBvaW50cy5zcGxpY2UocG9pbnRJbmR4LCAxKTtcblx0fVxuXHRyZW1vdmVTdXBwb3J0KHBvaW50OiBQb3N0LCBzdXBwb3J0SW5keDogbnVtYmVyKXtcblx0XHRsZXQgcG9pbnRJbmR4ID0gdGhpcy5nZXRQb3N0SW5keChwb2ludCk7XG5cdFx0dGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS5zcGxpY2Uoc3VwcG9ydEluZHgsIDEpO1xuXHRcdGlmICh0aGlzLnBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddLmxlbmd0aCA9PT0gMSl7XG5cdFx0XHR0aGlzLnZpZXdBbGwocG9pbnRJbmR4KTtcblx0XHR9XG5cdH1cblx0dmlld0FsbChpbmRleDogbnVtYmVyKXtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10pe1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddKTtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gZmFsc2U7XG5cdH1cblx0YWRkRXZpZGVuY2UocG9pbnQ6IFBvc3QpIHtcblx0XHRsZXQgaW5kZXggPSB0aGlzLmdldFBvc3RJbmR4KHBvaW50KTtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKSB7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gZmFsc2U7XG5cdH1cblx0c21vb3RoU2Nyb2xsKGVpZCwgb2Zmc2V0OiBudW1iZXIpe1xuXHRcdHRoaXMuX3Ntb290aFNjcm9sbC5zbW9vdGhTY3JvbGwoZWlkLCBvZmZzZXQpO1xuXHR9XG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
