System.register(['angular2/core', './recipe-book/recipes.component'], function(exports_1, context_1) {
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
    var core_1, recipes_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipes_component_1_1) {
                recipes_component_1 = recipes_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \t<header>\n    \t\t<nav>\n    \t\t\t<ul>\n    \t\t\t\t<li><a>Recipes</a></li>\n    \t\t\t\t<li><a>Shopping List</a></li>\n    \t\t\t</ul>\n    \t\t</nav>\n    \t</header>\n    \t<div class=\"main\">\n\t\t\t<my-recipes></my-recipes>\n    \t</div>\n    ",
                        directives: [recipes_component_1.RecipesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFsQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLG9RQVlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO3FCQUNqQyxDQUFDOztnQ0FBQTtnQkFFRixtQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsdUNBQ0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSZWNpcGVzQ29tcG9uZW50fSBmcm9tICcuL3JlY2lwZS1ib29rL3JlY2lwZXMuY29tcG9uZW50J1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aGVhZGVyPlxuICAgIFx0XHQ8bmF2PlxuICAgIFx0XHRcdDx1bD5cbiAgICBcdFx0XHRcdDxsaT48YT5SZWNpcGVzPC9hPjwvbGk+XG4gICAgXHRcdFx0XHQ8bGk+PGE+U2hvcHBpbmcgTGlzdDwvYT48L2xpPlxuICAgIFx0XHRcdDwvdWw+XG4gICAgXHRcdDwvbmF2PlxuICAgIFx0PC9oZWFkZXI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwibWFpblwiPlxuXHRcdFx0PG15LXJlY2lwZXM+PC9teS1yZWNpcGVzPlxuICAgIFx0PC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUmVjaXBlc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
