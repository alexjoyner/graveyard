System.register(['angular2/core', '../../shared/vote-cell.component', '../../shared/point', '../../shared/posts.service', './edit-point.component', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, vote_cell_component_1, point_1, posts_service_1, edit_point_component_1, users_service_1;
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
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (edit_point_component_1_1) {
                edit_point_component_1 = edit_point_component_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            MainPointComponent = (function () {
                function MainPointComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
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
                        this._postsService
                            .deletePost(this.point._id)
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
                    __metadata('design:type', (typeof (_a = typeof point_1.Point !== 'undefined' && point_1.Point) === 'function' && _a) || Object)
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
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], MainPointComponent);
                return MainPointComponent;
                var _a;
            }());
            exports_1("MainPointComponent", MainPointComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvbWFpbi1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQyw0QkFDUyxhQUEyQixFQUMzQixhQUEyQjtvQkFEM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBQzNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUoxQixZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQUNoRCxpQkFBWSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFHekIsQ0FBQzs7Z0JBQ3ZDLHNDQUFTLEdBQVQsVUFBVSxLQUFZLEVBQUUsS0FBaUIsRUFBRSxVQUFtQjtvQkFDN0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDNUIsSUFBSSxNQUFlLENBQUM7b0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLE1BQU0sR0FBRyxPQUFPLENBQUMsMkNBQTJDLENBQUMsQ0FBQztvQkFDL0QsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs0QkFDdEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDOUQsQ0FBQztnQkFDRixDQUFDO2dCQUNELHdDQUFXLEdBQVg7b0JBQUEsaUJBWUM7b0JBWEEsSUFBSSxNQUFNLEdBQVksT0FBTyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7b0JBQzlHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsYUFBYTs2QkFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOzZCQUMxQixTQUFTLENBQ1YsVUFBQSxPQUFPOzRCQUNOLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUN4QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDL0IsQ0FBQztvQkFDSixDQUFDO2dCQUNGLENBQUM7Z0JBQ0QseUNBQVksR0FBWixVQUFhLE1BQWM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxvQ0FBTyxHQUFQLFVBQVEsRUFBVTtvQkFDakIsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQXBDRDtvQkFBQyxZQUFLLENBQUMsT0FBTyxDQUFDOztpRUFBQTtnQkFDZjtvQkFBQyxhQUFNLEVBQUU7O21FQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7d0VBQUE7Z0JBVFY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsVUFBVSxFQUFFLENBQUMsdUNBQWlCLEVBQUUseUNBQWtCLENBQUM7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUNsQyxDQUFDOztzQ0FBQTtnQkF1Q0YseUJBQUM7O1lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtZQXRDRCxtREFzQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL21haW4tcG9pbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1ZvdGVDZWxsQ29tcG9uZW50fSBmcm9tICcuLi8uLi9zaGFyZWQvdm90ZS1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9zaGFyZWQvcG9pbnQnO1xuaW1wb3J0IHtQb3N0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0cy5zZXJ2aWNlJztcbmltcG9ydCB7RWRpdFBvaW50Q29tcG9uZW50fSBmcm9tICcuL2VkaXQtcG9pbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1tYWluLXBvaW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9tYWluLXBvaW50LnRwbC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbVm90ZUNlbGxDb21wb25lbnQsIEVkaXRQb2ludENvbXBvbmVudF0sXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9wb2ludC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluUG9pbnRDb21wb25lbnQge1xuXHRASW5wdXQoJ3BvaW50JykgcG9pbnQ6IFBvaW50O1xuXHRAT3V0cHV0KCkgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBzbW9vdGhTY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9wb3N0c1NlcnZpY2U6IFBvc3RzU2VydmljZSxcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSl7fTtcblx0ZWRpdFBvaW50KHBvaW50OiBQb2ludCwgZXZlbnQ6IE1vdXNlRXZlbnQsIGNhbmNlbEZsYWc6IGJvb2xlYW4pIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnNtb290aFNjcm9sbC5lbWl0KG51bGwpXG5cdFx0bGV0IGFuc3dlcjogYm9vbGVhbjtcblx0XHRpZiAoY2FuY2VsRmxhZykge1xuXHRcdFx0YW5zd2VyID0gY29uZmlybSgnQ2FuY2VsaW5nIHdpbGwgZGlzY2FyZCBjaGFuZ2VzLiBDb250aW51ZT8nKTtcblx0XHR9XG5cdFx0aWYgKGFuc3dlciB8fCAhY2FuY2VsRmxhZykge1xuXHRcdFx0dGhpcy5wb2ludFsnZWRpdFBvaW50J10gPVxuXHRcdFx0XHQodGhpcy5wb2ludFsnZWRpdFBvaW50J10pID8gIXRoaXMucG9pbnRbJ2VkaXRJc3N1ZSddIDogdHJ1ZTtcblx0XHR9XG5cdH1cblx0ZGVsZXRlUG9pbnQoKXtcblx0XHRsZXQgYW5zd2VyOiBib29sZWFuID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIG1haW4gcG9pbnQ/IFRoaXMgYWN0aW9uIGNhbid0IGJlIHVuZG9uZWApO1xuXHRcdGlmIChhbnN3ZXIgPT09IHRydWUpIHtcblx0XHRcdHRoaXMuX3Bvc3RzU2VydmljZVxuXHRcdFx0XHQuZGVsZXRlUG9zdCh0aGlzLnBvaW50Ll9pZClcblx0XHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0c3VjY2VzcyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVkLmVtaXQobnVsbClcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnI6ICcsIGVycilcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblx0c3RyaW5nVG9EYXRlKHN0cmluZzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKHN0cmluZyk7XG5cdH1cblx0aXNPd25lcihpZDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIChpZCA9PT0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUuX2lkKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
