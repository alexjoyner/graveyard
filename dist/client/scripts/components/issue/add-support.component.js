System.register(['angular2/core', '../../shared/support', '../../shared/supports.service', '../../shared/points.service', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, support_1, supports_service_1, points_service_1, users_service_1;
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
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            // Parent is points-list
            AddSupportComponent = (function () {
                function AddSupportComponent(_supportsService, _pointsService, _usersService) {
                    this._supportsService = _supportsService;
                    this._pointsService = _pointsService;
                    this._usersService = _usersService;
                    this.added = new core_1.EventEmitter();
                    this.showSource = false;
                }
                ;
                AddSupportComponent.prototype.createSupport = function () {
                    var _this = this;
                    this._supportsService.insertSupport(this.newSupport)
                        .subscribe(function (data) {
                        console.log('NEW SUPPORT: ', data);
                        _this.added.emit(data);
                    }, function (err) { return console.log('Error: ', err); });
                };
                AddSupportComponent.prototype.ngOnInit = function () {
                    this.newSupport = new support_1.Support(this.issueId, this.pointId, '', '', '', 'http://', '', this._usersService.profile._id);
                };
                AddSupportComponent.prototype.setSourceType = function (sourcetype) {
                    this.newSupport.sourcetype = sourcetype;
                    switch (sourcetype) {
                        case 'opinion':
                            this.showSource = false;
                            this.newSupport.source = null;
                            break;
                        default:
                            this.showSource = true;
                            this.newSupport.detail = '';
                            this.newSupport.source = 'http://';
                            break;
                    }
                };
                __decorate([
                    core_1.Input('pointId'), 
                    __metadata('design:type', Number)
                ], AddSupportComponent.prototype, "pointId", void 0);
                __decorate([
                    core_1.Input('issueId'), 
                    __metadata('design:type', Number)
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
                    __metadata('design:paramtypes', [supports_service_1.SupportsService, points_service_1.PointsService, users_service_1.UsersService])
                ], AddSupportComponent);
                return AddSupportComponent;
            }());
            exports_1("AddSupportComponent", AddSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0Esd0JBQXdCO1lBS3hCO2dCQVFDLDZCQUNTLGdCQUFpQyxFQUNqQyxjQUE2QixFQUM3QixhQUEyQjtvQkFGM0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQVAxQixVQUFLLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUVoRCxlQUFVLEdBQVksS0FBSyxDQUFDO2dCQUtJLENBQUM7O2dCQUV6QywyQ0FBYSxHQUFiO29CQUFBLGlCQVNDO29CQVJBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt5QkFDbkQsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDbkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUNsQyxDQUFDO2dCQUNILENBQUM7Z0JBQ0Qsc0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksaUJBQU8sQ0FDNUIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxFQUNaLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELDJDQUFhLEdBQWIsVUFBYyxVQUFrQjtvQkFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO29CQUN4QyxNQUFNLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO3dCQUNsQixLQUFLLFNBQVM7NEJBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDOUIsS0FBSyxDQUFBO3dCQUNOOzRCQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOzRCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7NEJBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQzs0QkFDbkMsS0FBSyxDQUFBO29CQUNQLENBQUM7Z0JBQ0YsQ0FBQztnQkExQ0Q7b0JBQUMsWUFBSyxDQUFDLFNBQVMsQ0FBQzs7b0VBQUE7Z0JBQ2pCO29CQUFDLFlBQUssQ0FBQyxTQUFTLENBQUM7O29FQUFBO2dCQUNqQjtvQkFBQyxZQUFLLENBQUMsWUFBWSxDQUFDOzt1RUFBQTtnQkFDcEI7b0JBQUMsYUFBTSxFQUFFOztrRUFBQTtnQkFSVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFdBQVcsRUFBRSxzQ0FBc0M7cUJBQ3RELENBQUM7O3VDQUFBO2dCQTZDRiwwQkFBQztZQUFELENBNUNBLEFBNENDLElBQUE7WUE1Q0QscURBNENDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9hZGQtc3VwcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTdXBwb3J0fSBmcm9tICcuLi8uLi9zaGFyZWQvc3VwcG9ydCc7XG5pbXBvcnQge1N1cHBvcnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG4vLyBQYXJlbnQgaXMgcG9pbnRzLWxpc3RcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tYWRkLXN1cHBvcnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2FkZC1zdXBwb3J0LnRwbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBZGRTdXBwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXHRASW5wdXQoJ3BvaW50SWQnKSBwb2ludElkOiBudW1iZXI7XG5cdEBJbnB1dCgnaXNzdWVJZCcpIGlzc3VlSWQ6IG51bWJlcjtcblx0QElucHV0KCdwb2ludEluZGV4JykgcG9pbnRJbmRleDogbnVtYmVyO1xuXHRAT3V0cHV0KCkgYWRkZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRuZXdTdXBwb3J0OiBTdXBwb3J0O1xuXHRwcml2YXRlIHNob3dTb3VyY2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9zdXBwb3J0c1NlcnZpY2U6IFN1cHBvcnRzU2VydmljZSxcblx0XHRwcml2YXRlIF9wb2ludHNTZXJ2aWNlOiBQb2ludHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7IH07XG5cblx0Y3JlYXRlU3VwcG9ydCgpe1xuXHRcdHRoaXMuX3N1cHBvcnRzU2VydmljZS5pbnNlcnRTdXBwb3J0KHRoaXMubmV3U3VwcG9ydClcblx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdORVcgU1VQUE9SVDogJywgZGF0YSk7XG5cdFx0XHRcdHRoaXMuYWRkZWQuZW1pdChkYXRhKTtcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0KTtcblx0fVxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5uZXdTdXBwb3J0ID0gbmV3IFN1cHBvcnQoXG5cdFx0XHR0aGlzLmlzc3VlSWQsIFxuXHRcdFx0dGhpcy5wb2ludElkLCBcblx0XHRcdCcnLCAnJywgJycsICdodHRwOi8vJywgJycsXG5cdFx0XHR0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5faWQpO1xuXHR9XG5cdHNldFNvdXJjZVR5cGUoc291cmNldHlwZTogc3RyaW5nKXtcblx0XHR0aGlzLm5ld1N1cHBvcnQuc291cmNldHlwZSA9IHNvdXJjZXR5cGU7XG5cdFx0c3dpdGNoKHNvdXJjZXR5cGUpe1xuXHRcdFx0Y2FzZSAnb3Bpbmlvbic6XG5cdFx0XHRcdHRoaXMuc2hvd1NvdXJjZSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm5ld1N1cHBvcnQuc291cmNlID0gbnVsbDtcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMuc2hvd1NvdXJjZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5kZXRhaWwgPSAnJzsgXG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5zb3VyY2UgPSAnaHR0cDovLyc7XG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
