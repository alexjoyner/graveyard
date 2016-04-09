System.register(['angular2/core', '../../shared/point', '../../shared/points.service', 'angular2/router', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, point_1, points_service_1, router_1, users_service_1;
    var CreatePointFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (point_1_1) {
                point_1 = point_1_1;
            },
            function (points_service_1_1) {
                points_service_1 = points_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            CreatePointFormComponent = (function () {
                function CreatePointFormComponent(_pointsService, _routeParams, _usersService) {
                    this._pointsService = _pointsService;
                    this._routeParams = _routeParams;
                    this._usersService = _usersService;
                    this.added = new core_1.EventEmitter();
                    this.cancel = new core_1.EventEmitter();
                }
                CreatePointFormComponent.prototype.createPoint = function () {
                    var _this = this;
                    this._pointsService.insertPoint(this.newPoint)
                        .subscribe(function (pointData) { return _this.added.emit(pointData); }, function (err) { return console.log('err', err); });
                };
                CreatePointFormComponent.prototype.onCancel = function () {
                    this.cancel.emit(null);
                };
                CreatePointFormComponent.prototype.ngOnInit = function () {
                    this._issueId = +this._routeParams.get('id');
                    var type = this._routeParams.get('type');
                    this.newPoint = new point_1.Point(this._issueId, '', '', type, 0, 0, '', this._usersService.profile._id);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CreatePointFormComponent.prototype, "added", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CreatePointFormComponent.prototype, "cancel", void 0);
                CreatePointFormComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-create-point-form',
                        templateUrl: 'templates/issue/create-point-form.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.RouteParams, users_service_1.UsersService])
                ], CreatePointFormComponent);
                return CreatePointFormComponent;
            }());
            exports_1("CreatePointFormComponent", CreatePointFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBTUMsa0NBQ1MsY0FBNkIsRUFDN0IsWUFBeUIsRUFDekIsYUFBMkI7b0JBRjNCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTjFCLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQzlDLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBS2pCLENBQUM7Z0JBRXpDLDhDQUFXLEdBQVg7b0JBQUEsaUJBTUM7b0JBTEEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDN0MsU0FBUyxDQUNULFVBQUEsU0FBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQTFCLENBQTBCLEVBQ3hDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQzlCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCwyQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUNELDJDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQUssQ0FDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNyQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBekJEO29CQUFDLGFBQU0sRUFBRTs7dUVBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOzt3RUFBQTtnQkFSVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFdBQVcsRUFBRSw0Q0FBNEM7cUJBQzVELENBQUM7OzRDQUFBO2dCQThCRiwrQkFBQztZQUFELENBN0JBLEFBNkJDLElBQUE7WUE3QkQsK0RBNkJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9jcmVhdGUtcG9pbnQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnQnO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7IFVzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWNyZWF0ZS1wb2ludC1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9jcmVhdGUtcG9pbnQtZm9ybS50cGwuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRuZXdQb2ludDogUG9pbnQ7XG5cdHByaXZhdGUgX2lzc3VlSWQ6IG51bWJlcjtcblx0QE91dHB1dCgpIGFkZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHsgfVxuXG5cdGNyZWF0ZVBvaW50KCl7XG5cdFx0dGhpcy5fcG9pbnRzU2VydmljZS5pbnNlcnRQb2ludCh0aGlzLm5ld1BvaW50KVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRwb2ludERhdGEgPT4gIHRoaXMuYWRkZWQuZW1pdChwb2ludERhdGEpLFxuXHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0KTtcblx0fVxuXHRvbkNhbmNlbCgpe1xuXHRcdHRoaXMuY2FuY2VsLmVtaXQobnVsbCk7XG5cdH1cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2lzc3VlSWQgPSArdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdpZCcpO1xuXHRcdGxldCB0eXBlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCd0eXBlJyk7XG5cdFx0dGhpcy5uZXdQb2ludCA9IG5ldyBQb2ludChcblx0XHRcdHRoaXMuX2lzc3VlSWQsICcnLCAnJywgXG5cdFx0XHR0eXBlLCAwLCAwLCAnJyxcblx0XHRcdHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLl9pZCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
