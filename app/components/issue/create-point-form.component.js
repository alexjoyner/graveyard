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
                }
                CreatePointFormComponent.prototype.createPoint = function () {
                    var _this = this;
                    this._pointsService.insertPoint(this.newPoint)
                        .subscribe(function (success) { return _this.added.emit(null); }, function (err) { return console.log('err', err); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBS0Msa0NBQ1MsY0FBNkIsRUFDN0IsWUFBeUI7b0JBRHpCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFKeEIsVUFBSyxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFJbEIsQ0FBQztnQkFFdkMsOENBQVcsR0FBWDtvQkFBQSxpQkFNQztvQkFMQSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3lCQUM3QyxTQUFTLENBQ1QsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsRUFDaEMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsQ0FDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELDJDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBbEJEO29CQUFDLGFBQU0sRUFBRTs7dUVBQUE7Z0JBUFY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsc0JBQXNCO3dCQUNoQyxXQUFXLEVBQUUsNENBQTRDO3FCQUM1RCxDQUFDOzs0Q0FBQTtnQkF1QkYsK0JBQUM7WUFBRCxDQXRCQSxBQXNCQyxJQUFBO1lBdEJELCtEQXNCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50JztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tY3JlYXRlLXBvaW50LWZvcm0nLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2NyZWF0ZS1wb2ludC1mb3JtLnRwbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVQb2ludEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdG5ld1BvaW50OiBQb2ludDtcblx0cHJpdmF0ZSBfaXNzdWVJZDogc3RyaW5nO1xuXHRAT3V0cHV0KCkgYWRkZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zKSB7IH1cblxuXHRjcmVhdGVQb2ludCgpe1xuXHRcdHRoaXMuX3BvaW50c1NlcnZpY2UuaW5zZXJ0UG9pbnQodGhpcy5uZXdQb2ludClcblx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0c3VjY2VzcyA9PiB0aGlzLmFkZGVkLmVtaXQobnVsbCksXG5cdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2VycicsIGVycilcblx0XHQpO1xuXHR9XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMuX2lzc3VlSWQgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cdFx0bGV0IHR5cGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHR0aGlzLm5ld1BvaW50ID0gbmV3IFBvaW50KHRoaXMuX2lzc3VlSWQsICcnLCB0eXBlLCAwLCAwLCAnJyk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
