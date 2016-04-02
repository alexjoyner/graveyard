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
    var EditPointComponent;
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
            EditPointComponent = (function () {
                function EditPointComponent(_pointsService, _router) {
                    this._pointsService = _pointsService;
                    this._router = _router;
                    this.edited = new core_1.EventEmitter();
                }
                EditPointComponent.prototype.ngOnInit = function () {
                    this.point = new point_1.Point(this.myPoint.issue_id, this.myPoint.problem, this.myPoint.detail, this.myPoint.type, 0, 0, '', this.myPoint._id);
                };
                ;
                EditPointComponent.prototype.onUpdate = function () {
                    var _this = this;
                    this._pointsService.updatePoint(this.point)
                        .subscribe(function (data) {
                        console.log('Success: ', data);
                        _this.myPoint.problem = _this.point.problem;
                        _this.myPoint.detail = _this.point.detail;
                        _this.edited.emit(null);
                    }, function (err) { return console.log('Error: ', err); });
                };
                EditPointComponent.prototype.onCancel = function () {
                    var answer = confirm('Canceling will discard changes. Continue?');
                    if (answer === true) {
                        // Edit does the same thing that cancel would
                        // I'm just using this! :)
                        this.edited.emit(null);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EditPointComponent.prototype, "myPoint", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], EditPointComponent.prototype, "editMode", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], EditPointComponent.prototype, "edited", void 0);
                EditPointComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-edit-point',
                        templateUrl: 'templates/issue/edit-point.tpl.html',
                        providers: [points_service_1.PointsService]
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.Router])
                ], EditPointComponent);
                return EditPointComponent;
            }());
            exports_1("EditPointComponent", EditPointComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvZWRpdC1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFlQyw0QkFDUyxjQUE2QixFQUM3QixPQUFlO29CQURmLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUM3QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQWRkLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBYzdCLENBQUM7Z0JBWjdCLHFDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pCLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXJCLENBQUM7O2dCQUtELHFDQUFRLEdBQVI7b0JBQUEsaUJBV0M7b0JBVkEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDekMsU0FBUyxDQUNWLFVBQUEsSUFBSTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7d0JBQzFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO3dCQUN4QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDeEIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2pDLENBQUM7Z0JBQ0osQ0FBQztnQkFDRCxxQ0FBUSxHQUFSO29CQUNDLElBQUksTUFBTSxHQUFZLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO29CQUMzRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDckIsNkNBQTZDO3dCQUM3QywwQkFBMEI7d0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDO2dCQUNGLENBQUM7Z0JBckNEO29CQUFDLFlBQUssRUFBRTs7bUVBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOztvRUFBQTtnQkFDUjtvQkFBQyxhQUFNLEVBQUU7O2tFQUFBO2dCQVJWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzdCLENBQUM7O3NDQUFBO2dCQXdDRix5QkFBQztZQUFELENBdkNBLEFBdUNDLElBQUE7WUF2Q0QsbURBdUNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9lZGl0LXBvaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnQnO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tZWRpdC1wb2ludCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvZWRpdC1wb2ludC50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbUG9pbnRzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgRWRpdFBvaW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgbXlQb2ludDogSXNzdWU7XG5cdEBJbnB1dCgpIGVkaXRNb2RlOiBib29sZWFuO1xuXHRAT3V0cHV0KCkgZWRpdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cG9pbnQ6IFBvaW50O1xuXHRuZ09uSW5pdCgpOiBhbnkge1xuXHRcdHRoaXMucG9pbnQgPSBuZXcgUG9pbnQoXG5cdFx0XHRcdHRoaXMubXlQb2ludC5pc3N1ZV9pZCxcblx0XHRcdFx0dGhpcy5teVBvaW50LnByb2JsZW0sXG5cdFx0XHRcdHRoaXMubXlQb2ludC5kZXRhaWwsXG5cdFx0XHRcdHRoaXMubXlQb2ludC50eXBlLFxuXHRcdFx0XHQwLDAsJycsXG5cdFx0XHRcdHRoaXMubXlQb2ludC5faWQpO1xuXG5cdH1cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9O1xuXG5cdG9uVXBkYXRlKCkge1xuXHRcdHRoaXMuX3BvaW50c1NlcnZpY2UudXBkYXRlUG9pbnQodGhpcy5wb2ludClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1N1Y2Nlc3M6ICcsIGRhdGEpO1xuXHRcdFx0XHR0aGlzLm15UG9pbnQucHJvYmxlbSA9IHRoaXMucG9pbnQucHJvYmxlbTtcblx0XHRcdFx0dGhpcy5teVBvaW50LmRldGFpbCA9IHRoaXMucG9pbnQuZGV0YWlsO1xuXHRcdFx0XHR0aGlzLmVkaXRlZC5lbWl0KG51bGwpO1xuXHRcdFx0fSxcblx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHRcdCk7XG5cdH1cblx0b25DYW5jZWwoKXtcblx0XHRsZXQgYW5zd2VyOiBib29sZWFuID0gY29uZmlybSgnQ2FuY2VsaW5nIHdpbGwgZGlzY2FyZCBjaGFuZ2VzLiBDb250aW51ZT8nKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHQvLyBFZGl0IGRvZXMgdGhlIHNhbWUgdGhpbmcgdGhhdCBjYW5jZWwgd291bGRcblx0XHRcdC8vIEknbSBqdXN0IHVzaW5nIHRoaXMhIDopXG5cdFx0XHR0aGlzLmVkaXRlZC5lbWl0KG51bGwpO1xuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
