System.register(['angular2/core', 'angular2/router', '../../shared/auth.service', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1, users_service_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent(_authService, _usersService) {
                    this._authService = _authService;
                    this._usersService = _usersService;
                }
                NavbarComponent.prototype.auth = function () {
                    if (this._usersService.profile) {
                        this.email = this._usersService.profile.local.email;
                    }
                    return localStorage.getItem('token') || false;
                };
                NavbarComponent.prototype.logout = function () {
                    this._authService.logout();
                };
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-navbar',
                        templateUrl: 'templates/navbar/navbar.tpl.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [auth_service_1.AuthService]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, users_service_1.UsersService])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFFQyx5QkFDUyxZQUF5QixFQUN6QixhQUEyQjtvQkFEM0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO2dCQUFFLENBQUM7Z0JBRXZDLDhCQUFJLEdBQUo7b0JBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7b0JBQ3JELENBQUM7b0JBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDO2dCQUMvQyxDQUFDO2dCQUNELGdDQUFNLEdBQU47b0JBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFwQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLGtDQUFrQzt3QkFDL0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O21DQUFBO2dCQWlCRixzQkFBQztZQUFELENBaEJBLEFBZ0JDLElBQUE7WUFoQkQsNkNBZ0JDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm8tbmF2YmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9uYXZiYXIvbmF2YmFyLnRwbC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cdHByaXZhdGUgZW1haWw6IHN0cmluZztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKXt9XG5cblx0YXV0aCgpOmJvb2xlYW57XG5cdFx0aWYgKHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlKSB7XG5cdFx0XHR0aGlzLmVtYWlsID0gdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUubG9jYWwuZW1haWw7XG5cdFx0fVxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCBmYWxzZTtcblx0fVxuXHRsb2dvdXQoKXtcblx0XHR0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
