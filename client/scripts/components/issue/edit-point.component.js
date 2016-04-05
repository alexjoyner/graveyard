System.register(['angular2/core', '../../shared/point', '../../shared/points.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, point_1, points_service_1, router_1;
    var EditPointComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (point_1_1) {
                point_1 = point_1_1;
            },
            function (points_service_1_1) {
                points_service_1 = points_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EditPointComponent = (function () {
                function EditPointComponent(_pointsService, _router) {
                    this._pointsService = _pointsService;
                    this._router = _router;
                    this.edited = new core_1.EventEmitter();
                }
                EditPointComponent.prototype.ngOnInit = function () {
                    this.point = new point_1.Point(this.myPoint.issue_id, this.myPoint.problem, this.myPoint.detail, this.myPoint.type, 0, 0, '', this.myPoint.ownerId, this.myPoint.ownerUsername, this.myPoint._id);
                };
                ;
                EditPointComponent.prototype.onUpdate = function () {
                    var _this = this;
                    this._pointsService.updatePoint(this.point)
                        .subscribe(function (data) {
                        console.log('Success: ', data);
                        _this.myPoint.problem = _this.point.problem;
                        _this.myPoint.detail = _this.point.detail;
                        _this.edited.emit(null);
                    }, function (err) { return console.log('Error: ', err); });
                };
                EditPointComponent.prototype.onCancel = function () {
                    var answer = confirm('Canceling will discard changes. Continue?');
                    if (answer === true) {
                        // Edit does the same thing that cancel would
                        // I'm just using this! :)
                        this.edited.emit(null);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EditPointComponent.prototype, "myPoint", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], EditPointComponent.prototype, "editMode", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], EditPointComponent.prototype, "edited", void 0);
                EditPointComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-edit-point',
                        templateUrl: 'templates/issue/edit-point.tpl.html',
                        providers: [points_service_1.PointsService]
                    }), 
                    __metadata('design:paramtypes', [points_service_1.PointsService, router_1.Router])
                ], EditPointComponent);
                return EditPointComponent;
            }());
            exports_1("EditPointComponent", EditPointComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvZWRpdC1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFpQkMsNEJBQ1MsY0FBNkIsRUFDN0IsT0FBZTtvQkFEZixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFDN0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFoQmQsV0FBTSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFnQjdCLENBQUM7Z0JBZDdCLHFDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pCLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFckIsQ0FBQzs7Z0JBS0QscUNBQVEsR0FBUjtvQkFBQSxpQkFXQztvQkFWQSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUN6QyxTQUFTLENBQ1YsVUFBQSxJQUFJO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzt3QkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDakMsQ0FBQztnQkFDSixDQUFDO2dCQUNELHFDQUFRLEdBQVI7b0JBQ0MsSUFBSSxNQUFNLEdBQVksT0FBTyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7b0JBQzNFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQiw2Q0FBNkM7d0JBQzdDLDBCQUEwQjt3QkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0YsQ0FBQztnQkF2Q0Q7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O29FQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBUlY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDN0IsQ0FBQzs7c0NBQUE7Z0JBMENGLHlCQUFDO1lBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtZQXpDRCxtREF5Q0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2VkaXQtcG9pbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludCc7XG5pbXBvcnQge1BvaW50c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1lZGl0LXBvaW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pc3N1ZS9lZGl0LXBvaW50LnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtQb2ludHNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0UG9pbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRASW5wdXQoKSBteVBvaW50OiBJc3N1ZTtcblx0QElucHV0KCkgZWRpdE1vZGU6IGJvb2xlYW47XG5cdEBPdXRwdXQoKSBlZGl0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwb2ludDogUG9pbnQ7XG5cdG5nT25Jbml0KCk6IGFueSB7XG5cdFx0dGhpcy5wb2ludCA9IG5ldyBQb2ludChcblx0XHRcdFx0dGhpcy5teVBvaW50Lmlzc3VlX2lkLFxuXHRcdFx0XHR0aGlzLm15UG9pbnQucHJvYmxlbSxcblx0XHRcdFx0dGhpcy5teVBvaW50LmRldGFpbCxcblx0XHRcdFx0dGhpcy5teVBvaW50LnR5cGUsXG5cdFx0XHRcdDAsMCwnJyxcblx0XHRcdFx0dGhpcy5teVBvaW50Lm93bmVySWQsXG5cdFx0XHRcdHRoaXMubXlQb2ludC5vd25lclVzZXJuYW1lLFxuXHRcdFx0XHR0aGlzLm15UG9pbnQuX2lkKTtcblxuXHR9XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3BvaW50c1NlcnZpY2U6IFBvaW50c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfTtcblxuXHRvblVwZGF0ZSgpIHtcblx0XHR0aGlzLl9wb2ludHNTZXJ2aWNlLnVwZGF0ZVBvaW50KHRoaXMucG9pbnQpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdTdWNjZXNzOiAnLCBkYXRhKTtcblx0XHRcdFx0dGhpcy5teVBvaW50LnByb2JsZW0gPSB0aGlzLnBvaW50LnByb2JsZW07XG5cdFx0XHRcdHRoaXMubXlQb2ludC5kZXRhaWwgPSB0aGlzLnBvaW50LmRldGFpbDtcblx0XHRcdFx0dGhpcy5lZGl0ZWQuZW1pdChudWxsKTtcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpXG5cdFx0XHQpO1xuXHR9XG5cdG9uQ2FuY2VsKCl7XG5cdFx0bGV0IGFuc3dlcjogYm9vbGVhbiA9IGNvbmZpcm0oJ0NhbmNlbGluZyB3aWxsIGRpc2NhcmQgY2hhbmdlcy4gQ29udGludWU/Jyk7XG5cdFx0aWYgKGFuc3dlciA9PT0gdHJ1ZSkge1xuXHRcdFx0Ly8gRWRpdCBkb2VzIHRoZSBzYW1lIHRoaW5nIHRoYXQgY2FuY2VsIHdvdWxkXG5cdFx0XHQvLyBJJ20ganVzdCB1c2luZyB0aGlzISA6KVxuXHRcdFx0dGhpcy5lZGl0ZWQuZW1pdChudWxsKTtcblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
