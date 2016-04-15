System.register(['angular2/core', 'angular2/router', './components/home/home-container.component', './components/issue/issue-container.component', './components/navbar/navbar.component', './components/alertBar/alertBar.component', './components/auth/auth-container.component', './shared/auth.service', './shared/users.service', './shared/auth-router-outlet.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, home_container_component_1, issue_container_component_1, navbar_component_1, alertBar_component_1, auth_container_component_1, auth_service_1, users_service_1, auth_router_outlet_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_container_component_1_1) {
                home_container_component_1 = home_container_component_1_1;
            },
            function (issue_container_component_1_1) {
                issue_container_component_1 = issue_container_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (alertBar_component_1_1) {
                alertBar_component_1 = alertBar_component_1_1;
            },
            function (auth_container_component_1_1) {
                auth_container_component_1 = auth_container_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (auth_router_outlet_directive_1_1) {
                auth_router_outlet_directive_1 = auth_router_outlet_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _authService, _usersService) {
                    this._router = _router;
                    this._authService = _authService;
                    this._usersService = _usersService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //The below Needs to be fixed to get user when the app boots
                    if (localStorage.getItem('token')) {
                        this._usersService.getProfile()
                            .subscribe(function (data) {
                            _this._usersService.profile = data;
                            console.log('Stored profile: ', _this._usersService.profile);
                        });
                    }
                    ;
                    this._authService.getLoggedOutEvent()
                        .subscribe(function (data) {
                        _this._router.navigate(['Home']);
                        _this._usersService.profile = undefined;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <ro-navbar></ro-navbar>\n    \t<ro-alert-bar></ro-alert-bar>\n    \t<div class=\"container\">\n    \t\t<auth-router-outlet></auth-router-outlet>\n    \t</div>\n        <div style=\"height: 60vh\"></div>\n    ",
                        directives: [navbar_component_1.NavbarComponent, alertBar_component_1.AlertBarComponent, router_1.ROUTER_DIRECTIVES, auth_router_outlet_directive_1.AuthRouterOutlet],
                        providers: [auth_service_1.AuthService],
                        styleUrls: ['styles/app.css']
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_container_component_1.HomeContainerComponent, useAsDefault: true },
                        { path: '/Issue/:type/:id', name: 'Issue', component: issue_container_component_1.IssueContainerComponent },
                        { path: '/Auth', name: 'Auth', component: auth_container_component_1.AuthContainerComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, users_service_1.UsersService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBQ0ksc0JBQ1ksT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGFBQTJCO29CQUYzQixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztnQkFDdkMsQ0FBQztnQkFFRCwrQkFBUSxHQUFSO29CQUFBLGlCQWdCQztvQkFmRyw0REFBNEQ7b0JBQzVELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRTs2QkFDMUIsU0FBUyxDQUNWLFVBQUEsSUFBSTs0QkFDQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7NEJBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDaEUsQ0FBQyxDQUFDLENBQUE7b0JBQ1YsQ0FBQztvQkFBQSxDQUFDO29CQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUU7eUJBQ2hDLFNBQVMsQ0FDTixVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNoQyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7b0JBQzNDLENBQUMsQ0FBQyxDQUFBO2dCQUNkLENBQUM7Z0JBMUNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSw0TkFPVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLHNDQUFpQixFQUFFLDBCQUFpQixFQUFFLCtDQUFnQixDQUFDO3dCQUNyRixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3dCQUN4QixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDaEMsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNaLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3dCQUMvRSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBRTt3QkFDL0UsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFO3FCQUNyRSxDQUFDOztnQ0FBQTtnQkF5QkYsbUJBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELHVDQXdCQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hvbWVDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0lzc3VlQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7QWxlcnRCYXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydEJhci9hbGVydEJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7QXV0aFJvdXRlck91dGxldH0gZnJvbSAnLi9zaGFyZWQvYXV0aC1yb3V0ZXItb3V0bGV0LmRpcmVjdGl2ZSc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHJvLW5hdmJhcj48L3JvLW5hdmJhcj5cbiAgICBcdDxyby1hbGVydC1iYXI+PC9yby1hbGVydC1iYXI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgXHRcdDxhdXRoLXJvdXRlci1vdXRsZXQ+PC9hdXRoLXJvdXRlci1vdXRsZXQ+XG4gICAgXHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogNjB2aFwiPjwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW05hdmJhckNvbXBvbmVudCwgQWxlcnRCYXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTLCBBdXRoUm91dGVyT3V0bGV0XSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9hcHAuY3NzJ11cbn0pXG5AUm91dGVDb25maWcoW1xuXHR7IHBhdGg6ICcvJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb250YWluZXJDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICAgIHsgcGF0aDogJy9Jc3N1ZS86dHlwZS86aWQnLCBuYW1lOiAnSXNzdWUnLCBjb21wb25lbnQ6IElzc3VlQ29udGFpbmVyQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL0F1dGgnLCBuYW1lOiAnQXV0aCcsIGNvbXBvbmVudDogQXV0aENvbnRhaW5lckNvbXBvbmVudCB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UpIHtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKTogYW55IHtcbiAgICAgICAgLy9UaGUgYmVsb3cgTmVlZHMgdG8gYmUgZml4ZWQgdG8gZ2V0IHVzZXIgd2hlbiB0aGUgYXBwIGJvb3RzXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkge1xuICAgICAgICAgICAgdGhpcy5fdXNlcnNTZXJ2aWNlLmdldFByb2ZpbGUoKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0b3JlZCBwcm9maWxlOiAnLCB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0TG9nZ2VkT3V0RXZlbnQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICB9XG59ICAgIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
