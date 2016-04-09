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
                MainPointComponent.prototype.isOwner = function (id) {
                    return (id === this._usersService.profile._id);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQyw0QkFDUyxjQUE2QixFQUM3QixhQUEyQjtvQkFEM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUoxQixZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxpQkFBWSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFHekIsQ0FBQzs7Z0JBQ3ZDLHNDQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsS0FBaUIsRUFBRSxVQUFtQjtvQkFDN0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDNUIsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sR0FBRyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs0QkFDdEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDOUQsQ0FBQztnQkFDRixDQUFDO2dCQUNELHdDQUFXLEdBQVg7b0JBQUEsaUJBWUM7b0JBWEEsSUFBSSxNQUFNLEdBQVksT0FBTyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7b0JBQzlHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsY0FBYzs2QkFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7NkJBQ3ZCLFNBQVMsQ0FDVixVQUFBLE9BQU87NEJBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ3hCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUMvQixDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCx5Q0FBWSxHQUFaLFVBQWEsTUFBYztvQkFDMUIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNELG9DQUFPLEdBQVAsVUFBUSxFQUFVO29CQUNqQixNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBcENEO29CQUFDLFlBQUssQ0FBQyxPQUFPLENBQUM7O2lFQUFBO2dCQUNmO29CQUFDLGFBQU0sRUFBRTs7bUVBQUE7Z0JBQ1Q7b0JBQUMsYUFBTSxFQUFFOzt3RUFBQTtnQkFUVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSx5Q0FBa0IsQ0FBQzt3QkFDbkQsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQ2xDLENBQUM7O3NDQUFBO2dCQXVDRix5QkFBQztZQUFELENBdENBLEFBc0NDLElBQUE7WUF0Q0QsbURBc0NDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9tYWluLXBvaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50JztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7RWRpdFBvaW50Q29tcG9uZW50fSBmcm9tICcuL2VkaXQtcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1tYWluLXBvaW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9tYWluLXBvaW50LnRwbC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbVm90ZUNlbGxDb21wb25lbnQsIEVkaXRQb2ludENvbXBvbmVudF0sXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9wb2ludC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluUG9pbnRDb21wb25lbnQge1xuXHRASW5wdXQoJ3BvaW50JykgcG9pbnQ6IFBvaW50O1xuXHRAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzbW9vdGhTY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9wb2ludHNTZXJ2aWNlOiBQb2ludHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKXt9O1xuXHRlZGl0UG9pbnQocG9pbnQ6IFBvaW50LCBldmVudDogTW91c2VFdmVudCwgY2FuY2VsRmxhZzogYm9vbGVhbikge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMuc21vb3RoU2Nyb2xsLmVtaXQobnVsbClcblx0XHRsZXQgYW5zd2VyOiBib29sZWFuO1xuXHRcdGlmIChjYW5jZWxGbGFnKSB7XG5cdFx0XHRhbnN3ZXIgPSBjb25maXJtKCdDYW5jZWxpbmcgd2lsbCBkaXNjYXJkIGNoYW5nZXMuIENvbnRpbnVlPycpO1xuXHRcdH1cblx0XHRpZiAoYW5zd2VyIHx8ICFjYW5jZWxGbGFnKSB7XG5cdFx0XHR0aGlzLnBvaW50WydlZGl0UG9pbnQnXSA9XG5cdFx0XHRcdCh0aGlzLnBvaW50WydlZGl0UG9pbnQnXSkgPyAhdGhpcy5wb2ludFsnZWRpdElzc3VlJ10gOiB0cnVlO1xuXHRcdH1cblx0fVxuXHRkZWxldGVQb2ludCgpe1xuXHRcdGxldCBhbnN3ZXI6IGJvb2xlYW4gPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbWFpbiBwb2ludD8gVGhpcyBhY3Rpb24gY2FuJ3QgYmUgdW5kb25lYCk7XG5cdFx0aWYgKGFuc3dlciA9PT0gdHJ1ZSkge1xuXHRcdFx0dGhpcy5fcG9pbnRzU2VydmljZVxuXHRcdFx0XHQuZGVsZXRlUG9pbnQodGhpcy5wb2ludClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0c3VjY2VzcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVkLmVtaXQobnVsbClcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnI6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0c3RyaW5nVG9EYXRlKHN0cmluZzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHN0cmluZyk7XG5cdH1cblx0aXNPd25lcihpZDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIChpZCA9PT0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuX2lkKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
