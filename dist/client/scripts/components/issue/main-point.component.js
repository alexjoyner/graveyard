System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/point', '../../shared/points.service', './edit-point.component', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, point_1, points_service_1, edit_point_component_1, users_service_1;
    var MainPointComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vote_cell_component_1_1) {
                vote_cell_component_1 = vote_cell_component_1_1;
            },
            function (point_1_1) {
                point_1 = point_1_1;
            },
            function (points_service_1_1) {
                points_service_1 = points_service_1_1;
            },
            function (edit_point_component_1_1) {
                edit_point_component_1 = edit_point_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            MainPointComponent = (function () {
                function MainPointComponent(_pointsService, _usersService) {
                    this._pointsService = _pointsService;
                    this._usersService = _usersService;
                    this.removed = new core_1.EventEmitter();
                    this.smoothScroll = new core_1.EventEmitter();
                }
                ;
                MainPointComponent.prototype.editPoint = function (point, event, cancelFlag) {
                    event.stopPropagation();
                    this.smoothScroll.emit(null);
                    var answer;
                    if (cancelFlag) {
                        answer = confirm('Canceling will discard changes. Continue?');
                    }
                    if (answer || !cancelFlag) {
                        this.point['editPoint'] =
                            (this.point['editPoint']) ? !this.point['editIssue'] : true;
                    }
                };
                MainPointComponent.prototype.deletePoint = function () {
                    var _this = this;
                    var answer = confirm("Are you sure you want to delete this main point? This action can't be undone");
                    if (answer === true) {
                        this._pointsService
                            .deletePoint(this.point)
                            .subscribe(function (success) {
                            _this.removed.emit(null);
                        }, function (err) { return console.log('Err: ', err); });
                    }
                };
                MainPointComponent.prototype.stringToDate = function (string) {
                    return new Date(string);
                };
                MainPointComponent.prototype.isOwner = function (username) {
                    return (username === this._usersService.profile.email);
                };
                __decorate([
                    core_1.Input('point'), 
                    __metadata('design:type', point_1.Point)
                ], MainPointComponent.prototype, "point", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MainPointComponent.prototype, "removed", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MainPointComponent.prototype, "smoothScroll", void 0);
                MainPointComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-main-point',
                        templateUrl: 'templates/issue/main-point.tpl.html',
                        directives: [vote_cell_component_1.VoteCellComponent, edit_point_component_1.EditPointComponent],
                        styleUrls: ['styles/point.css']
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, users_service_1.UsersService])
                ], MainPointComponent);
                return MainPointComponent;
            }());
            exports_1("MainPointComponent", MainPointComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQyw0QkFDUyxjQUE2QixFQUM3QixhQUEyQjtvQkFEM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUoxQixZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxpQkFBWSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFHekIsQ0FBQzs7Z0JBQ3ZDLHNDQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsS0FBaUIsRUFBRSxVQUFtQjtvQkFDN0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDNUIsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sR0FBRyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs0QkFDdEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDOUQsQ0FBQztnQkFDRixDQUFDO2dCQUNELHdDQUFXLEdBQVg7b0JBQUEsaUJBWUM7b0JBWEEsSUFBSSxNQUFNLEdBQVksT0FBTyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7b0JBQzlHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsY0FBYzs2QkFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7NkJBQ3ZCLFNBQVMsQ0FDVixVQUFBLE9BQU87NEJBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ3hCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUMvQixDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCx5Q0FBWSxHQUFaLFVBQWEsTUFBYztvQkFDMUIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNELG9DQUFPLEdBQVAsVUFBUSxRQUFnQjtvQkFDdkIsTUFBTSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO2dCQXBDRDtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOztpRUFBQTtnQkFDZjtvQkFBQyxhQUFNLEVBQUU7O21FQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7d0VBQUE7Z0JBVFY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsVUFBVSxFQUFFLENBQUMsdUNBQWlCLEVBQUUseUNBQWtCLENBQUM7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUNsQyxDQUFDOztzQ0FBQTtnQkF1Q0YseUJBQUM7WUFBRCxDQXRDQSxBQXNDQyxJQUFBO1lBdENELG1EQXNDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludCc7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG5pbXBvcnQge0VkaXRQb2ludENvbXBvbmVudH0gZnJvbSAnLi9lZGl0LXBvaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tbWFpbi1wb2ludCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvbWFpbi1wb2ludC50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1ZvdGVDZWxsQ29tcG9uZW50LCBFZGl0UG9pbnRDb21wb25lbnRdLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvcG9pbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFpblBvaW50Q29tcG9uZW50IHtcblx0QElucHV0KCdwb2ludCcpIHBvaW50OiBQb2ludDtcblx0QE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgc21vb3RoU2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9pbnRzU2VydmljZTogUG9pbnRzU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSl7fTtcblx0ZWRpdFBvaW50KHBvaW50OiBQb2ludCwgZXZlbnQ6IE1vdXNlRXZlbnQsIGNhbmNlbEZsYWc6IGJvb2xlYW4pIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnNtb290aFNjcm9sbC5lbWl0KG51bGwpXG5cdFx0bGV0IGFuc3dlcjogYm9vbGVhbjtcblx0XHRpZiAoY2FuY2VsRmxhZykge1xuXHRcdFx0YW5zd2VyID0gY29uZmlybSgnQ2FuY2VsaW5nIHdpbGwgZGlzY2FyZCBjaGFuZ2VzLiBDb250aW51ZT8nKTtcblx0XHR9XG5cdFx0aWYgKGFuc3dlciB8fCAhY2FuY2VsRmxhZykge1xuXHRcdFx0dGhpcy5wb2ludFsnZWRpdFBvaW50J10gPVxuXHRcdFx0XHQodGhpcy5wb2ludFsnZWRpdFBvaW50J10pID8gIXRoaXMucG9pbnRbJ2VkaXRJc3N1ZSddIDogdHJ1ZTtcblx0XHR9XG5cdH1cblx0ZGVsZXRlUG9pbnQoKXtcblx0XHRsZXQgYW5zd2VyOiBib29sZWFuID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIG1haW4gcG9pbnQ/IFRoaXMgYWN0aW9uIGNhbid0IGJlIHVuZG9uZWApO1xuXHRcdGlmIChhbnN3ZXIgPT09IHRydWUpIHtcblx0XHRcdHRoaXMuX3BvaW50c1NlcnZpY2Vcblx0XHRcdFx0LmRlbGV0ZVBvaW50KHRoaXMucG9pbnQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdHN1Y2Nlc3MgPT4ge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlZC5lbWl0KG51bGwpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyOiAnLCBlcnIpXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdHN0cmluZ1RvRGF0ZShzdHJpbmc6IHN0cmluZykge1xuXHRcdHJldHVybiBuZXcgRGF0ZShzdHJpbmcpO1xuXHR9XG5cdGlzT3duZXIodXNlcm5hbWU6IHN0cmluZykge1xuXHRcdHJldHVybiAodXNlcm5hbWUgPT09IHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlLmVtYWlsKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
