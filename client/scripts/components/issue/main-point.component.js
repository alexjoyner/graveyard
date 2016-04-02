System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/point', '../../shared/points.service', './edit-point.component'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, point_1, points_service_1, edit_point_component_1;
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
            }],
        execute: function() {
            MainPointComponent = (function () {
                function MainPointComponent(_pointsService) {
                    this._pointsService = _pointsService;
                    this.removed = new core_1.EventEmitter();
                }
                ;
                MainPointComponent.prototype.editPoint = function (point, event, cancelFlag) {
                    event.stopPropagation();
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
                __decorate([
                    core_1.Input('point'), 
                    __metadata('design:type', point_1.Point)
                ], MainPointComponent.prototype, "point", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MainPointComponent.prototype, "removed", void 0);
                MainPointComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-main-point',
                        templateUrl: 'templates/issue/main-point.tpl.html',
                        directives: [vote_cell_component_1.VoteCellComponent, edit_point_component_1.EditPointComponent],
                        styleUrls: ['styles/point.css']
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService])
                ], MainPointComponent);
                return MainPointComponent;
            }());
            exports_1("MainPointComponent", MainPointComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFHQyw0QkFDUyxjQUE2QjtvQkFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBRjVCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBRWxCLENBQUM7O2dCQUN6QyxzQ0FBUyxHQUFULFVBQVUsS0FBWSxFQUFFLEtBQWlCLEVBQUUsVUFBbUI7b0JBQzdELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sR0FBRyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs0QkFDdEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDOUQsQ0FBQztnQkFDRixDQUFDO2dCQUNELHdDQUFXLEdBQVg7b0JBQUEsaUJBWUM7b0JBWEEsSUFBSSxNQUFNLEdBQVksT0FBTyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7b0JBQzlHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsY0FBYzs2QkFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7NkJBQ3ZCLFNBQVMsQ0FDVixVQUFBLE9BQU87NEJBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ3hCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUMvQixDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkEzQkQ7b0JBQUMsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7aUVBQUE7Z0JBQ2Y7b0JBQUMsYUFBTSxFQUFFOzttRUFBQTtnQkFSVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixXQUFXLEVBQUUscUNBQXFDO3dCQUNsRCxVQUFVLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSx5Q0FBa0IsQ0FBQzt3QkFDbkQsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQ2xDLENBQUM7O3NDQUFBO2dCQThCRix5QkFBQztZQUFELENBN0JBLEFBNkJDLElBQUE7WUE3QkQsbURBNkJDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9pc3N1ZS9tYWluLXBvaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWb3RlQ2VsbENvbXBvbmVudH0gZnJvbSAnLi4vLi4vc2hhcmVkL3ZvdGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50JztcbmltcG9ydCB7UG9pbnRzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3BvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7RWRpdFBvaW50Q29tcG9uZW50fSBmcm9tICcuL2VkaXQtcG9pbnQuY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tbWFpbi1wb2ludCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvbWFpbi1wb2ludC50cGwuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1ZvdGVDZWxsQ29tcG9uZW50LCBFZGl0UG9pbnRDb21wb25lbnRdLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvcG9pbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWFpblBvaW50Q29tcG9uZW50IHtcblx0QElucHV0KCdwb2ludCcpIHBvaW50OiBQb2ludDtcblx0QE91dHB1dCgpIHJlbW92ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9wb2ludHNTZXJ2aWNlOiBQb2ludHNTZXJ2aWNlKXt9O1xuXHRlZGl0UG9pbnQocG9pbnQ6IFBvaW50LCBldmVudDogTW91c2VFdmVudCwgY2FuY2VsRmxhZzogYm9vbGVhbikge1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGxldCBhbnN3ZXI6IGJvb2xlYW47XG5cdFx0aWYgKGNhbmNlbEZsYWcpIHtcblx0XHRcdGFuc3dlciA9IGNvbmZpcm0oJ0NhbmNlbGluZyB3aWxsIGRpc2NhcmQgY2hhbmdlcy4gQ29udGludWU/Jyk7XG5cdFx0fVxuXHRcdGlmIChhbnN3ZXIgfHwgIWNhbmNlbEZsYWcpIHtcblx0XHRcdHRoaXMucG9pbnRbJ2VkaXRQb2ludCddID1cblx0XHRcdFx0KHRoaXMucG9pbnRbJ2VkaXRQb2ludCddKSA/ICF0aGlzLnBvaW50WydlZGl0SXNzdWUnXSA6IHRydWU7XG5cdFx0fVxuXHR9XG5cdGRlbGV0ZVBvaW50KCl7XG5cdFx0bGV0IGFuc3dlcjogYm9vbGVhbiA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBtYWluIHBvaW50PyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9wb2ludHNTZXJ2aWNlXG5cdFx0XHRcdC5kZWxldGVQb2ludCh0aGlzLnBvaW50KVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRzdWNjZXNzID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZWQuZW1pdChudWxsKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0VycjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
