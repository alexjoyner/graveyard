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
    function prepareSupportPoint(supportPoint) {
        switch (supportPoint.point_type_id) {
            case 3:
                supportPoint['point_type'] = 'proof';
                break;
            case 4:
                supportPoint['point_type'] = 'disproof';
                break;
        }
        switch (supportPoint.source_type_id) {
            case 1:
                supportPoint['source_type'] = 'meta';
                break;
            case 2:
                supportPoint['source_type'] = 'credible';
                break;
            case 3:
                supportPoint['source_type'] = 'web';
                break;
            case 4:
                supportPoint['source_type'] = 'media';
                break;
            case 5:
                supportPoint['source_type'] = 'opinion';
                break;
            case 6:
                supportPoint['source_type'] = 'other';
                break;
            default:
                supportPoint['source_type'] = 'opinion';
                break;
        }
        return supportPoint;
    }
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
                function PointsListComponent(_routeParams, _smoothScroll, _usersService, _router) {
                    this._routeParams = _routeParams;
                    this._smoothScroll = _smoothScroll;
                    this._usersService = _usersService;
                    this._router = _router;
                    this.type = this._routeParams.get('type');
                    this.issueId = this._routeParams.get('id');
                }
                PointsListComponent.prototype.ngOnInit = function () {
                    this.socket = io('/');
                    this.socket.emit('change room', {
                        newroom: 'issue' +
                            this._routeParams.get('id') + '/' +
                            this.type
                    });
                    this.socket.on('NewPost', function (postData) {
                        switch (postData.post_type_id) {
                            case 2:
                                this.onPointAdded(postData);
                                break;
                            case 3:
                                this.onSupportAdded(postData);
                                break;
                        }
                    }.bind(this));
                    this.socket.on('disconnect', function () {
                        console.log('DISCONNECTED');
                        location.reload();
                    });
                    this.socket.on('DeletedPost', function (postData) {
                        console.log('Delete postData: ', postData);
                        switch (postData.post_type_id) {
                            case 1:
                                console.log('GO BACK HOME');
                                this._router.navigate(['Home']);
                                break;
                            case 2:
                                for (var i = this.points.length - 1; i >= 0; i--) {
                                    if (this.points[i]._id === +postData.main_point_id) {
                                        this.points.splice(i, 1);
                                    }
                                }
                                break;
                            case 3:
                                this.removeSupport(postData.main_point_id, postData.support_id);
                                break;
                        }
                    }.bind(this));
                };
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
                PointsListComponent.prototype.onSupportAdded = function (supportPost) {
                    var pointIndx;
                    // Search for which point the new support belongs to
                    for (var i = this.points.length - 1; i >= 0; i--) {
                        if (this.points[i]._id === supportPost.parent_id) {
                            pointIndx = i;
                        }
                    }
                    // External Func: Add necessary point data because
                    //		we didn't join the data on the server
                    var preparedPoint = prepareSupportPoint(supportPost);
                    if (this.points[pointIndx]['supports'][0] === null) {
                        this.points[pointIndx]['supports'][0] = preparedPoint;
                    }
                    else {
                        this.points[pointIndx]['supports'].unshift(preparedPoint);
                    }
                    this.viewAll(pointIndx);
                };
                PointsListComponent.prototype.removePoint = function (pointIndx) {
                    this.points.splice(pointIndx, 1);
                };
                PointsListComponent.prototype.removeSupport = function (pointId, supportId) {
                    var success = false;
                    var pointIndx;
                    var supportIndx;
                    for (var i = this.points.length - 1; i >= 0; i--) {
                        if (this.points[i]._id === pointId) {
                            for (var j = this.points[i]['supports'].length - 1; j >= 0; j--) {
                                if (this.points[i]['supports'][j]._id === supportId) {
                                    success = true;
                                    pointIndx = i;
                                    supportIndx = j;
                                }
                            }
                        }
                    }
                    if (success) {
                        console.log('removing: ', pointIndx + ' , ' + supportIndx);
                        this.points[pointIndx]['supports'].splice(supportIndx, 1);
                        console.log(this.points[pointIndx]['supports']);
                        if (this.points[pointIndx]['supports'].length === 1) {
                            /*
                                Catch when all but one support point
                                has been deleted
                            */
                            this.points[pointIndx]['viewAll'] = false;
                        }
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
                    __metadata('design:paramtypes', [router_1.RouteParams, smooth_scroll_service_1.SmoothScroll, users_service_1.UsersService, router_1.Router])
                ], PointsListComponent);
                return PointsListComponent;
            }());
            exports_1("PointsListComponent", PointsListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBcUtBLDZCQUE2QixZQUFrQjtRQUM5QyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwQyxLQUFLLENBQUM7Z0JBQ0wsWUFBWSxDQUFDLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFDckMsS0FBSyxDQUFDO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQztRQUNSLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNyQyxLQUFLLENBQUM7Z0JBQ0wsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztnQkFDckMsS0FBSyxDQUFDO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQ3pDLEtBQUssQ0FBQztZQUNQLEtBQUssQ0FBQztnQkFDTCxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNwQyxLQUFLLENBQUM7WUFDUCxLQUFLLENBQUM7Z0JBQ0wsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFDdEMsS0FBSyxDQUFDO1lBQ1AsS0FBSyxDQUFDO2dCQUNMLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQztZQUNQLEtBQUssQ0FBQztnQkFDTCxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUN0QyxLQUFLLENBQUM7WUFDUDtnQkFDQyxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUN4QyxLQUFLLENBQUM7UUFDUixDQUFDO1FBQ0Qs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Q0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzFDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBQ0QsMENBQVksR0FBWixVQUFhLEdBQUcsRUFBRSxNQUFjO29CQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBN0lEO29CQUFDLFlBQUssRUFBRTs7bUVBQUE7Z0JBVlQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsc0NBQXNDO3dCQUNuRCxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDckMsVUFBVSxFQUFFLENBQUMseUNBQWtCLEVBQUUsMkNBQW1CLEVBQUUsNkNBQW9CLEVBQUUsMkNBQW1CLEVBQUUsc0RBQXdCLENBQUM7d0JBQzFILFNBQVMsRUFBRSxDQUFDLG9DQUFZLEVBQUUsaUNBQWdCLENBQUM7d0JBQzNDLEtBQUssRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUM1QixDQUFDOzt1Q0FBQTtnQkFpSkYsMEJBQUM7WUFBRCxDQWhKQSxBQWdKQyxJQUFBO1lBaEpELHFEQWdKQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvcG9pbnRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1Bvc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0JztcbmltcG9ydCB7TWFpblBvaW50Q29tcG9uZW50fSBmcm9tICcuL21haW4tcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7VG9wU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi90b3Atc3VwcG9ydC5jb21wb25lbnQnO1xuaW1wb3J0IHtNb3JlU3VwcG9ydENvbXBvbmVudH0gZnJvbSAnLi9tb3JlLXN1cHBvcnQuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoRmlsdGVyUGlwZX0gZnJvbSAnLi4vLi4vcGlwZXMvc2VhcmNoRmlsdGVyLnBpcGUnO1xuaW1wb3J0IHtBZGRTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL2FkZC1zdXBwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge0NyZWF0ZVBvaW50Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9jcmVhdGUtcG9pbnQtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtTbW9vdGhTY3JvbGx9IGZyb20gJy4uLy4uL3NoYXJlZC9zbW9vdGgtc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHtXSU5ET1dfUFJPVklERVJTfSBmcm9tICcuLi8uLi9zaGFyZWQvd2luZG93LnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tcG9pbnRzLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL3BvaW50cy1saXN0LnRwbC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3BvaW50cy1saXN0LmNzcyddLFxuICAgIGRpcmVjdGl2ZXM6IFtNYWluUG9pbnRDb21wb25lbnQsIFRvcFN1cHBvcnRDb21wb25lbnQsIE1vcmVTdXBwb3J0Q29tcG9uZW50LCBBZGRTdXBwb3J0Q29tcG9uZW50LCBDcmVhdGVQb2ludEZvcm1Db21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW1Ntb290aFNjcm9sbCwgV0lORE9XX1BST1ZJREVSU10sXG4gICAgcGlwZXM6IFtTZWFyY2hGaWx0ZXJQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBQb2ludHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRzaG93Rm9ybTogYm9vbGVhbjtcblx0QElucHV0KCkgcG9pbnRzOiBQb3N0W107XG5cdHR5cGU6IHN0cmluZyA9IHRoaXMuX3JvdXRlUGFyYW1zLmdldCgndHlwZScpO1xuXHRpc3N1ZUlkOiBzdHJpbmcgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cdHNlYXJjaFRleHQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfc21vb3RoU2Nyb2xsOiBTbW9vdGhTY3JvbGwsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgXG5cdH1cblx0bmdPbkluaXQoKTphbnl7XG5cdFx0dGhpcy5zb2NrZXQgPSBpbygnLycpO1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ2NoYW5nZSByb29tJywgeyBcblx0XHRcdG5ld3Jvb206ICdpc3N1ZScgKyBcblx0XHRcdHRoaXMuX3JvdXRlUGFyYW1zLmdldCgnaWQnKSArICcvJyArXG5cdFx0XHR0aGlzLnR5cGVcblx0XHR9KVxuXHRcdHRoaXMuc29ja2V0Lm9uKCdOZXdQb3N0JywgZnVuY3Rpb24ocG9zdERhdGEpIHtcblx0XHRcdHN3aXRjaChwb3N0RGF0YS5wb3N0X3R5cGVfaWQpe1xuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0dGhpcy5vblBvaW50QWRkZWQocG9zdERhdGEpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0dGhpcy5vblN1cHBvcnRBZGRlZChwb3N0RGF0YSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgXHRjb25zb2xlLmxvZygnRElTQ09OTkVDVEVEJyk7XG4gICAgICAgIFx0bG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pO1xuXHRcdHRoaXMuc29ja2V0Lm9uKCdEZWxldGVkUG9zdCcsIGZ1bmN0aW9uKHBvc3REYXRhKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRGVsZXRlIHBvc3REYXRhOiAnLCBwb3N0RGF0YSk7XG5cdFx0XHRzd2l0Y2gocG9zdERhdGEucG9zdF90eXBlX2lkKXtcblx0XHRcdFx0Y2FzZSAxOiAvLyBpc3N1ZVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdHTyBCQUNLIEhPTUUnKTtcblx0XHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDI6IC8vIG1haW4gcG9pbnRcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gdGhpcy5wb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRcdGlmKHRoaXMucG9pbnRzW2ldLl9pZCA9PT0gK3Bvc3REYXRhLm1haW5fcG9pbnRfaWQpe1xuXHRcdFx0XHRcdFx0XHR0aGlzLnBvaW50cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVx0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMzogLy8gc3VwcG9ydCBwb2ludFxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlU3VwcG9ydChcblx0XHRcdFx0XHRcdHBvc3REYXRhLm1haW5fcG9pbnRfaWQsIHBvc3REYXRhLnN1cHBvcnRfaWQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXHR9XG5cdGdldFBvc3RJbmR4KHBvaW50OiBQb3N0KTogbnVtYmVye1xuXHRcdHJldHVybiB0aGlzLnBvaW50cy5pbmRleE9mKHBvaW50KTtcblx0fVxuXHRvblBvaW50QWRkZWQocG9pbnQ6IFBvc3Qpe1xuXHRcdHBvaW50WydzdXBwb3J0cyddID0gW251bGxdO1xuXHRcdHRoaXMucG9pbnRzLnVuc2hpZnQocG9pbnQpO1xuXHRcdGlmKHRoaXMuaXNPd25lcihwb2ludC5vd25lcl91c2VyX2lkKSl7XG5cdFx0XHR0aGlzLnNlYXJjaFRleHQgPSAnJzsgXG5cdFx0XHR0aGlzLnNob3dGb3JtID0gZmFsc2U7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5hZGRFdmlkZW5jZShwb2ludCk7XG5cdFx0XHRcdHRoaXMuc21vb3RoU2Nyb2xsKCdwb2ludCcgKyAwLCAyMCk7XG5cdFx0XHR9LCA2MDApO1xuXHRcdH1cblx0fVxuXHRpc093bmVyKGlkOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gKGlkID09PSB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5faWQpO1xuXHR9XG5cdG9uU3VwcG9ydEFkZGVkKHN1cHBvcnRQb3N0OiBQb3N0KXtcblx0XHRsZXQgcG9pbnRJbmR4OiBudW1iZXI7XG5cdFx0Ly8gU2VhcmNoIGZvciB3aGljaCBwb2ludCB0aGUgbmV3IHN1cHBvcnQgYmVsb25ncyB0b1xuXHRcdGZvciAodmFyIGkgPSB0aGlzLnBvaW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0aWYodGhpcy5wb2ludHNbaV0uX2lkID09PSBzdXBwb3J0UG9zdC5wYXJlbnRfaWQpe1xuXHRcdFx0XHRwb2ludEluZHggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEV4dGVybmFsIEZ1bmM6IEFkZCBuZWNlc3NhcnkgcG9pbnQgZGF0YSBiZWNhdXNlXG5cdFx0Ly9cdFx0d2UgZGlkbid0IGpvaW4gdGhlIGRhdGEgb24gdGhlIHNlcnZlclxuXHRcdGxldCBwcmVwYXJlZFBvaW50ID0gcHJlcGFyZVN1cHBvcnRQb2ludChzdXBwb3J0UG9zdCk7XG5cblx0XHRpZih0aGlzLnBvaW50c1twb2ludEluZHhdWydzdXBwb3J0cyddWzBdID09PSBudWxsKXtcblx0XHRcdHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ11bMF0gPSBwcmVwYXJlZFBvaW50O1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5wb2ludHNbcG9pbnRJbmR4XVsnc3VwcG9ydHMnXS51bnNoaWZ0KHByZXBhcmVkUG9pbnQpO1xuXHRcdH1cblx0XHR0aGlzLnZpZXdBbGwocG9pbnRJbmR4KVxuXHR9XG5cdHJlbW92ZVBvaW50KHBvaW50SW5keDogbnVtYmVyKXtcblx0XHR0aGlzLnBvaW50cy5zcGxpY2UocG9pbnRJbmR4LCAxKTtcblx0fVxuXHRyZW1vdmVTdXBwb3J0KHBvaW50SWQ6IG51bWJlciwgc3VwcG9ydElkOiBudW1iZXIpe1xuXHRcdGxldCBzdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG5cdFx0bGV0IHBvaW50SW5keDogbnVtYmVyO1xuXHRcdGxldCBzdXBwb3J0SW5keDogbnVtYmVyXG5cdFx0Zm9yIChsZXQgaSA9IHRoaXMucG9pbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRpZih0aGlzLnBvaW50c1tpXS5faWQgPT09IHBvaW50SWQpe1xuXHRcdFx0XHRmb3IgKGxldCBqID0gdGhpcy5wb2ludHNbaV1bJ3N1cHBvcnRzJ10ubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcblx0XHRcdFx0XHRpZih0aGlzLnBvaW50c1tpXVsnc3VwcG9ydHMnXVtqXS5faWQgPT09IHN1cHBvcnRJZCl7XG5cdFx0XHRcdFx0XHRzdWNjZXNzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHBvaW50SW5keCA9IGk7XG5cdFx0XHRcdFx0XHRzdXBwb3J0SW5keCA9IGo7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHN1Y2Nlc3Mpe1xuXHRcdFx0Y29uc29sZS5sb2coJ3JlbW92aW5nOiAnLCBwb2ludEluZHggKyAnICwgJyArIHN1cHBvcnRJbmR4KTtcblx0XHRcdHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10uc3BsaWNlKHN1cHBvcnRJbmR4LCAxKTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10pO1xuXHRcdFx0aWYgKHRoaXMucG9pbnRzW3BvaW50SW5keF1bJ3N1cHBvcnRzJ10ubGVuZ3RoID09PSAxKXtcblx0XHRcdFx0Lypcblx0XHRcdFx0XHRDYXRjaCB3aGVuIGFsbCBidXQgb25lIHN1cHBvcnQgcG9pbnQgXG5cdFx0XHRcdFx0aGFzIGJlZW4gZGVsZXRlZFxuXHRcdFx0XHQqL1xuXHRcdFx0XHR0aGlzLnBvaW50c1twb2ludEluZHhdWyd2aWV3QWxsJ10gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dmlld0FsbChpbmRleDogbnVtYmVyKXtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10pe1xuXHRcdFx0dGhpcy5wb2ludHNbaW5kZXhdWyd2aWV3QWxsJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddKTtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gdHJ1ZTtcblx0XHR9XG5cdFx0dGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddID0gZmFsc2U7XG5cdH1cblx0YWRkRXZpZGVuY2UocG9pbnQ6IFBvc3QpIHtcblx0XHRsZXQgaW5kZXggPSB0aGlzLmdldFBvc3RJbmR4KHBvaW50KTtcblx0XHRpZiAodGhpcy5wb2ludHNbaW5kZXhdWydhZGRFdmlkZW5jZSddKSB7XG5cdFx0XHR0aGlzLnBvaW50c1tpbmRleF1bJ2FkZEV2aWRlbmNlJ10gPSAhKHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9pbnRzW2luZGV4XVsnYWRkRXZpZGVuY2UnXSA9IHRydWU7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzW2luZGV4XVsndmlld0FsbCddID0gZmFsc2U7XG5cdH1cblx0c21vb3RoU2Nyb2xsKGVpZCwgb2Zmc2V0OiBudW1iZXIpe1xuXHRcdHRoaXMuX3Ntb290aFNjcm9sbC5zbW9vdGhTY3JvbGwoZWlkLCBvZmZzZXQpO1xuXHR9XG59XG5mdW5jdGlvbiBwcmVwYXJlU3VwcG9ydFBvaW50KHN1cHBvcnRQb2ludDogUG9zdCl7XG5cdHN3aXRjaCAoc3VwcG9ydFBvaW50LnBvaW50X3R5cGVfaWQpIHtcblx0XHRjYXNlIDM6XG5cdFx0XHRzdXBwb3J0UG9pbnRbJ3BvaW50X3R5cGUnXSA9ICdwcm9vZic7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRzdXBwb3J0UG9pbnRbJ3BvaW50X3R5cGUnXSA9ICdkaXNwcm9vZic7XG5cdFx0XHRicmVhaztcblx0fVxuXHRzd2l0Y2ggKHN1cHBvcnRQb2ludC5zb3VyY2VfdHlwZV9pZCkge1xuXHRcdGNhc2UgMTpcblx0XHRcdHN1cHBvcnRQb2ludFsnc291cmNlX3R5cGUnXSA9ICdtZXRhJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHN1cHBvcnRQb2ludFsnc291cmNlX3R5cGUnXSA9ICdjcmVkaWJsZSc7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRzdXBwb3J0UG9pbnRbJ3NvdXJjZV90eXBlJ10gPSAnd2ViJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHN1cHBvcnRQb2ludFsnc291cmNlX3R5cGUnXSA9ICdtZWRpYSc7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDU6XG5cdFx0XHRzdXBwb3J0UG9pbnRbJ3NvdXJjZV90eXBlJ10gPSAnb3Bpbmlvbic7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDY6XG5cdFx0XHRzdXBwb3J0UG9pbnRbJ3NvdXJjZV90eXBlJ10gPSAnb3RoZXInO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHN1cHBvcnRQb2ludFsnc291cmNlX3R5cGUnXSA9ICdvcGluaW9uJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiBzdXBwb3J0UG9pbnQ7XG59XG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
