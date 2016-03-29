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
                        template: "\n    \t<ro-navbar></ro-navbar>\n    \t<div class=\"container\">\n    \t\t<router-outlet></router-outlet>\n    \t</div>\n        <div style=\"height: 60vh\"></div>\n    ",
                        directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['src/css/app.css']
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFqQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDJLQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUUsMEJBQWlCLENBQUM7d0JBQ2hELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO3FCQUNqQyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7d0JBQ25GLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFFO3FCQUNsRixDQUFDOztnQ0FBQTtnQkFFRixtQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsdUNBQ0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hvbWVDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0lzc3VlQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvaXNzdWUvaXNzdWUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8cm8tbmF2YmFyPjwvcm8tbmF2YmFyPlxuICAgIFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgXHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogNjB2aFwiPjwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW05hdmJhckNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL2FwcC5jc3MnXVxufSlcbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy9Ib21lJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb250YWluZXJDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxuICAgIHsgcGF0aDogJy9Jc3N1ZS86dHlwZS86aWQnLCBuYW1lOiAnSXNzdWUnLCBjb21wb25lbnQ6IElzc3VlQ29udGFpbmVyQ29tcG9uZW50IH1cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
