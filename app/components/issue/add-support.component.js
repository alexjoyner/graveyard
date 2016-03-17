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
            // Parent is points-list
            AddSupportComponent = (function () {
                function AddSupportComponent(_supportsService, _pointsService) {
                    this._supportsService = _supportsService;
                    this._pointsService = _pointsService;
                    this.added = new core_1.EventEmitter();
                }
                ;
                AddSupportComponent.prototype.createSupport = function () {
                    this._supportsService.insertSupport(this.newSupport);
                    this._pointsService.insertSupport(this.pointIndex, this.newSupport);
                    this.added.emit(null);
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
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], AddSupportComponent.prototype, "added", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUEsd0JBQXdCO1lBS3hCO2dCQU1DLDZCQUNTLGdCQUFpQyxFQUNqQyxjQUE2QjtvQkFEN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBSjVCLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBSWQsQ0FBQzs7Z0JBRTNDLDJDQUFhLEdBQWI7b0JBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFoQkQ7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0VBQUE7Z0JBQ2pCO29CQUFDLFlBQUssQ0FBQyxZQUFZLENBQUM7O3VFQUFBO2dCQUVwQjtvQkFBQyxhQUFNLEVBQUU7O2tFQUFBO2dCQVJWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLHNDQUFzQztxQkFDdEQsQ0FBQzs7dUNBQUE7Z0JBbUJGLDBCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCxxREFrQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2FkZC1zdXBwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1N1cHBvcnR9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0JztcbmltcG9ydCB7U3VwcG9ydHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydHMuc2VydmljZSc7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG4vLyBQYXJlbnQgaXMgcG9pbnRzLWxpc3RcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tYWRkLXN1cHBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2FkZC1zdXBwb3J0LnRwbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBZGRTdXBwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoJ3BvaW50SWQnKSBwb2ludElkOiBzdHJpbmc7XG5cdEBJbnB1dCgncG9pbnRJbmRleCcpIHBvaW50SW5kZXg6IG51bWJlcjtcblx0bmV3U3VwcG9ydDogU3VwcG9ydDtcblx0QE91dHB1dCgpIGFkZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9zdXBwb3J0c1NlcnZpY2U6IFN1cHBvcnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9wb2ludHNTZXJ2aWNlOiBQb2ludHNTZXJ2aWNlKSB7IH07XG5cblx0Y3JlYXRlU3VwcG9ydCgpe1xuXHRcdHRoaXMuX3N1cHBvcnRzU2VydmljZS5pbnNlcnRTdXBwb3J0KHRoaXMubmV3U3VwcG9ydCk7XG5cdFx0dGhpcy5fcG9pbnRzU2VydmljZS5pbnNlcnRTdXBwb3J0KHRoaXMucG9pbnRJbmRleCwgdGhpcy5uZXdTdXBwb3J0KTtcblx0XHR0aGlzLmFkZGVkLmVtaXQobnVsbCk7XG5cdH1cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMubmV3U3VwcG9ydCA9IG5ldyBTdXBwb3J0KHRoaXMucG9pbnRJZCwgJycsICcnLCAnJywgJycsIDAsIDApO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
