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
                    switch (supportPost.point_type_id) {
                        case 3:
                            supportPost['point_type'] = 'proof';
                            break;
                        case 4:
                            supportPost['point_type'] = 'disproof';
                            break;
                    }
                    switch (supportPost.source_type_id) {
                        case 1:
                            supportPost['source_type'] = 'meta';
                            break;
                        case 2:
                            supportPost['source_type'] = 'credible';
                            break;
                        case 3:
                            supportPost['source_type'] = 'web';
                            break;
                        case 4:
                            supportPost['source_type'] = 'media';
                            break;
                        case 5:
                            supportPost['source_type'] = 'opinion';
                            break;
                        case 6:
                            supportPost['source_type'] = 'other';
                            break;
                        default:
                            supportPost['source_type'] = 'opinion';
                            break;
                    }
                    if (this.points[pointIndx]['supports'][0] === null) {
                        this.points[pointIndx]['supports'][0] = supportPost;
                    }
                    else {
                        this.points[pointIndx]['supports'].unshift(supportPost);
                    }
                    this.viewAll(pointIndx);
                };
                PointsListComponent.prototype.removePoint = function (pointIndx) {
                    this.points.splice(pointIndx, 1);
                };
                PointsListComponent.prototype.removeSupport = function (point, supportIndx) {
                    var pointIndx = this.getPostIndx(point);
                    console.log('removing: ', pointIndx);
                    this.points[pointIndx]['supports'].splice(supportIndx, 1);
                    console.log(this.points[pointIndx]['supports']);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQU9DLDZCQUNTLFlBQXlCLEVBQ3pCLGFBQTJCO29CQUQzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTnBDLFNBQUksR0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFPN0MsQ0FBQzs7Z0JBQ0QseUNBQVcsR0FBWCxVQUFZLEtBQVc7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRCwwQ0FBWSxHQUFaLFVBQWEsS0FBVztvQkFBeEIsaUJBUUM7b0JBUEEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDM0IsVUFBVSxDQUFDO3dCQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNULENBQUM7Z0JBQ0Qsd0NBQVUsR0FBVixVQUFXLFNBQWlCLEVBQUUsV0FBVztvQkFDeEMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLEtBQUssQ0FBQzs0QkFDTCxXQUFXLENBQUMsWUFBWSxDQUFDLEdB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QUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO3dCQUNyQyxVQUFVLEVBQUUsQ0FBQyx5Q0FBa0IsRUFBRSwyQ0FBbUIsRUFBRSw2Q0FBb0IsRUFBRSwyQ0FBbUIsRUFBRSxzREFBd0IsQ0FBQzt3QkFDMUgsU0FBUyxFQUFFLENBQUMsb0NBQVksRUFBRSxpQ0FBZ0IsQ0FBQzt3QkFDM0MsS0FBSyxFQUFFLENBQUMsb0NBQWdCLENBQUM7cUJBQzVCLENBQUM7O3VDQUFBO2dCQStGRiwwQkFBQztZQUFELENBOUZBLEFBOEZDLElBQUE7WUE5RkQscURBOEZDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9wb2ludHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlc30gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtQb3N0fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9zdCc7XG5pbXBvcnQge01haW5Qb2ludENvbXBvbmVudH0gZnJvbSAnLi9tYWluLXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1RvcFN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vdG9wLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7TW9yZVN1cHBvcnRDb21wb25lbnR9IGZyb20gJy4vbW9yZS1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaEZpbHRlclBpcGV9IGZyb20gJy4uLy4uL3BpcGVzL3NlYXJjaEZpbHRlci5waXBlJztcbmltcG9ydCB7QWRkU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi9hZGQtc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtDcmVhdGVQb2ludEZvcm1Db21wb25lbnR9IGZyb20gJy4vY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7U21vb3RoU2Nyb2xsfSBmcm9tICcuLi8uLi9zaGFyZWQvc21vb3RoLXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7V0lORE9XX1BST1ZJREVSU30gZnJvbSAnLi4vLi4vc2hhcmVkL3dpbmRvdy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tcG9pbnRzLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL3BvaW50cy1saXN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3BvaW50cy1saXN0LmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtNYWluUG9pbnRDb21wb25lbnQsIFRvcFN1cHBvcnRDb21wb25lbnQsIE1vcmVTdXBwb3J0Q29tcG9uZW50LCBBZGRTdXBwb3J0Q29tcG9uZW50LCBDcmVhdGVQb2ludEZvcm1Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1Ntb290aFNjcm9sbCwgV0lORE9XX1BST1ZJREVSU10sXG4gICAgcGlwZXM6IFtTZWFyY2hGaWx0ZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBQb2ludHNMaXN0Q29tcG9uZW50e1xuXHRzaG93Rm9ybTogYm9vbGVhbjtcblx0QElucHV0KCkgcG9pbnRzOiBQb3N0W107XG5cdHR5cGU6IHN0cmluZyA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpOztcblx0aXNzdWVJZDogc3RyaW5nO1xuXHRzZWFyY2hUZXh0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3Ntb290aFNjcm9sbDogU21vb3RoU2Nyb2xsKSB7IFxuXHR9XG5cdGdldFBvc3RJbmR4KHBvaW50OiBQb3N0KTogbnVtYmVye1xuXHRcdHJldHVybiB0aGlzLnBvaW50cy5pbmRleE9mKHBvaW50KTtcblx0fVxuXHRvblBvaW50QWRkZWQocG9pbnQ6IFBvc3Qpe1xuXHRcdGNvbnNvbGUubG9nKCdOZXcgcG9pbnQ6ICcsIHBvaW50KTtcblx0XHRwb2ludFsnc3VwcG9ydHMnXSA9IFtudWxsXTtcblx0XHR0aGlzLnBvaW50cy51bnNoaWZ0KHBvaW50KTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuYWRkRXZpZGVuY2UocG9pbnQpO1xuXHRcdFx0dGhpcy5zbW9vdGhTY3JvbGwoJ3BvaW50JyArIDAsIDIwKTtcblx0XHR9LCA2MDApO1xuXHR9XG5cdGFkZFN1cHBvcnQocG9pbnRJbmR4OiBudW1iZXIsIHN1cHBvcnRQb3N0KXtcblx0XHRzd2l0Y2ggKHN1cHBvcnRQb3N0LnBvaW50X3R5cGVfaWQpIHtcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0c3VwcG9ydFBvc3RbJ3BvaW50X3R5cGUnXSA9ICdwcm9vZic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRzdXBwb3J0UG9zdFsncG9pbnRfdHlwZSddID0gJ2Rpc3Byb29mJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHN3aXRjaCAoc3VwcG9ydFBvc3Quc291cmNlX3R5cGVfaWQpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0c3VwcG9ydFBvc3RbJ3NvdXJjZV90eXBlJ10gPSAnbWV0YSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRzdXBwb3J0UG9zdFsnc291cmNlX3R5cGUnXSA9ICdjcmVkaWJsZSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRzdXBwb3J0UG9zdFsnc291cmNlX3R5cGUnXSA9ICd3ZWInO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNDpcblx0XHRcdFx0c3VwcG9ydFBvc3RbJ3NvdXJjZV90eXBlJ10gPSAnbWVkaWEnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgNTpcblx0XHRcdFx0c3VwcG9ydFBvc3RbJ3NvdXJjZV90eXBlJ10gPSAnb3Bpbmlvbic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA2OlxuXHRcdFx0XHRzdXBwb3J0UG9zdFsnc291cmNlX3R5cGUnXSA9ICdvdGhlcic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0c3VwcG9ydFBvc3RbJ3NvdXJjZV90eXBlJ10gPSAnb3Bpbmlvbic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZih0aGlzLnBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddWzBdID09PSBudWxsKXtcblx0XHRcdHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ11bMF0gPSBzdXBwb3J0UG9zdDtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10udW5zaGlmdChzdXBwb3J0UG9zdCk7XG5cdFx0fVxuXHRcdHRoaXMudmlld0FsbChwb2ludEluZHgpXG5cdH1cblx0cmVtb3ZlUG9pbnQocG9pbnRJbmR4OiBudW1iZXIpe1xuXHRcdHRoaXMucG9pbnRzLnNwbGljZShwb2ludEluZHgsIDEpO1xuXHR9XG5cdHJlbW92ZVN1cHBvcnQocG9pbnQ6IFBvc3QsIHN1cHBvcnRJbmR4OiBudW1iZXIpe1xuXHRcdGxldCBwb2ludEluZHggPSB0aGlzLmdldFBvc3RJbmR4KHBvaW50KTtcblx0XHRjb25zb2xlLmxvZygncmVtb3Zpbmc6ICcsIHBvaW50SW5keCk7XG5cdFx0dGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS5zcGxpY2Uoc3VwcG9ydEluZHgsIDEpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10pO1xuXHRcdGlmICh0aGlzLnBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddLmxlbmd0aCA9PT0gMSl7XG5cdFx0XHR0aGlzLnZpZXdBbGwocG9pbnRJbmR4KTtcblx0XHR9XG5cdH1cblx0dmlld0FsbChpbmRleDogbnVtYmVyKXtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10pe1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddKTtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gZmFsc2U7XG5cdH1cblx0YWRkRXZpZGVuY2UocG9pbnQ6IFBvc3QpIHtcblx0XHRsZXQgaW5kZXggPSB0aGlzLmdldFBvc3RJbmR4KHBvaW50KTtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKSB7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gZmFsc2U7XG5cdH1cblx0c21vb3RoU2Nyb2xsKGVpZCwgb2Zmc2V0OiBudW1iZXIpe1xuXHRcdHRoaXMuX3Ntb290aFNjcm9sbC5zbW9vdGhTY3JvbGwoZWlkLCBvZmZzZXQpO1xuXHR9XG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
