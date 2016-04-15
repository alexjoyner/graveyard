System.register(['angular2/core', '../../shared/auth.service', '../../shared/user', 'angular2/router', '../../shared/users.service'], function(exports_1, context_1) {
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
    var core_1, auth_service_1, user_1, router_1, users_service_1;
    var AuthContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            AuthContainerComponent = (function () {
                function AuthContainerComponent(_authService, _router, _usersService) {
                    this._authService = _authService;
                    this._router = _router;
                    this._usersService = _usersService;
                    this.user = new user_1.User('', '');
                    this.remember = false;
                    this.mode = 'login';
                }
                ;
                AuthContainerComponent.prototype.login = function () {
                    this._authService.attemptLogin(this.user);
                    ;
                };
                AuthContainerComponent.prototype.signUp = function () {
                    this._authService.attemptSignup(this.user);
                };
                AuthContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'ro-auth-component',
                        templateUrl: 'templates/auth/auth-container.tpl.html',
                        providers: [auth_service_1.AuthService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, users_service_1.UsersService])
                ], AuthContainerComponent);
                return AuthContainerComponent;
            }());
            exports_1("AuthContainerComponent", AuthContainerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0aC9hdXRoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQyxnQ0FDUyxZQUF5QixFQUN6QixPQUFlLEVBQ2YsYUFBMkI7b0JBRjNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQU5wQyxTQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixhQUFRLEdBQVksS0FBSyxDQUFDO29CQUNsQixTQUFJLEdBQVcsT0FBTyxDQUFDO2dCQUlRLENBQUM7O2dCQUV4QyxzQ0FBSyxHQUFMO29CQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUNELHVDQUFNLEdBQU47b0JBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQXBCRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFdBQVcsRUFBRSx3Q0FBd0M7d0JBQ3JELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOzswQ0FBQTtnQkFnQkYsNkJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELDJEQWVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hdXRoL2F1dGgtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcic7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWF1dGgtY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hdXRoL2F1dGgtY29udGFpbmVyLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29udGFpbmVyQ29tcG9uZW50e1xuXHR1c2VyOiBVc2VyID0gbmV3IFVzZXIoJycsICcnKTtcblx0cmVtZW1iZXI6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBtb2RlOiBzdHJpbmcgPSAnbG9naW4nOyBcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7fTtcblxuXHRsb2dpbigpe1xuXHRcdHRoaXMuX2F1dGhTZXJ2aWNlLmF0dGVtcHRMb2dpbih0aGlzLnVzZXIpKTtcblx0fVxuXHRzaWduVXAoKXtcblx0XHR0aGlzLl9hdXRoU2VydmljZS5hdHRlbXB0U2lnbnVwKHRoaXMudXNlcik7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
