System.register(['angular2/core', 'angular2/router', './components/home/home-container.component', './components/issue/issue-container.component', './components/navbar/navbar.component'], function(exports_1, context_1) {
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
    var core_1, router_1, home_container_component_1, issue_container_component_1, navbar_component_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<ro-navbar></ro-navbar>\n    \t<div class=\"container\">\n    \t\t<router-outlet></router-outlet>\n    \t</div>\n    ",
                        directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/Home', name: 'Home', component: home_container_component_1.HomeContainerComponent, useAsDefault: true },
                        { path: '/Issue/:type/:id', name: 'Issue', component: issue_container_component_1.IssueContainerComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFoQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLCtIQUtUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsMEJBQWlCLENBQUM7cUJBQ25ELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDWixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDbkYsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsbURBQXVCLEVBQUU7cUJBQ2xGLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SG9tZUNvbnRhaW5lckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7SXNzdWVDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9pc3N1ZS9pc3N1ZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxyby1uYXZiYXI+PC9yby1uYXZiYXI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgXHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBcdDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW05hdmJhckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlQ29uZmlnKFtcblx0eyBwYXRoOiAnL0hvbWUnLCBuYW1lOiAnSG9tZScsIGNvbXBvbmVudDogSG9tZUNvbnRhaW5lckNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXG4gICAgeyBwYXRoOiAnL0lzc3VlLzp0eXBlLzppZCcsIG5hbWU6ICdJc3N1ZScsIGNvbXBvbmVudDogSXNzdWVDb250YWluZXJDb21wb25lbnQgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
