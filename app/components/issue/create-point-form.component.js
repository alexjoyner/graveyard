System.register(['angular2/core', '../../shared/point', '../../shared/points.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, point_1, points_service_1, router_1;
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
            }],
        execute: function() {
            CreatePointFormComponent = (function () {
                function CreatePointFormComponent(_pointsService, _routeParams) {
                    this._pointsService = _pointsService;
                    this._routeParams = _routeParams;
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
                    this._issueId = this._routeParams.get('id');
                    var type = this._routeParams.get('type');
                    this.newPoint = new point_1.Point(this._issueId, '', type, 0, 0, '');
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
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.RouteParams])
                ], CreatePointFormComponent);
                return CreatePointFormComponent;
            }());
            exports_1("CreatePointFormComponent", CreatePointFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBTUMsa0NBQ1MsY0FBNkIsRUFDN0IsWUFBeUI7b0JBRHpCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFMeEIsVUFBSyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDOUMsV0FBTSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFJbkIsQ0FBQztnQkFFdkMsOENBQVcsR0FBWDtvQkFBQSxpQkFNQztvQkFMQSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUM3QyxTQUFTLENBQ1QsVUFBQSxTQUFTLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBMUIsQ0FBMEIsRUFDeEMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsQ0FDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELDJDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsMkNBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFyQkQ7b0JBQUMsYUFBTSxFQUFFOzt1RUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O3dFQUFBO2dCQVJWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsV0FBVyxFQUFFLDRDQUE0QztxQkFDNUQsQ0FBQzs7NENBQUE7Z0JBMEJGLCtCQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCwrREF5QkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2NyZWF0ZS1wb2ludC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludCc7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWNyZWF0ZS1wb2ludC1mb3JtJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9jcmVhdGUtcG9pbnQtZm9ybS50cGwuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlUG9pbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRuZXdQb2ludDogUG9pbnQ7XG5cdHByaXZhdGUgX2lzc3VlSWQ6IHN0cmluZztcblx0QE91dHB1dCgpIGFkZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZVBhcmFtczogUm91dGVQYXJhbXMpIHsgfVxuXG5cdGNyZWF0ZVBvaW50KCl7XG5cdFx0dGhpcy5fcG9pbnRzU2VydmljZS5pbnNlcnRQb2ludCh0aGlzLm5ld1BvaW50KVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRwb2ludERhdGEgPT4gIHRoaXMuYWRkZWQuZW1pdChwb2ludERhdGEpLFxuXHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0KTtcblx0fVxuXHRvbkNhbmNlbCgpe1xuXHRcdHRoaXMuY2FuY2VsLmVtaXQobnVsbCk7XG5cdH1cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2lzc3VlSWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cdFx0bGV0IHR5cGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHR0aGlzLm5ld1BvaW50ID0gbmV3IFBvaW50KHRoaXMuX2lzc3VlSWQsICcnLCB0eXBlLCAwLCAwLCAnJyk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
