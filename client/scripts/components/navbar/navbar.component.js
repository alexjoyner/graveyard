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
                    this.email = 'email';
                }
                NavbarComponent.prototype.auth = function () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFFQyx5QkFDUyxZQUF5QixFQUN6QixhQUEyQjtvQkFEM0IsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQUg1QixVQUFLLEdBQVcsT0FBTyxDQUFDO2dCQUdNLENBQUM7Z0JBQ3ZDLDhCQUFJLEdBQUo7b0JBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDO2dCQUMvQyxDQUFDO2dCQUNELGdDQUFNLEdBQU47b0JBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFoQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLGtDQUFrQzt3QkFDL0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQzNCLENBQUM7O21DQUFBO2dCQWFGLHNCQUFDO1lBQUQsQ0FaQSxBQVlDLElBQUE7WUFaRCw2Q0FZQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL25hdmJhci9uYXZiYXIudHBsLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudHtcblx0cHJpdmF0ZSBlbWFpbDogc3RyaW5nID0gJ2VtYWlsJztcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKXt9XG5cdGF1dGgoKTpib29sZWFue1xuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCBmYWxzZTtcblx0fVxuXHRsb2dvdXQoKXtcblx0XHR0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKTtcblx0fVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
