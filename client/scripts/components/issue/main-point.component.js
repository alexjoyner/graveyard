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
                    return (username === this._usersService.profile.local.email);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQyw0QkFDUyxjQUE2QixFQUM3QixhQUEyQjtvQkFEM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUoxQixZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxpQkFBWSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFHekIsQ0FBQzs7Z0JBQ3ZDLHNDQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsS0FBaUIsRUFBRSxVQUFtQjtvQkFDN0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDNUIsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sR0FBRyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs0QkFDdEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDOUQsQ0FBQztnQkFDRixDQUFDO2dCQUNELHdDQUFXLEdBQVg7b0JBQUEsaUJBWUM7b0JBWEEsSUFBSSxNQUFNLEdBQVksT0FBTyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7b0JBQzlHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsY0FBYzs2QkFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7NkJBQ3ZCLFNBQVMsQ0FDVixVQUFBLE9BQU87NEJBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ3hCLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixDQUMvQixDQUFDO29CQUNKLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCx5Q0FBWSxHQUFaLFVBQWEsTUFBYztvQkFDMUIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNELG9DQUFPLEdBQVAsVUFBUSxRQUFnQjtvQkFDdkIsTUFBTSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFwQ0Q7b0JBQUMsWUFBSyxDQUFDLE9BQU8sQ0FBQzs7aUVBQUE7Z0JBQ2Y7b0JBQUMsYUFBTSxFQUFFOzttRUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O3dFQUFBO2dCQVRWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFdBQVcsRUFBRSxxQ0FBcUM7d0JBQ2xELFVBQVUsRUFBRSxDQUFDLHVDQUFpQixFQUFFLHlDQUFrQixDQUFDO3dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDbEMsQ0FBQzs7c0NBQUE7Z0JBdUNGLHlCQUFDO1lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtZQXRDRCxtREFzQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL21haW4tcG9pbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnQnO1xuaW1wb3J0IHtQb2ludHNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtFZGl0UG9pbnRDb21wb25lbnR9IGZyb20gJy4vZWRpdC1wb2ludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcnMuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLW1haW4tcG9pbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL21haW4tcG9pbnQudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtWb3RlQ2VsbENvbXBvbmVudCwgRWRpdFBvaW50Q29tcG9uZW50XSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL3BvaW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1haW5Qb2ludENvbXBvbmVudCB7XG5cdEBJbnB1dCgncG9pbnQnKSBwb2ludDogUG9pbnQ7XG5cdEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHNtb290aFNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2Upe307XG5cdGVkaXRQb2ludChwb2ludDogUG9pbnQsIGV2ZW50OiBNb3VzZUV2ZW50LCBjYW5jZWxGbGFnOiBib29sZWFuKSB7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5zbW9vdGhTY3JvbGwuZW1pdChudWxsKVxuXHRcdGxldCBhbnN3ZXI6IGJvb2xlYW47XG5cdFx0aWYgKGNhbmNlbEZsYWcpIHtcblx0XHRcdGFuc3dlciA9IGNvbmZpcm0oJ0NhbmNlbGluZyB3aWxsIGRpc2NhcmQgY2hhbmdlcy4gQ29udGludWU/Jyk7XG5cdFx0fVxuXHRcdGlmIChhbnN3ZXIgfHwgIWNhbmNlbEZsYWcpIHtcblx0XHRcdHRoaXMucG9pbnRbJ2VkaXRQb2ludCddID1cblx0XHRcdFx0KHRoaXMucG9pbnRbJ2VkaXRQb2ludCddKSA/ICF0aGlzLnBvaW50WydlZGl0SXNzdWUnXSA6IHRydWU7XG5cdFx0fVxuXHR9XG5cdGRlbGV0ZVBvaW50KCl7XG5cdFx0bGV0IGFuc3dlcjogYm9vbGVhbiA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBtYWluIHBvaW50PyBUaGlzIGFjdGlvbiBjYW4ndCBiZSB1bmRvbmVgKTtcblx0XHRpZiAoYW5zd2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLl9wb2ludHNTZXJ2aWNlXG5cdFx0XHRcdC5kZWxldGVQb2ludCh0aGlzLnBvaW50KVxuXHRcdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRzdWNjZXNzID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZWQuZW1pdChudWxsKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0VycjogJywgZXJyKVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRzdHJpbmdUb0RhdGUoc3RyaW5nOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoc3RyaW5nKTtcblx0fVxuXHRpc093bmVyKHVzZXJuYW1lOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gKHVzZXJuYW1lID09PSB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5sb2NhbC5lbWFpbCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
