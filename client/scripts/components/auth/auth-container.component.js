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
                        console.log('DATA: ', data);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0aC9hdXRoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFJQyxnQ0FDUyxZQUF5QixFQUN6QixPQUFlLEVBQ2YsYUFBMkI7b0JBRjNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO29CQU5wQyxTQUFJLEdBQVMsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixhQUFRLEdBQVksS0FBSyxDQUFDO29CQUNsQixTQUFJLEdBQVcsT0FBTyxDQUFDO2dCQUlRLENBQUM7O2dCQUV4QyxzQ0FBSyxHQUFMO29CQUFBLGlCQVlDO29CQVhBLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ3ZDLFNBQVMsQ0FDVCxVQUFBLElBQUk7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzVCLG9CQUFvQjt3QkFDbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQyxHQUFHO3dCQUNILEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQzFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtnQkFDdEMsQ0FBQztnQkFDRCx1Q0FBTSxHQUFOO29CQUFBLGlCQVdDO29CQVZBLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ3hDLFNBQVMsQ0FDVCxVQUFBLElBQUk7d0JBQ0gsb0JBQW9CO3dCQUNuQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzNDLEdBQUc7d0JBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFBO2dCQUN0QyxDQUFDO2dCQXZDRjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFdBQVcsRUFBRSx3Q0FBd0M7d0JBQ3JELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOzswQ0FBQTtnQkFtQ0YsNkJBQUM7WUFBRCxDQWxDQSxBQWtDQyxJQUFBO1lBbENELDJEQWtDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXV0aC9hdXRoLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vLi4vc2hhcmVkL3VzZXInO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyby1hdXRoLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvYXV0aC9hdXRoLWNvbnRhaW5lci50cGwuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbnRhaW5lckNvbXBvbmVudHtcblx0dXNlcjogVXNlciA9IG5ldyBVc2VyKCcnLCAnJyk7XG5cdHJlbWVtYmVyOiBib29sZWFuID0gZmFsc2U7XG5cdHByaXZhdGUgbW9kZTogc3RyaW5nID0gJ2xvZ2luJzsgXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcblx0XHRwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkge307XG5cblx0bG9naW4oKXtcblx0XHR0aGlzLl9hdXRoU2VydmljZS5hdHRlbXB0TG9naW4odGhpcy51c2VyKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ0RBVEE6ICcsIGRhdGEpO1xuXHRcdFx0XHRcdC8vaWYodGhpcy5yZW1lbWJlcil7XG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcblx0XHRcdFx0XHQvL31cblx0XHRcdFx0XHR0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZSA9IGRhdGEucHJvZmlsZTtcblx0XHRcdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIpKVxuXHR9XG5cdHNpZ25VcCgpe1xuXHRcdHRoaXMuX2F1dGhTZXJ2aWNlLmF0dGVtcHRTaWdudXAodGhpcy51c2VyKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0ZGF0YSA9PiB7XG5cdFx0XHRcdFx0Ly9pZih0aGlzLnJlbWVtYmVyKXtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pO1xuXHRcdFx0XHRcdC8vfVxuXHRcdFx0XHRcdHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlID0gZGF0YS5wcm9maWxlO1xuXHRcdFx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycikpXG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
