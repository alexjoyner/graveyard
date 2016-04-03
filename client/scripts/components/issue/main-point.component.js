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
                    __metadata('design:paramtypes', [points_service_1.PointsService])
                ], MainPointComponent);
                return MainPointComponent;
            }());
            exports_1("MainPointComponent", MainPointComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFJQyw0QkFDUyxjQUE2QjtvQkFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBSDVCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQ2hELGlCQUFZLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO2dCQUV2QixDQUFDOztnQkFDekMsc0NBQVMsR0FBVCxVQUFVLEtBQVksRUFBRSxLQUFpQixFQUFFLFVBQW1CO29CQUM3RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO29CQUM1QixJQUFJLE1BQWUsQ0FBQztvQkFDcEIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsTUFBTSxHQUFHLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDOzRCQUN0QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM5RCxDQUFDO2dCQUNGLENBQUM7Z0JBQ0Qsd0NBQVcsR0FBWDtvQkFBQSxpQkFZQztvQkFYQSxJQUFJLE1BQU0sR0FBWSxPQUFPLENBQUMsOEVBQThFLENBQUMsQ0FBQztvQkFDOUcsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxjQUFjOzZCQUNqQixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs2QkFDdkIsU0FBUyxDQUNWLFVBQUEsT0FBTzs0QkFDTixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDeEIsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQy9CLENBQUM7b0JBQ0osQ0FBQztnQkFDRixDQUFDO2dCQTdCRDtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOztpRUFBQTtnQkFDZjtvQkFBQyxhQUFNLEVBQUU7O21FQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7d0VBQUE7Z0JBVFY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsVUFBVSxFQUFFLENBQUMsdUNBQWlCLEVBQUUseUNBQWtCLENBQUM7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUNsQyxDQUFDOztzQ0FBQTtnQkFnQ0YseUJBQUM7WUFBRCxDQS9CQSxBQStCQyxJQUFBO1lBL0JELG1EQStCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Vm90ZUNlbGxDb21wb25lbnR9IGZyb20gJy4uLy4uL3NoYXJlZC92b3RlLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludCc7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG5pbXBvcnQge0VkaXRQb2ludENvbXBvbmVudH0gZnJvbSAnLi9lZGl0LXBvaW50LmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLW1haW4tcG9pbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL21haW4tcG9pbnQudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtWb3RlQ2VsbENvbXBvbmVudCwgRWRpdFBvaW50Q29tcG9uZW50XSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3BvaW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Qb2ludENvbXBvbmVudCB7XG5cdEBJbnB1dCgncG9pbnQnKSBwb2ludDogUG9pbnQ7XG5cdEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHNtb290aFNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2Upe307XG5cdGVkaXRQb2ludChwb2ludDogUG9pbnQsIGV2ZW50OiBNb3VzZUV2ZW50LCBjYW5jZWxGbGFnOiBib29sZWFuKSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5zbW9vdGhTY3JvbGwuZW1pdChudWxsKVxuXHRcdGxldCBhbnN3ZXI6IGJvb2xlYW47XG5cdFx0aWYgKGNhbmNlbEZsYWcpIHtcblx0XHRcdGFuc3dlciA9IGNvbmZpcm0oJ0NhbmNlbGluZyB3aWxsIGRpc2NhcmQgY2hhbmdlcy4gQ29udGludWU/Jyk7XG5cdFx0fVxuXHRcdGlmIChhbnN3ZXIgfHwgIWNhbmNlbEZsYWcpIHtcblx0XHRcdHRoaXMucG9pbnRbJ2VkaXRQb2ludCddID1cblx0XHRcdFx0KHRoaXMucG9pbnRbJ2VkaXRQb2ludCddKSA/ICF0aGlzLnBvaW50WydlZGl0SXNzdWUnXSA6IHRydWU7XG5cdFx0fVxuXHR9XG5cdGRlbGV0ZVBvaW50KCl7XG5cdFx0bGV0IGFuc3dlcjogYm9vbGVhbiA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBtYWluIHBvaW50PyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9wb2ludHNTZXJ2aWNlXG5cdFx0XHRcdC5kZWxldGVQb2ludCh0aGlzLnBvaW50KVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRzdWNjZXNzID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZWQuZW1pdChudWxsKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0VycjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
