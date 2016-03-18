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
                    this.newSupport = new support_1.Support(this.pointId, '', '', '', '', 0, 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUEsd0JBQXdCO1lBS3hCO2dCQU9DLDZCQUNTLGdCQUFpQyxFQUNqQyxjQUE2QjtvQkFEN0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBTjVCLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBRWhELGVBQVUsR0FBWSxLQUFLLENBQUM7Z0JBSU0sQ0FBQzs7Z0JBRTNDLDJDQUFhLEdBQWI7b0JBQUEsaUJBUUM7b0JBUEEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3lCQUNuRCxTQUFTLENBQ1QsVUFBQSxJQUFJO3dCQUNILEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDbEMsQ0FBQztnQkFDSCxDQUFDO2dCQUNELHNDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDO2dCQUNELG9DQUFNLEdBQU4sVUFBTyxHQUFXO29CQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7b0JBQzVCLE1BQU0sQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBQ1gsS0FBSyxTQUFTOzRCQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOzRCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7NEJBQ2hDLEtBQUssQ0FBQTt3QkFDTjs0QkFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOzRCQUM1QixLQUFLLENBQUE7b0JBQ1AsQ0FBQztnQkFDRixDQUFDO2dCQWxDRDtvQkFBQyxZQUFLLENBQUMsU0FBUyxDQUFDOztvRUFBQTtnQkFDakI7b0JBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7dUVBQUE7Z0JBQ3BCO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBUFY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsc0NBQXNDO3FCQUN0RCxDQUFDOzt1Q0FBQTtnQkFxQ0YsMEJBQUM7WUFBRCxDQXBDQSxBQW9DQyxJQUFBO1lBcENELHFEQW9DQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnQnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbi8vIFBhcmVudCBpcyBwb2ludHMtbGlzdFxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1hZGQtc3VwcG9ydCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvYWRkLXN1cHBvcnQudHBsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFkZFN1cHBvcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdEBJbnB1dCgncG9pbnRJZCcpIHBvaW50SWQ6IHN0cmluZztcblx0QElucHV0KCdwb2ludEluZGV4JykgcG9pbnRJbmRleDogbnVtYmVyO1xuXHRAT3V0cHV0KCkgYWRkZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRuZXdTdXBwb3J0OiBTdXBwb3J0O1xuXHRwcml2YXRlIHNob3dTb3VyY2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9zdXBwb3J0c1NlcnZpY2U6IFN1cHBvcnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9wb2ludHNTZXJ2aWNlOiBQb2ludHNTZXJ2aWNlKSB7IH07XG5cblx0Y3JlYXRlU3VwcG9ydCgpe1xuXHRcdHRoaXMuX3N1cHBvcnRzU2VydmljZS5pbnNlcnRTdXBwb3J0KHRoaXMubmV3U3VwcG9ydClcblx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdHRoaXMuYWRkZWQuZW1pdChudWxsKTtcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0KTtcblx0fVxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5uZXdTdXBwb3J0ID0gbmV3IFN1cHBvcnQodGhpcy5wb2ludElkLCAnJywgJycsICcnLCAnJywgMCwgMCk7XG5cdH1cblx0c2V0VGFnKHRhZzogc3RyaW5nKXtcblx0XHR0aGlzLm5ld1N1cHBvcnQudGFnID0gJ3RhZyc7XG5cdFx0c3dpdGNoKHRhZyl7XG5cdFx0XHRjYXNlICdvcGluaW9uJzpcblx0XHRcdFx0dGhpcy5zaG93U291cmNlID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5zb3VyY2UgPSAnbm9uZSc7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aGlzLnNob3dTb3VyY2UgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLm5ld1N1cHBvcnQuc291cmNlID0gJyc7XG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
