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
                    this.showSource = false;
                }
                ;
                AddSupportComponent.prototype.createSupport = function () {
                    var _this = this;
                    this._supportsService.insertSupport(this.newSupport)
                        .subscribe(function (data) {
                        _this.added.emit(null);
                    }, function (err) { return console.log('Error: ', err); });
                };
                AddSupportComponent.prototype.ngOnInit = function () {
                    this.newSupport = new support_1.Support(this.issueId, this.pointId, '', '', '', '', 0, 0);
                };
                AddSupportComponent.prototype.setTag = function (tag) {
                    this.newSupport.tag = 'tag';
                    switch (tag) {
                        case 'opinion':
                            this.showSource = false;
                            this.newSupport.source = 'none';
                            break;
                        default:
                            this.showSource = true;
                            this.newSupport.source = '';
                            break;
                    }
                };
                __decorate([
                    core_1.Input('pointId'), 
                    __metadata('design:type', String)
                ], AddSupportComponent.prototype, "pointId", void 0);
                __decorate([
                    core_1.Input('issueId'), 
                    __metadata('design:type', String)
                ], AddSupportComponent.prototype, "issueId", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUEsd0JBQXdCO1lBS3hCO2dCQVFDLDZCQUNTLGdCQUFpQyxFQUNqQyxjQUE2QjtvQkFEN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBTjVCLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBRWhELGVBQVUsR0FBWSxLQUFLLENBQUM7Z0JBSU0sQ0FBQzs7Z0JBRTNDLDJDQUFhLEdBQWI7b0JBQUEsaUJBUUM7b0JBUEEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3lCQUNuRCxTQUFTLENBQ1QsVUFBQSxJQUFJO3dCQUNILEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDbEMsQ0FBQztnQkFDSCxDQUFDO2dCQUNELHNDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLENBQUM7Z0JBQ0Qsb0NBQU0sR0FBTixVQUFPLEdBQVc7b0JBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDNUIsTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFDWCxLQUFLLFNBQVM7NEJBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs0QkFDaEMsS0FBSyxDQUFBO3dCQUNOOzRCQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOzRCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7NEJBQzVCLEtBQUssQ0FBQTtvQkFDUCxDQUFDO2dCQUNGLENBQUM7Z0JBbkNEO29CQUFDLFlBQUssQ0FBQyxTQUFTLENBQUM7O29FQUFBO2dCQUNqQjtvQkFBQyxZQUFLLENBQUMsU0FBUyxDQUFDOztvRUFBQTtnQkFDakI7b0JBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7dUVBQUE7Z0JBQ3BCO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBUlY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsc0NBQXNDO3FCQUN0RCxDQUFDOzt1Q0FBQTtnQkFzQ0YsMEJBQUM7WUFBRCxDQXJDQSxBQXFDQyxJQUFBO1lBckNELHFEQXFDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnQnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbi8vIFBhcmVudCBpcyBwb2ludHMtbGlzdFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1hZGQtc3VwcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvYWRkLXN1cHBvcnQudHBsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFkZFN1cHBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgncG9pbnRJZCcpIHBvaW50SWQ6IHN0cmluZztcblx0QElucHV0KCdpc3N1ZUlkJykgaXNzdWVJZDogc3RyaW5nO1xuXHRASW5wdXQoJ3BvaW50SW5kZXgnKSBwb2ludEluZGV4OiBudW1iZXI7XG5cdEBPdXRwdXQoKSBhZGRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdG5ld1N1cHBvcnQ6IFN1cHBvcnQ7XG5cdHByaXZhdGUgc2hvd1NvdXJjZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3N1cHBvcnRzU2VydmljZTogU3VwcG9ydHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UpIHsgfTtcblxuXHRjcmVhdGVTdXBwb3J0KCl7XG5cdFx0dGhpcy5fc3VwcG9ydHNTZXJ2aWNlLmluc2VydFN1cHBvcnQodGhpcy5uZXdTdXBwb3J0KVxuXHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5hZGRlZC5lbWl0KG51bGwpO1xuXHRcdFx0fSxcblx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycilcblx0XHQpO1xuXHR9XG5cdG5nT25Jbml0KCk6YW55IHtcblx0XHR0aGlzLm5ld1N1cHBvcnQgPSBuZXcgU3VwcG9ydCh0aGlzLmlzc3VlSWQsIHRoaXMucG9pbnRJZCwgJycsICcnLCAnJywgJycsIDAsIDApO1xuXHR9XG5cdHNldFRhZyh0YWc6IHN0cmluZyl7XG5cdFx0dGhpcy5uZXdTdXBwb3J0LnRhZyA9ICd0YWcnO1xuXHRcdHN3aXRjaCh0YWcpe1xuXHRcdFx0Y2FzZSAnb3Bpbmlvbic6XG5cdFx0XHRcdHRoaXMuc2hvd1NvdXJjZSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm5ld1N1cHBvcnQuc291cmNlID0gJ25vbmUnO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhpcy5zaG93U291cmNlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5uZXdTdXBwb3J0LnNvdXJjZSA9ICcnO1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblx0fVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
