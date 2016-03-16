System.register(['angular2/core', '../../shared/support', '../../shared/supports.service', '../../shared/points.service'], function(exports_1, context_1) {
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
    var core_1, support_1, supports_service_1, points_service_1;
    var AddSupportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (support_1_1) {
                support_1 = support_1_1;
            },
            function (supports_service_1_1) {
                supports_service_1 = supports_service_1_1;
            },
            function (points_service_1_1) {
                points_service_1 = points_service_1_1;
            }],
        execute: function() {
            AddSupportComponent = (function () {
                function AddSupportComponent(_supportsService, _pointsService) {
                    this._supportsService = _supportsService;
                    this._pointsService = _pointsService;
                }
                ;
                AddSupportComponent.prototype.createSupport = function () {
                    this._supportsService.insertSupport(this.newSupport);
                    this._pointsService.insertSupport(this.pointIndex, this.newSupport);
                };
                AddSupportComponent.prototype.ngOnInit = function () {
                    this.newSupport = new support_1.Support(this.pointId, '', '', '', '', 0, 0);
                };
                __decorate([
                    core_1.Input('pointId'), 
                    __metadata('design:type', String)
                ], AddSupportComponent.prototype, "pointId", void 0);
                __decorate([
                    core_1.Input('pointIndex'), 
                    __metadata('design:type', Number)
                ], AddSupportComponent.prototype, "pointIndex", void 0);
                AddSupportComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-add-support',
                        templateUrl: 'templates/issue/add-support.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [supports_service_1.SupportsService, points_service_1.PointsService])
                ], AddSupportComponent);
                return AddSupportComponent;
            }());
            exports_1("AddSupportComponent", AddSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBS0MsNkJBQ1MsZ0JBQWlDLEVBQ2pDLGNBQTZCO29CQUQ3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO29CQUNqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtnQkFBSSxDQUFDOztnQkFFM0MsMkNBQWEsR0FBYjtvQkFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3JFLENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLENBQUM7Z0JBZEQ7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0VBQUE7Z0JBQ2pCO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7O3VFQUFBO2dCQU5yQjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7cUJBQ3RELENBQUM7O3VDQUFBO2dCQWlCRiwwQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQscURBZ0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9hZGQtc3VwcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnQnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tYWRkLXN1cHBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2FkZC1zdXBwb3J0LnRwbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBZGRTdXBwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoJ3BvaW50SWQnKSBwb2ludElkOiBzdHJpbmc7XG5cdEBJbnB1dCgncG9pbnRJbmRleCcpIHBvaW50SW5kZXg6IG51bWJlcjtcblx0bmV3U3VwcG9ydDogU3VwcG9ydDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9zdXBwb3J0c1NlcnZpY2U6IFN1cHBvcnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9wb2ludHNTZXJ2aWNlOiBQb2ludHNTZXJ2aWNlKSB7IH07XG5cblx0Y3JlYXRlU3VwcG9ydCgpe1xuXHRcdHRoaXMuX3N1cHBvcnRzU2VydmljZS5pbnNlcnRTdXBwb3J0KHRoaXMubmV3U3VwcG9ydCk7XG5cdFx0dGhpcy5fcG9pbnRzU2VydmljZS5pbnNlcnRTdXBwb3J0KHRoaXMucG9pbnRJbmRleCwgdGhpcy5uZXdTdXBwb3J0KTtcblx0fVxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5uZXdTdXBwb3J0ID0gbmV3IFN1cHBvcnQodGhpcy5wb2ludElkLCAnJywgJycsICcnLCAnJywgMCwgMCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
