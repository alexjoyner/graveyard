System.register(['angular2/core', '../../shared/post', '../../shared/posts.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, post_1, posts_service_1, router_1;
    var EditPointComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EditPointComponent = (function () {
                function EditPointComponent(_postsService, _router) {
                    this._postsService = _postsService;
                    this._router = _router;
                    this.edited = new core_1.EventEmitter();
                }
                EditPointComponent.prototype.ngOnInit = function () {
                    /*title: string,
                    post_type_id: number,
                    parent_id?: number,
                    point_type_id?: number,
                    detail?: string,
                    source?: string,
                    source_type_id?: number*/
                    this.point = new post_1.Post(this.myPoint.title, null, null, null, this.myPoint.detail, null, null, this.myPoint._id);
                };
                ;
                EditPointComponent.prototype.onUpdate = function () {
                    var _this = this;
                    this._postsService.updatePost(this.point)
                        .subscribe(function (data) {
                        console.log('Success: ', data);
                        _this.myPoint.title = _this.point.title;
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
                    __metadata('design:type', post_1.Post)
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
                        providers: [posts_service_1.PostsService]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.Router])
                ], EditPointComponent);
                return EditPointComponent;
            }());
            exports_1("EditPointComponent", EditPointComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvZWRpdC1wb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkF5QkMsNEJBQ1MsYUFBMkIsRUFDM0IsT0FBZTtvQkFEZixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkF4QmQsV0FBTSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkF3QjdCLENBQUM7Z0JBdEI3QixxQ0FBUSxHQUFSO29CQUNDOzs7Ozs7NkNBTXlCO29CQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxDQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFDbEIsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ25CLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQ2hCLENBQUE7Z0JBRUYsQ0FBQzs7Z0JBS0QscUNBQVEsR0FBUjtvQkFBQSxpQkFXQztvQkFWQSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUN2QyxTQUFTLENBQ1YsVUFBQSxJQUFJO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7d0JBQ3hDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FDakMsQ0FBQztnQkFDSixDQUFDO2dCQUNELHFDQUFRLEdBQVI7b0JBQ0MsSUFBSSxNQUFNLEdBQVksT0FBTyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7b0JBQzNFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNyQiw2Q0FBNkM7d0JBQzdDLDBCQUEwQjt3QkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0YsQ0FBQztnQkEvQ0Q7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O29FQUFBO2dCQUNSO29CQUFDLGFBQU0sRUFBRTs7a0VBQUE7Z0JBUlY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsV0FBVyxFQUFFLHFDQUFxQzt3QkFDbEQsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztxQkFDNUIsQ0FBQzs7c0NBQUE7Z0JBa0RGLHlCQUFDO1lBQUQsQ0FqREEsQUFpREMsSUFBQTtZQWpERCxtREFpREMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2VkaXQtcG9pbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3QnO1xuaW1wb3J0IHtQb3N0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWVkaXQtcG9pbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2lzc3VlL2VkaXQtcG9pbnQudHBsLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW1Bvc3RzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgRWRpdFBvaW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgbXlQb2ludDogUG9zdDtcblx0QElucHV0KCkgZWRpdE1vZGU6IGJvb2xlYW47XG5cdEBPdXRwdXQoKSBlZGl0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwb2ludDogUG9zdDtcblx0bmdPbkluaXQoKTogYW55IHtcblx0XHQvKnRpdGxlOiBzdHJpbmcsXG5cdFx0cG9zdF90eXBlX2lkOiBudW1iZXIsXG5cdFx0cGFyZW50X2lkPzogbnVtYmVyLFxuXHRcdHBvaW50X3R5cGVfaWQ/OiBudW1iZXIsXG5cdFx0ZGV0YWlsPzogc3RyaW5nLFxuXHRcdHNvdXJjZT86IHN0cmluZyxcblx0XHRzb3VyY2VfdHlwZV9pZD86IG51bWJlciovXG5cdFx0dGhpcy5wb2ludCA9IG5ldyBQb3N0KFxuXHRcdFx0dGhpcy5teVBvaW50LnRpdGxlLFxuXHRcdFx0bnVsbCxcblx0XHRcdG51bGwsXG5cdFx0XHRudWxsLFxuXHRcdFx0dGhpcy5teVBvaW50LmRldGFpbCxcblx0XHRcdG51bGwsXG5cdFx0XHRudWxsLFxuXHRcdFx0dGhpcy5teVBvaW50Ll9pZFxuXHRcdClcblxuXHR9XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX3Bvc3RzU2VydmljZTogUG9zdHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH07XG5cblx0b25VcGRhdGUoKSB7XG5cdFx0dGhpcy5fcG9zdHNTZXJ2aWNlLnVwZGF0ZVBvc3QodGhpcy5wb2ludClcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ1N1Y2Nlc3M6ICcsIGRhdGEpO1xuXHRcdFx0XHR0aGlzLm15UG9pbnQudGl0bGUgPSB0aGlzLnBvaW50LnRpdGxlO1xuXHRcdFx0XHR0aGlzLm15UG9pbnQuZGV0YWlsID0gdGhpcy5wb2ludC5kZXRhaWw7XG5cdFx0XHRcdHRoaXMuZWRpdGVkLmVtaXQobnVsbCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKVxuXHRcdFx0KTtcblx0fVxuXHRvbkNhbmNlbCgpe1xuXHRcdGxldCBhbnN3ZXI6IGJvb2xlYW4gPSBjb25maXJtKCdDYW5jZWxpbmcgd2lsbCBkaXNjYXJkIGNoYW5nZXMuIENvbnRpbnVlPycpO1xuXHRcdGlmIChhbnN3ZXIgPT09IHRydWUpIHtcblx0XHRcdC8vIEVkaXQgZG9lcyB0aGUgc2FtZSB0aGluZyB0aGF0IGNhbmNlbCB3b3VsZFxuXHRcdFx0Ly8gSSdtIGp1c3QgdXNpbmcgdGhpcyEgOilcblx0XHRcdHRoaXMuZWRpdGVkLmVtaXQobnVsbCk7XG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
