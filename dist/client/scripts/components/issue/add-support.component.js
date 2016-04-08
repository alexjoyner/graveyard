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
                        _this.added.emit(null);
                    }, function (err) { return console.log('Error: ', err); });
                };
                AddSupportComponent.prototype.ngOnInit = function () {
                    this.newSupport = new support_1.Support(this.issueId, this.pointId, '', '', '', 'http://', '', 0, 0, this._usersService.profile._id, this._usersService.profile.email);
                };
                AddSupportComponent.prototype.setTag = function (tag) {
                    this.newSupport.tag = tag;
                    switch (tag) {
                        case 'opinion':
                            this.showSource = false;
                            this.newSupport.source = 'none';
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
                    __metadata('design:paramtypes', [supports_service_1.SupportsService, points_service_1.PointsService, users_service_1.UsersService])
                ], AddSupportComponent);
                return AddSupportComponent;
            }());
            exports_1("AddSupportComponent", AddSupportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0Esd0JBQXdCO1lBS3hCO2dCQVFDLDZCQUNTLGdCQUFpQyxFQUNqQyxjQUE2QixFQUM3QixhQUEyQjtvQkFGM0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtvQkFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQVAxQixVQUFLLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUVoRCxlQUFVLEdBQVksS0FBSyxDQUFDO2dCQUtJLENBQUM7O2dCQUV6QywyQ0FBYSxHQUFiO29CQUFBLGlCQVFDO29CQVBBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt5QkFDbkQsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQ2xDLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxzQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxpQkFBTyxDQUM1QixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxPQUFPLEVBQ1osRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUNELG9DQUFNLEdBQU4sVUFBTyxHQUFXO29CQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQzFCLE1BQU0sQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBQ1gsS0FBSyxTQUFTOzRCQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOzRCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7NEJBQ2hDLEtBQUssQ0FBQTt3QkFDTjs0QkFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOzRCQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7NEJBQ25DLEtBQUssQ0FBQTtvQkFDUCxDQUFDO2dCQUNGLENBQUM7Z0JBMUNEO29CQUFDLFlBQUssQ0FBQyxTQUFTLENBQUM7O29FQUFBO2dCQUNqQjtvQkFBQyxZQUFLLENBQUMsU0FBUyxDQUFDOztvRUFBQTtnQkFDakI7b0JBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7dUVBQUE7Z0JBQ3BCO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBUlY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsc0NBQXNDO3FCQUN0RCxDQUFDOzt1Q0FBQTtnQkE2Q0YsMEJBQUM7WUFBRCxDQTVDQSxBQTRDQyxJQUFBO1lBNUNELHFEQTRDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvYWRkLXN1cHBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U3VwcG9ydH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N1cHBvcnQnO1xuaW1wb3J0IHtTdXBwb3J0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zdXBwb3J0cy5zZXJ2aWNlJztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuLy8gUGFyZW50IGlzIHBvaW50cy1saXN0XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWFkZC1zdXBwb3J0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9hZGQtc3VwcG9ydC50cGwuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQWRkU3VwcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0QElucHV0KCdwb2ludElkJykgcG9pbnRJZDogc3RyaW5nO1xuXHRASW5wdXQoJ2lzc3VlSWQnKSBpc3N1ZUlkOiBzdHJpbmc7XG5cdEBJbnB1dCgncG9pbnRJbmRleCcpIHBvaW50SW5kZXg6IG51bWJlcjtcblx0QE91dHB1dCgpIGFkZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0bmV3U3VwcG9ydDogU3VwcG9ydDtcblx0cHJpdmF0ZSBzaG93U291cmNlOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfc3VwcG9ydHNTZXJ2aWNlOiBTdXBwb3J0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkgeyB9O1xuXG5cdGNyZWF0ZVN1cHBvcnQoKXtcblx0XHR0aGlzLl9zdXBwb3J0c1NlcnZpY2UuaW5zZXJ0U3VwcG9ydCh0aGlzLm5ld1N1cHBvcnQpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHR0aGlzLmFkZGVkLmVtaXQobnVsbCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdCk7XG5cdH1cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMubmV3U3VwcG9ydCA9IG5ldyBTdXBwb3J0KFxuXHRcdFx0dGhpcy5pc3N1ZUlkLCBcblx0XHRcdHRoaXMucG9pbnRJZCwgXG5cdFx0XHQnJywgJycsICcnLCAnaHR0cDovLycsICcnLCAwLCAwLFxuXHRcdFx0dGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuX2lkLFxuXHRcdFx0dGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuZW1haWwpO1xuXHR9XG5cdHNldFRhZyh0YWc6IHN0cmluZyl7XG5cdFx0dGhpcy5uZXdTdXBwb3J0LnRhZyA9IHRhZztcblx0XHRzd2l0Y2godGFnKXtcblx0XHRcdGNhc2UgJ29waW5pb24nOlxuXHRcdFx0XHR0aGlzLnNob3dTb3VyY2UgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5uZXdTdXBwb3J0LnNvdXJjZSA9ICdub25lJztcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRoaXMuc2hvd1NvdXJjZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5kZXRhaWwgPSAnJzsgXG5cdFx0XHRcdHRoaXMubmV3U3VwcG9ydC5zb3VyY2UgPSAnaHR0cDovLyc7XG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXHR9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
