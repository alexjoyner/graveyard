System.register(['angular2/core', 'angular2/router', './components/home/home-container.component', './components/question/question-container.component', './components/navbar/navbar.component', './components/alertBar/alertBar.component', './components/auth/auth-container.component', './shared/auth.service', './shared/users.service', './shared/auth-router-outlet.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, home_container_component_1, question_container_component_1, navbar_component_1, alertBar_component_1, auth_container_component_1, auth_service_1, users_service_1, auth_router_outlet_directive_1;
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
            function (question_container_component_1_1) {
                question_container_component_1 = question_container_component_1_1;
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
                    this._usersService.getProfile();
                    this._authService.getLoggedOutEvent()
                        .subscribe(function (data) {
                        _this._router.navigate(['Auth']);
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
                        { path: '/Question/:type/:id', name: 'Question', component: question_container_component_1.QuestionContainerComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBQ0ksc0JBQ1ksT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGFBQTJCO29CQUYzQixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztnQkFDdkMsQ0FBQztnQkFFRCwrQkFBUSxHQUFSO29CQUFBLGlCQVNDO29CQVJHLDREQUE0RDtvQkFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRTt5QkFDaEMsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFDQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLENBQUE7Z0JBQ2QsQ0FBQztnQkFuQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDROQU9UO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsc0NBQWlCLEVBQUUsMEJBQWlCLEVBQUUsK0NBQWdCLENBQUM7d0JBQ3JGLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7d0JBQ3hCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUNoQyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQy9FLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHlEQUEwQixFQUFFO3dCQUN4RixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUU7cUJBQ3JFLENBQUM7O2dDQUFBO2dCQWtCRixtQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsdUNBaUJDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SG9tZUNvbnRhaW5lckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7UXVlc3Rpb25Db250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9xdWVzdGlvbi9xdWVzdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtBbGVydEJhckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0QmFyL2FsZXJ0QmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoL2F1dGgtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoUm91dGVyT3V0bGV0fSBmcm9tICcuL3NoYXJlZC9hdXRoLXJvdXRlci1vdXRsZXQuZGlyZWN0aXZlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8cm8tbmF2YmFyPjwvcm8tbmF2YmFyPlxuICAgIFx0PHJvLWFsZXJ0LWJhcj48L3JvLWFsZXJ0LWJhcj5cbiAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICBcdFx0PGF1dGgtcm91dGVyLW91dGxldD48L2F1dGgtcm91dGVyLW91dGxldD5cbiAgICBcdDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiA2MHZoXCI+PC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LCBBbGVydEJhckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVMsIEF1dGhSb3V0ZXJPdXRsZXRdLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL2FwcC5jc3MnXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy8nLCBuYW1lOiAnSG9tZScsIGNvbXBvbmVudDogSG9tZUNvbnRhaW5lckNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG4gICAgeyBwYXRoOiAnL1F1ZXN0aW9uLzp0eXBlLzppZCcsIG5hbWU6ICdRdWVzdGlvbicsIGNvbXBvbmVudDogUXVlc3Rpb25Db250YWluZXJDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvQXV0aCcsIG5hbWU6ICdBdXRoJywgY29tcG9uZW50OiBBdXRoQ29udGFpbmVyQ29tcG9uZW50IH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSkge1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpOiBhbnkge1xuICAgICAgICAvL1RoZSBiZWxvdyBOZWVkcyB0byBiZSBmaXhlZCB0byBnZXQgdXNlciB3aGVuIHRoZSBhcHAgYm9vdHNcbiAgICAgICAgdGhpcy5fdXNlcnNTZXJ2aWNlLmdldFByb2ZpbGUoKTtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0TG9nZ2VkT3V0RXZlbnQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQXV0aCddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICB9XG59ICAgIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
