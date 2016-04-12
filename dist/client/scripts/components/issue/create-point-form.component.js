System.register(['angular2/core', '../../shared/post', '../../shared/posts.service', 'angular2/router', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, post_1, posts_service_1, router_1, users_service_1;
    var CreatePointFormComponent;
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
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            CreatePointFormComponent = (function () {
                function CreatePointFormComponent(_postsService, _routeParams, _usersService) {
                    this._postsService = _postsService;
                    this._routeParams = _routeParams;
                    this._usersService = _usersService;
                    this.added = new core_1.EventEmitter();
                    this.cancel = new core_1.EventEmitter();
                }
                CreatePointFormComponent.prototype.createPoint = function () {
                    var _this = this;
                    this._postsService.insertPost(this.newPoint)
                        .subscribe(function (pointData) { return _this.added.emit(pointData); }, function (err) { return console.log('err', err); });
                };
                CreatePointFormComponent.prototype.onCancel = function () {
                    this.cancel.emit(null);
                };
                CreatePointFormComponent.prototype.ngOnInit = function () {
                    this._issueId = +this._routeParams.get('id');
                    var stringType = this._routeParams.get('type');
                    switch (stringType) {
                        case 'yes':
                            this._pointType = 1;
                        case 'no':
                            this._pointType = 2;
                    }
                    this.newPoint = new post_1.Post('', 2, this._issueId, this._pointType, '');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CreatePointFormComponent.prototype, "added", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], CreatePointFormComponent.prototype, "cancel", void 0);
                CreatePointFormComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-create-point-form',
                        templateUrl: 'templates/issue/create-point-form.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, router_1.RouteParams, users_service_1.UsersService])
                ], CreatePointFormComponent);
                return CreatePointFormComponent;
            }());
            exports_1("CreatePointFormComponent", CreatePointFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBT0Msa0NBQ1MsYUFBMkIsRUFDM0IsWUFBeUIsRUFDekIsYUFBMkI7b0JBRjNCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFDekIsa0JBQWEsR0FBYixhQUFhLENBQWM7b0JBTjFCLFVBQUssR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7b0JBQzlDLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7Z0JBS2pCLENBQUM7Z0JBRXpDLDhDQUFXLEdBQVg7b0JBQUEsaUJBTUM7b0JBTEEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt5QkFDM0MsU0FBUyxDQUNULFVBQUEsU0FBUyxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQTFCLENBQTBCLEVBQ3hDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQzlCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCwyQ0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixDQUFDO2dCQUNELDJDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDL0MsTUFBTSxDQUFBLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQzt3QkFDbEIsS0FBSyxLQUFLOzRCQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixLQUFLLElBQUk7NEJBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3RCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsQ0FBQztnQkFDakUsQ0FBQztnQkE1QkQ7b0JBQUMsYUFBTSxFQUFFOzt1RUFBQTtnQkFDVDtvQkFBQyxhQUFNLEVBQUU7O3dFQUFBO2dCQVRWO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsV0FBVyxFQUFFLDRDQUE0QztxQkFDNUQsQ0FBQzs7NENBQUE7Z0JBa0NGLCtCQUFDO1lBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtZQWpDRCwrREFpQ0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2lzc3VlL2NyZWF0ZS1wb2ludC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7UG9zdH0gZnJvbSAnLi4vLi4vc2hhcmVkL3Bvc3QnO1xuaW1wb3J0IHtQb3N0c1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9wb3N0cy5zZXJ2aWNlJztcbmltcG9ydCB7Um91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1jcmVhdGUtcG9pbnQtZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvaXNzdWUvY3JlYXRlLXBvaW50LWZvcm0udHBsLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZVBvaW50Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0cHJpdmF0ZSBuZXdQb2ludDogUG9zdDtcblx0cHJpdmF0ZSBfaXNzdWVJZDogbnVtYmVyO1xuXHRwcml2YXRlIF9wb2ludFR5cGU6IG51bWJlcjtcblx0QE91dHB1dCgpIGFkZGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfcG9zdHNTZXJ2aWNlOiBQb3N0c1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfcm91dGVQYXJhbXM6IFJvdXRlUGFyYW1zLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7IH1cblxuXHRjcmVhdGVQb2ludCgpe1xuXHRcdHRoaXMuX3Bvc3RzU2VydmljZS5pbnNlcnRQb3N0KHRoaXMubmV3UG9pbnQpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdHBvaW50RGF0YSA9PiAgdGhpcy5hZGRlZC5lbWl0KHBvaW50RGF0YSksXG5cdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ2VycicsIGVycilcblx0XHQpO1xuXHR9XG5cdG9uQ2FuY2VsKCl7XG5cdFx0dGhpcy5jYW5jZWwuZW1pdChudWxsKTtcblx0fVxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5faXNzdWVJZCA9ICt0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ2lkJyk7XG5cdFx0bGV0IHN0cmluZ1R5cGUgPSB0aGlzLl9yb3V0ZVBhcmFtcy5nZXQoJ3R5cGUnKTtcblx0XHRzd2l0Y2goc3RyaW5nVHlwZSl7XG5cdFx0XHRjYXNlICd5ZXMnOlxuXHRcdFx0XHR0aGlzLl9wb2ludFR5cGUgPSAxO1xuXHRcdFx0Y2FzZSAnbm8nOlxuXHRcdFx0XHR0aGlzLl9wb2ludFR5cGUgPSAyO1xuXHRcdH1cblx0XHR0aGlzLm5ld1BvaW50ID0gbmV3IFBvc3QoJycsMix0aGlzLl9pc3N1ZUlkLHRoaXMuX3BvaW50VHlwZSwnJyk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
