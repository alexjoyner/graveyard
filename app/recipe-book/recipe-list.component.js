System.register(['angular2/core', './recipe.service'], function(exports_1, context_1) {
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
    var core_1, recipe_service_1;
    var RecipeListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (recipe_service_1_1) {
                recipe_service_1 = recipe_service_1_1;
            }],
        execute: function() {
            RecipeListComponent = (function () {
                function RecipeListComponent(_recipeService) {
                    this._recipeService = _recipeService;
                }
                ;
                RecipeListComponent.prototype.ngOnInit = function () {
                    this.recipes = this._recipeService.getAllRecipes();
                };
                RecipeListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-recipe-list',
                        templateUrl: 'dev/recipe-book/recipe-list.template.html'
                    }), 
                    __metadata('design:paramtypes', [recipe_service_1.RecipeService])
                ], RecipeListComponent);
                return RecipeListComponent;
            }());
            exports_1("RecipeListComponent", RecipeListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1ib29rL3JlY2lwZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUdDLDZCQUFvQixjQUE2QjtvQkFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7Z0JBQUcsQ0FBQzs7Z0JBRXJELHNDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNwRCxDQUFDO2dCQVhGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLDJDQUEyQztxQkFDM0QsQ0FBQzs7dUNBQUE7Z0JBU0YsMEJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHFEQVFDLENBQUEiLCJmaWxlIjoicmVjaXBlLWJvb2svcmVjaXBlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JlY2lwZVNlcnZpY2V9IGZyb20gJy4vcmVjaXBlLnNlcnZpY2UnO1xuaW1wb3J0IHtSZWNpcGV9IGZyb20gJy4uL3NoYXJlZC9yZWNpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXJlY2lwZS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9yZWNpcGUtYm9vay9yZWNpcGUtbGlzdC50ZW1wbGF0ZS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBSZWNpcGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0cmVjaXBlczogUmVjaXBlW107XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcmVjaXBlU2VydmljZTogUmVjaXBlU2VydmljZSkge307XG5cblx0bmdPbkluaXQoKTphbnkge1xuXHRcdHRoaXMucmVjaXBlcyA9IHRoaXMuX3JlY2lwZVNlcnZpY2UuZ2V0QWxsUmVjaXBlcygpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
