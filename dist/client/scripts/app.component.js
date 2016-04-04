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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQ0ksc0JBQ1ksT0FBZSxFQUNmLFlBQXlCLEVBQ3pCLGFBQTJCO29CQUYzQixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztnQkFBRSxDQUFDO2dCQUMxQywrQkFBUSxHQUFSO29CQUFBLGlCQW1CQztvQkFsQkcsNERBQTREO29CQUM1RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7NkJBQzFCLFNBQVMsQ0FDTixVQUFBLElBQUk7NEJBQ0EsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzRCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hFLENBQUMsRUFDRCxVQUFBLEdBQUc7NEJBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBQ2hDLENBQUMsQ0FBQyxDQUFBO29CQUNkLENBQUM7b0JBQUEsQ0FBQztvQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFO3lCQUNoQyxTQUFTLENBQ04sVUFBQSxJQUFJO3dCQUNBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO29CQUMzQyxDQUFDLENBQUMsQ0FBQTtnQkFDZCxDQUFDO2dCQTFDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsMktBTVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsa0NBQWUsRUFBRSwwQkFBaUIsQ0FBQzt3QkFDaEQsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQzt3QkFDeEIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBQ2hDLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWixFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDL0UsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUU7d0JBQy9FLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRTtxQkFDckUsQ0FBQzs7Z0NBQUE7Z0JBMEJGLG1CQUFDO1lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtZQXpCRCx1Q0F5QkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIb21lQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS9ob21lLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtJc3N1ZUNvbnRhaW5lckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2lzc3VlL2lzc3VlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9hdXRoL2F1dGgtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICcuL3NoYXJlZC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2Vyc1NlcnZpY2V9IGZyb20gJy4vc2hhcmVkL3VzZXJzLnNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8cm8tbmF2YmFyPjwvcm8tbmF2YmFyPlxuICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgXHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogNjB2aFwiPjwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW05hdmJhckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnc3R5bGVzL2FwcC5jc3MnXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy8nLCBuYW1lOiAnSG9tZScsIGNvbXBvbmVudDogSG9tZUNvbnRhaW5lckNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG4gICAgeyBwYXRoOiAnL0lzc3VlLzp0eXBlLzppZCcsIG5hbWU6ICdJc3N1ZScsIGNvbXBvbmVudDogSXNzdWVDb250YWluZXJDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICcvQXV0aCcsIG5hbWU6ICdBdXRoJywgY29tcG9uZW50OiBBdXRoQ29udGFpbmVyQ29tcG9uZW50IH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF91c2Vyc1NlcnZpY2U6IFVzZXJzU2VydmljZSl7fVxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgLy9UaGUgYmVsb3cgTmVlZHMgdG8gYmUgZml4ZWQgdG8gZ2V0IHVzZXIgd2hlbiB0aGUgYXBwIGJvb3RzXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkge1xuICAgICAgICAgICAgdGhpcy5fdXNlcnNTZXJ2aWNlLmdldFByb2ZpbGUoKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXNlcnNTZXJ2aWNlLnByb2ZpbGUgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0b3JlZCBwcm9maWxlOiAnLCB0aGlzLl91c2Vyc1NlcnZpY2UucHJvZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6ICcsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmdldExvZ2dlZE91dEV2ZW50KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJzU2VydmljZS5wcm9maWxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgfVxufSAgICBcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
