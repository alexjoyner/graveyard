System.register(['angular2/core', 'angular2/router', './recipe-book/recipes.component', './shopping-list/shopping-list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, recipes_component_1, shopping_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipes_component_1_1) {
                recipes_component_1 = recipes_component_1_1;
            },
            function (shopping_list_component_1_1) {
                shopping_list_component_1 = shopping_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<header>\n    \t\t<nav>\n    \t\t\t<ul>\n    \t\t\t\t<li><a [routerLink]=\"['Recipes']\">Recipes</a></li>\n    \t\t\t\t<li><a [routerLink]=\"['ShoppingList']\">Shopping List</a></li>\n    \t\t\t</ul>\n    \t\t</nav>\n    \t</header>\n    \t<div class=\"main\">\n\t\t\t<router-outlet></router-outlet>\n    \t</div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/recipes/...', name: 'Recipes', component: recipes_component_1.RecipesComponent, useAsDefault: true },
                        { path: '/shopping-list', name: 'ShoppingList', component: shopping_list_component_1.ShoppingListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkF0QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHlVQVlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDO29CQUNELG9CQUFXLENBQUM7d0JBQ1osRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ3hGLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLCtDQUFxQixFQUFDO3FCQUNoRixDQUFDOztnQ0FBQTtnQkFFRixtQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsdUNBQ0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge1JlY2lwZXNDb21wb25lbnR9IGZyb20gJy4vcmVjaXBlLWJvb2svcmVjaXBlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtTaG9wcGluZ0xpc3RDb21wb25lbnR9IGZyb20gJy4vc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcdDxoZWFkZXI+XG4gICAgXHRcdDxuYXY+XG4gICAgXHRcdFx0PHVsPlxuICAgIFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnUmVjaXBlcyddXCI+UmVjaXBlczwvYT48L2xpPlxuICAgIFx0XHRcdFx0PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnU2hvcHBpbmdMaXN0J11cIj5TaG9wcGluZyBMaXN0PC9hPjwvbGk+XG4gICAgXHRcdFx0PC91bD5cbiAgICBcdFx0PC9uYXY+XG4gICAgXHQ8L2hlYWRlcj5cbiAgICBcdDxkaXYgY2xhc3M9XCJtYWluXCI+XG5cdFx0XHQ8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgXHQ8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuXHR7cGF0aDogJy9yZWNpcGVzLy4uLicsIG5hbWU6ICdSZWNpcGVzJywgY29tcG9uZW50OiBSZWNpcGVzQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuXHR7cGF0aDogJy9zaG9wcGluZy1saXN0JywgbmFtZTogJ1Nob3BwaW5nTGlzdCcsIGNvbXBvbmVudDogU2hvcHBpbmdMaXN0Q29tcG9uZW50fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
