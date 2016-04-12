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
                        this.email = this._usersService.profile.email;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFFQyx5QkFDUyxZQUF5QixFQUN6QixhQUEyQjtvQkFEM0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO2dCQUFFLENBQUM7Z0JBRXZDLDhCQUFJLEdBQUo7b0JBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDL0MsQ0FBQztvQkFDRCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUM7Z0JBQy9DLENBQUM7Z0JBQ0QsZ0NBQU0sR0FBTjtvQkFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQXBCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsa0NBQWtDO3dCQUMvQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7bUNBQUE7Z0JBaUJGLHNCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCw2Q0FnQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL25hdmJhci9uYXZiYXIudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblx0cHJpdmF0ZSBlbWFpbDogc3RyaW5nO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2Upe31cblxuXHRhdXRoKCk6Ym9vbGVhbntcblx0XHRpZiAodGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUpIHtcblx0XHRcdHRoaXMuZW1haWwgPSB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZS5lbWFpbDtcblx0XHR9XG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8IGZhbHNlO1xuXHR9XG5cdGxvZ291dCgpe1xuXHRcdHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
