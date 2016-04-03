System.register(['angular2/core', 'angular2/router', './components/home/home-container.component', './components/issue/issue-container.component', './components/navbar/navbar.component', './components/auth/auth-container.component', './shared/auth.service', './shared/users.service'], function(exports_1, context_1) {
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
    var core_1, router_1, home_container_component_1, issue_container_component_1, navbar_component_1, auth_container_component_1, auth_service_1, users_service_1;
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
            function (auth_container_component_1_1) {
                auth_container_component_1 = auth_container_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
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
                    // The below Needs to be fixed to get user when the app boots
                    // if (localStorage.getItem('token')) {
                    //     this._authService.attemptLogin()
                    // };
                    this._authService.getLoggedOutEvent()
                        .subscribe(function (data) {
                        _this._router.navigate(['Home']);
                        _this._usersService.profile = undefined;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<ro-navbar></ro-navbar>\n    \t<div class=\"container\">\n    \t\t<router-outlet></router-outlet>\n    \t</div>\n        <div style=\"height: 60vh\"></div>\n    ",
                        directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQ0ksc0JBQ1ksT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGFBQTJCO29CQUYzQixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztnQkFBRSxDQUFDO2dCQUMxQywrQkFBUSxHQUFSO29CQUFBLGlCQVdDO29CQVZHLDZEQUE2RDtvQkFDN0QsdUNBQXVDO29CQUN2Qyx1Q0FBdUM7b0JBQ3ZDLEtBQUs7b0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRTt5QkFDaEMsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFDQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFsQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJLQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsMEJBQWlCLENBQUM7d0JBQ2hELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUNoQyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQy9FLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFFO3dCQUMvRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUU7cUJBQ3JFLENBQUM7O2dDQUFBO2dCQWtCRixtQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsdUNBaUJDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SG9tZUNvbnRhaW5lckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7SXNzdWVDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9pc3N1ZS9pc3N1ZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC9hdXRoLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi9zaGFyZWQvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7VXNlcnNTZXJ2aWNlfSBmcm9tICcuL3NoYXJlZC91c2Vycy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PHJvLW5hdmJhcj48L3JvLW5hdmJhcj5cbiAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICBcdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIFx0PC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDYwdmhcIj48L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtOYXZiYXJDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJ3N0eWxlcy9hcHAuY3NzJ11cbn0pXG5AUm91dGVDb25maWcoW1xuXHR7IHBhdGg6ICcvJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb250YWluZXJDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICAgIHsgcGF0aDogJy9Jc3N1ZS86dHlwZS86aWQnLCBuYW1lOiAnSXNzdWUnLCBjb21wb25lbnQ6IElzc3VlQ29udGFpbmVyQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL0F1dGgnLCBuYW1lOiAnQXV0aCcsIGNvbXBvbmVudDogQXV0aENvbnRhaW5lckNvbXBvbmVudCB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBVc2Vyc1NlcnZpY2Upe31cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIC8vIFRoZSBiZWxvdyBOZWVkcyB0byBiZSBmaXhlZCB0byBnZXQgdXNlciB3aGVuIHRoZSBhcHAgYm9vdHNcbiAgICAgICAgLy8gaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLl9hdXRoU2VydmljZS5hdHRlbXB0TG9naW4oKVxuICAgICAgICAvLyB9O1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5nZXRMb2dnZWRPdXRFdmVudCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydIb21lJ10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9KVxuICAgIH1cbn0gICAgXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
