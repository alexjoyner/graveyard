System.register(['angular2/core', 'angular2/router', './components/home/home-container.component', './components/issue/issue-container.component', './components/navbar/navbar.component', './components/auth/auth-container.component', './shared/auth.service', './shared/users.service', './shared/auth-router-outlet.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, home_container_component_1, issue_container_component_1, navbar_component_1, auth_container_component_1, auth_service_1, users_service_1, auth_router_outlet_directive_1;
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
                        }, function (err) {
                            console.log('ERROR: ', err);
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
                        template: "\n    \t<ro-navbar></ro-navbar>\n    \t<div class=\"container\">\n    \t\t<auth-router-outlet></auth-router-outlet>\n    \t</div>\n        <div style=\"height: 60vh\"></div>\n    ",
                        directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES, auth_router_outlet_directive_1.AuthRouterOutlet],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBQ0ksc0JBQ1ksT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGFBQTJCO29CQUYzQixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztnQkFBRSxDQUFDO2dCQUMxQywrQkFBUSxHQUFSO29CQUFBLGlCQW1CQztvQkFsQkcsNERBQTREO29CQUM1RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7NkJBQzFCLFNBQVMsQ0FDTixVQUFBLElBQUk7NEJBQ0EsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzRCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hFLENBQUMsRUFDRCxVQUFBLEdBQUc7NEJBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ2hDLENBQUMsQ0FBQyxDQUFBO29CQUNkLENBQUM7b0JBQUEsQ0FBQztvQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFO3lCQUNoQyxTQUFTLENBQ04sVUFBQSxJQUFJO3dCQUNBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO29CQUMzQyxDQUFDLENBQUMsQ0FBQTtnQkFDZCxDQUFDO2dCQTFDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUscUxBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSwwQkFBaUIsRUFBRSwrQ0FBZ0IsQ0FBQzt3QkFDbEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQzt3QkFDeEIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBQ2hDLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDL0UsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUU7d0JBQy9FLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRTtxQkFDckUsQ0FBQzs7Z0NBQUE7Z0JBMEJGLG1CQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCx1Q0F5QkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIb21lQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtJc3N1ZUNvbnRhaW5lckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoL2F1dGgtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHtBdXRoUm91dGVyT3V0bGV0fSBmcm9tICcuL3NoYXJlZC9hdXRoLXJvdXRlci1vdXRsZXQuZGlyZWN0aXZlJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PHJvLW5hdmJhcj48L3JvLW5hdmJhcj5cbiAgICBcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICBcdFx0PGF1dGgtcm91dGVyLW91dGxldD48L2F1dGgtcm91dGVyLW91dGxldD5cbiAgICBcdDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiA2MHZoXCI+PC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTmF2YmFyQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUywgQXV0aFJvdXRlck91dGxldF0sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogWydzdHlsZXMvYXBwLmNzcyddXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0eyBwYXRoOiAnLycsIG5hbWU6ICdIb21lJywgY29tcG9uZW50OiBIb21lQ29udGFpbmVyQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcbiAgICB7IHBhdGg6ICcvSXNzdWUvOnR5cGUvOmlkJywgbmFtZTogJ0lzc3VlJywgY29tcG9uZW50OiBJc3N1ZUNvbnRhaW5lckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9BdXRoJywgbmFtZTogJ0F1dGgnLCBjb21wb25lbnQ6IEF1dGhDb250YWluZXJDb21wb25lbnQgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3VzZXJzU2VydmljZTogVXNlcnNTZXJ2aWNlKXt9XG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICAvL1RoZSBiZWxvdyBOZWVkcyB0byBiZSBmaXhlZCB0byBnZXQgdXNlciB3aGVuIHRoZSBhcHAgYm9vdHNcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB7XG4gICAgICAgICAgICB0aGlzLl91c2Vyc1NlcnZpY2UuZ2V0UHJvZmlsZSgpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3RvcmVkIHByb2ZpbGU6ICcsIHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UuZ2V0TG9nZ2VkT3V0RXZlbnQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnSG9tZSddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICB9XG59ICAgIFxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
