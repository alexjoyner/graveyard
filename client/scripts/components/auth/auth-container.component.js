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
                    var _this = this;
                    this._authService.attemptLogin(this.user)
                        .subscribe(function (data) {
                        //if(this.remember){
                        localStorage.setItem('token', data.token);
                        //}
                        _this._usersService.profile = data.profile;
                        _this._router.navigate(['Home']);
                    }, function (err) { return console.log('Error: ', err); });
                };
                AuthContainerComponent.prototype.signUp = function () {
                    var _this = this;
                    this._authService.attemptSignup(this.user)
                        .subscribe(function (data) {
                        //if(this.remember){
                        localStorage.setItem('token', data.token);
                        //}
                        _this._usersService.profile = data.profile;
                        _this._router.navigate(['Home']);
                    }, function (err) { return console.log('Error: ', err); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0aC9hdXRoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQyxnQ0FDUyxZQUF5QixFQUN6QixPQUFlLEVBQ2YsYUFBMkI7b0JBRjNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQU5wQyxTQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixhQUFRLEdBQVksS0FBSyxDQUFDO29CQUNsQixTQUFJLEdBQVcsT0FBTyxDQUFDO2dCQUlRLENBQUM7O2dCQUV4QyxzQ0FBSyxHQUFMO29CQUFBLGlCQVdDO29CQVZBLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ3ZDLFNBQVMsQ0FDVCxVQUFBLElBQUk7d0JBQ0gsb0JBQW9CO3dCQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzNDLEdBQUc7d0JBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFBO2dCQUN0QyxDQUFDO2dCQUNELHVDQUFNLEdBQU47b0JBQUEsaUJBV0M7b0JBVkEsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzt5QkFDeEMsU0FBUyxDQUNULFVBQUEsSUFBSTt3QkFDSCxvQkFBb0I7d0JBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDM0MsR0FBRzt3QkFDSCxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUMxQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUE7Z0JBQ3RDLENBQUM7Z0JBdENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsV0FBVyxFQUFFLHdDQUF3Qzt3QkFDckQsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQzt3QkFDeEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7OzBDQUFBO2dCQWtDRiw2QkFBQztZQUFELENBakNBLEFBaUNDLElBQUE7WUFqQ0QsMkRBaUNDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hdXRoL2F1dGgtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi9zaGFyZWQvdXNlcic7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1VzZXJzU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvLWF1dGgtY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9hdXRoL2F1dGgtY29udGFpbmVyLnRwbC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV0sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29udGFpbmVyQ29tcG9uZW50e1xuXHR1c2VyOiBVc2VyID0gbmV3IFVzZXIoJycsICcnKTtcblx0cmVtZW1iZXI6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHJpdmF0ZSBtb2RlOiBzdHJpbmcgPSAnbG9naW4nOyBcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKSB7fTtcblxuXHRsb2dpbigpe1xuXHRcdHRoaXMuX2F1dGhTZXJ2aWNlLmF0dGVtcHRMb2dpbih0aGlzLnVzZXIpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHRkYXRhID0+IHtcblx0XHRcdFx0XHQvL2lmKHRoaXMucmVtZW1iZXIpe1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XG5cdFx0XHRcdFx0Ly99XG5cdFx0XHRcdFx0dGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUgPSBkYXRhLnByb2ZpbGU7XG5cdFx0XHRcdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyKSlcblx0fVxuXHRzaWduVXAoKXtcblx0XHR0aGlzLl9hdXRoU2VydmljZS5hdHRlbXB0U2lnbnVwKHRoaXMudXNlcilcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRcdC8vaWYodGhpcy5yZW1lbWJlcil7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcblx0XHRcdFx0XHQvL31cblx0XHRcdFx0XHR0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZSA9IGRhdGEucHJvZmlsZTtcblx0XHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpKVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
