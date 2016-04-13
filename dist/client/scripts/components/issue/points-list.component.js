System.register(['angular2/core', 'angular2/router', './main-point.component', './top-support.component', './more-support.component', '../../pipes/searchFilter.pipe', './add-support.component', './create-point-form.component', '../../shared/smooth-scroll.service', '../../shared/window.service', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, router_1, main_point_component_1, top_support_component_1, more_support_component_1, searchFilter_pipe_1, add_support_component_1, create_point_form_component_1, smooth_scroll_service_1, window_service_1, users_service_1;
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
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            PointsListComponent = (function () {
                function PointsListComponent(_routeParams, _smoothScroll, _usersService) {
                    this._routeParams = _routeParams;
                    this._smoothScroll = _smoothScroll;
                    this._usersService = _usersService;
                    this.type = this._routeParams.get('type');
                    this.socket = io('/');
                    this.socket.emit('change room', {
                        newroom: 'issue' +
                            this._routeParams.get('id') + '/' +
                            this.type
                    });
                    this.socket.on('NewMainPoint', function (point) {
                        this.onPointAdded(point);
                    }.bind(this));
                }
                PointsListComponent.prototype.getPostIndx = function (point) {
                    return this.points.indexOf(point);
                };
                PointsListComponent.prototype.onPointAdded = function (point) {
                    var _this = this;
                    point['supports'] = [null];
                    this.points.unshift(point);
                    if (this.isOwner(point.owner_user_id)) {
                        this.searchText = '';
                        this.showForm = false;
                        setTimeout(function () {
                            _this.addEvidence(point);
                            _this.smoothScroll('point' + 0, 20);
                        }, 600);
                    }
                };
                PointsListComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
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
                    __metadata('design:paramtypes', [router_1.RouteParams, smooth_scroll_service_1.SmoothScroll, users_service_1.UsersService])
                ], PointsListComponent);
                return PointsListComponent;
            }());
            exports_1("PointsListComponent", PointsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQU9DLDZCQUNTLFlBQXlCLEVBQ3pCLGFBQTJCLEVBQzNCLGFBQTJCO29CQUYzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQVBwQyxTQUFJLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBUTVDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQy9CLE9BQU8sRUFBRSxPQUFPOzRCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHOzRCQUNqQyxJQUFJLENBQUMsSUFBSTtxQkFDVCxDQUFDLENBQUE7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLFVBQVMsS0FBSzt3QkFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixDQUFDO2dCQUNELHlDQUFXLEdBQVgsVUFBWSxLQUFXO29CQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0QsMENBQVksR0FBWixVQUFhLEtBQVc7b0JBQXhCLGlCQVdDO29CQVZBLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDM0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7d0JBQ3RCLFVBQVUsQ0FBQzs0QkFDVixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN4QixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ3BDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDVCxDQUFDO2dCQUNGLENBQUM7Z0JBQ0QscUNBQU8sR0FBUCxVQUFRLEVBQVU7b0JBQ2pCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFDRCx3Q0FBVSxHQUFWLFVBQVcsU0FBaUIsRUFBRSxXQUFXO29CQUN4QyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsS0FBSyxDQUFDOzRCQUNMLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUM7NEJBQ3BDLEtBQUssQ0FBQzt3QkFDUCxLQUFLLENBQUM7NEJBQ0wsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQzs0QkFDdkMsS0FBSyxDQUFDO29CQUNSLENBQUM7b0JBQ0QsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLEtBQUssQ0FBQzs0QkFDTCxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFDOzRCQUNwQyxLQUFLLENBQUM7d0JBQ1AsS0FBSyxDQUFDOzRCQUNMLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxVQUFVLENBQUM7NEJBQ3hDLEtBQUssQ0FBQzt3QkFDUCxLQUFLLENBQUM7NEJBQ0wsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQzs0QkFDbkMsS0FBSyxDQUFDO3dCQUNQLEtBQUssQ0FBQzs0QkFDTCxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsT0FBTyxDQUFDOzRCQUNyQyxLQUFLLENBQUM7d0JBQ1AsS0FBSyxDQUFDOzRCQUNMLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7NEJBQ3ZDLEtBQUssQ0FBQzt3QkFDUCxLQUFLLENBQUM7NEJBQ0wsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sQ0FBQzs0QkFDckMsS0FBSyxDQUFDO3dCQUNQOzRCQUNDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7NEJBQ3ZDLEtBQUssQ0FBQztvQkFDUixDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7b0JBQ3JELENBQUM7b0JBQUEsSUFBSSxDQUFBLENBQUM7d0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pELENBQUM7b0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQztnQkFDRCx5Q0FBVyxHQUFYLFVBQVksU0FBaUI7b0JBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCwyQ0FBYSxHQUFiLFVBQWMsS0FBVyxFQUFFLFdBQW1CO29CQUM3QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDekIsQ0FBQztnQkFDRixDQUFDO2dCQUNELHFDQUFPLEdBQVAsVUFBUSxLQUFhO29CQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxDQUFDO29CQUFBLElBQUksQ0FBQSxDQUFDO3dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUN0QyxDQUFDO29CQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELHlDQUFXLEdBQVgsVUFBWSxLQUFXO29CQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUMxRSxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUMxQyxDQUFDO29CQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN2QyxDQUFDO2dCQUNELDBDQUFZLEdBQVosVUFBYSxHQUFHLEVBQUUsTUFBYztvQkFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQTNHRDtvQkFBQyxZQUFLLEVBQUU7O21FQUFBO2dCQVZUO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLHNDQUFzQzt3QkFDbkQsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7d0JBQ3JDLFVBQVUsRUFBRSxDQUFDLHlDQUFrQixFQUFFLDJDQUFtQixFQUFFLDZDQUFvQixFQUFFLDJDQUFtQixFQUFFLHNEQUF3QixDQUFDO3dCQUMxSCxTQUFTLEVBQUUsQ0FBQyxvQ0FBWSxFQUFFLGlDQUFnQixDQUFDO3dCQUMzQyxLQUFLLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztxQkFDNUIsQ0FBQzs7dUNBQUE7Z0JBK0dGLDBCQUFDO1lBQUQsQ0E5R0EsQUE4R0MsSUFBQTtZQTlHRCxxREE4R0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL3BvaW50cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0JztcbmltcG9ydCB7TWFpblBvaW50Q29tcG9uZW50fSBmcm9tICcuL21haW4tcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7VG9wU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi90b3Atc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtNb3JlU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi9tb3JlLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoRmlsdGVyUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUnO1xuaW1wb3J0IHtBZGRTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL2FkZC1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NyZWF0ZVBvaW50Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9jcmVhdGUtcG9pbnQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtTbW9vdGhTY3JvbGx9IGZyb20gJy4uLy4uL3NoYXJlZC9zbW9vdGgtc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHtXSU5ET1dfUFJPVklERVJTfSBmcm9tICcuLi8uLi9zaGFyZWQvd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tcG9pbnRzLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL3BvaW50cy1saXN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3BvaW50cy1saXN0LmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtNYWluUG9pbnRDb21wb25lbnQsIFRvcFN1cHBvcnRDb21wb25lbnQsIE1vcmVTdXBwb3J0Q29tcG9uZW50LCBBZGRTdXBwb3J0Q29tcG9uZW50LCBDcmVhdGVQb2ludEZvcm1Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1Ntb290aFNjcm9sbCwgV0lORE9XX1BST1ZJREVSU10sXG4gICAgcGlwZXM6IFtTZWFyY2hGaWx0ZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBQb2ludHNMaXN0Q29tcG9uZW50e1xuXHRzaG93Rm9ybTogYm9vbGVhbjtcblx0QElucHV0KCkgcG9pbnRzOiBQb3N0W107XG5cdHR5cGU6IHN0cmluZyA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRpc3N1ZUlkOiBzdHJpbmc7XG5cdHNlYXJjaFRleHQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfc21vb3RoU2Nyb2xsOiBTbW9vdGhTY3JvbGwsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHsgXG5cdFx0dGhpcy5zb2NrZXQgPSBpbygnLycpO1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ2NoYW5nZSByb29tJywgeyBcblx0XHRcdG5ld3Jvb206ICdpc3N1ZScgKyBcblx0XHRcdHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKSArICcvJyArXG5cdFx0XHR0aGlzLnR5cGVcblx0XHR9KVxuXHRcdHRoaXMuc29ja2V0Lm9uKCdOZXdNYWluUG9pbnQnLCBmdW5jdGlvbihwb2ludCkge1xuXHRcdFx0dGhpcy5vblBvaW50QWRkZWQocG9pbnQpXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG5cdH1cblx0Z2V0UG9zdEluZHgocG9pbnQ6IFBvc3QpOiBudW1iZXJ7XG5cdFx0cmV0dXJuIHRoaXMucG9pbnRzLmluZGV4T2YocG9pbnQpO1xuXHR9XG5cdG9uUG9pbnRBZGRlZChwb2ludDogUG9zdCl7XG5cdFx0cG9pbnRbJ3N1cHBvcnRzJ10gPSBbbnVsbF07XG5cdFx0dGhpcy5wb2ludHMudW5zaGlmdChwb2ludCk7XG5cdFx0aWYodGhpcy5pc093bmVyKHBvaW50Lm93bmVyX3VzZXJfaWQpKXtcblx0XHRcdHRoaXMuc2VhcmNoVGV4dCA9ICcnOyBcblx0XHRcdHRoaXMuc2hvd0Zvcm0gPSBmYWxzZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmFkZEV2aWRlbmNlKHBvaW50KTtcblx0XHRcdFx0dGhpcy5zbW9vdGhTY3JvbGwoJ3BvaW50JyArIDAsIDIwKTtcblx0XHRcdH0sIDYwMCk7XG5cdFx0fVxuXHR9XG5cdGlzT3duZXIoaWQ6IG51bWJlcikge1xuXHRcdHJldHVybiAoaWQgPT09IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLl9pZCk7XG5cdH1cblx0YWRkU3VwcG9ydChwb2ludEluZHg6IG51bWJlciwgc3VwcG9ydFBvc3Qpe1xuXHRcdHN3aXRjaCAoc3VwcG9ydFBvc3QucG9pbnRfdHlwZV9pZCkge1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRzdXBwb3J0UG9zdFsncG9pbnRfdHlwZSddID0gJ3Byb29mJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHN1cHBvcnRQb3N0Wydwb2ludF90eXBlJ10gPSAnZGlzcHJvb2YnO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0c3dpdGNoIChzdXBwb3J0UG9zdC5zb3VyY2VfdHlwZV9pZCkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRzdXBwb3J0UG9zdFsnc291cmNlX3R5cGUnXSA9ICdtZXRhJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHN1cHBvcnRQb3N0Wydzb3VyY2VfdHlwZSddID0gJ2NyZWRpYmxlJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHN1cHBvcnRQb3N0Wydzb3VyY2VfdHlwZSddID0gJ3dlYic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRzdXBwb3J0UG9zdFsnc291cmNlX3R5cGUnXSA9ICdtZWRpYSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA1OlxuXHRcdFx0XHRzdXBwb3J0UG9zdFsnc291cmNlX3R5cGUnXSA9ICdvcGluaW9uJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDY6XG5cdFx0XHRcdHN1cHBvcnRQb3N0Wydzb3VyY2VfdHlwZSddID0gJ290aGVyJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRzdXBwb3J0UG9zdFsnc291cmNlX3R5cGUnXSA9ICdvcGluaW9uJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmKHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ11bMF0gPT09IG51bGwpe1xuXHRcdFx0dGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXVswXSA9IHN1cHBvcnRQb3N0O1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS51bnNoaWZ0KHN1cHBvcnRQb3N0KTtcblx0XHR9XG5cdFx0dGhpcy52aWV3QWxsKHBvaW50SW5keClcblx0fVxuXHRyZW1vdmVQb2ludChwb2ludEluZHg6IG51bWJlcil7XG5cdFx0dGhpcy5wb2ludHMuc3BsaWNlKHBvaW50SW5keCwgMSk7XG5cdH1cblx0cmVtb3ZlU3VwcG9ydChwb2ludDogUG9zdCwgc3VwcG9ydEluZHg6IG51bWJlcil7XG5cdFx0bGV0IHBvaW50SW5keCA9IHRoaXMuZ2V0UG9zdEluZHgocG9pbnQpO1xuXHRcdGNvbnNvbGUubG9nKCdyZW1vdmluZzogJywgcG9pbnRJbmR4KTtcblx0XHR0aGlzLnBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddLnNwbGljZShzdXBwb3J0SW5keCwgMSk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXSk7XG5cdFx0aWYgKHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10ubGVuZ3RoID09PSAxKXtcblx0XHRcdHRoaXMudmlld0FsbChwb2ludEluZHgpO1xuXHRcdH1cblx0fVxuXHR2aWV3QWxsKGluZGV4OiBudW1iZXIpe1xuXHRcdGlmICh0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSl7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ3ZpZXdBbGwnXSA9ICEodGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSB0cnVlO1xuXHRcdH1cblx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSBmYWxzZTtcblx0fVxuXHRhZGRFdmlkZW5jZShwb2ludDogUG9zdCkge1xuXHRcdGxldCBpbmRleCA9IHRoaXMuZ2V0UG9zdEluZHgocG9pbnQpO1xuXHRcdGlmICh0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10pIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9ICEodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSBmYWxzZTtcblx0fVxuXHRzbW9vdGhTY3JvbGwoZWlkLCBvZmZzZXQ6IG51bWJlcil7XG5cdFx0dGhpcy5fc21vb3RoU2Nyb2xsLnNtb290aFNjcm9sbChlaWQsIG9mZnNldCk7XG5cdH1cbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
